import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./MonthYearField.module.css";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const NOW = new Date();
const CURRENT_YEAR = NOW.getFullYear();
const CURRENT_MONTH = NOW.getMonth() + 1; // 1-indexed

// Years never go into the future.
const YEARS = Array.from({ length: 30 }, (_, i) => CURRENT_YEAR - i);

// "MM/YYYY" -> comparable integer (year * 12 + month), or null for
// empty/"Present" values (which have no fixed position on the timeline).
function toComparable(value) {
  if (!value || value === "Present") return null;
  const [m, y] = value.split("/");
  if (!m || !y) return null;
  return Number(y) * 12 + Number(m);
}

// Read-only "MM/YYYY" field that opens a month/year picker popover on
// click instead of accepting free text. Dates can't be set in the
// future. Pass `allowPresent` for an End Date field to offer a
// "Present" shortcut instead of a specific month/year.
//
// Pass `minValue` / `maxValue` ("MM/YYYY" strings) to constrain the
// pickable range against another field — e.g. an End Date field passes
// `minValue={startDate}` so it can't be set earlier than Start Date,
// and a Start Date field passes `maxValue={endDate}` so it can't be
// set later than End Date. "Present" as a maxValue is treated as "no
// upper bound".
export default function MonthYearField({
  label,
  value,
  onChange,
  placeholder = "MM/YYYY",
  allowPresent = false,
  minValue,
  maxValue,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState(null);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const popoverRef = useRef(null);

  const isPresent = value === "Present";
  const [month, year] = !isPresent && value ? value.split("/") : ["", ""];

  const minComparable = toComparable(minValue);
  const maxComparable = maxValue === "Present" ? null : toComparable(maxValue);

  // Popover is rendered through a portal (see below) so it can't be
  // clipped by an ancestor with overflow:hidden (e.g. an accordion
  // panel). Position it with fixed coords computed from the input's
  // on-screen location, flipping horizontally if it would overflow
  // the right edge of the viewport.
  useLayoutEffect(() => {
    if (!isOpen || !inputRef.current) return;

    const POPOVER_WIDTH = 340; // matches min-width in CSS, used before first paint
    const GAP = 6;

    const position = () => {
      const rect = inputRef.current.getBoundingClientRect();
      const popoverWidth = popoverRef.current?.offsetWidth || POPOVER_WIDTH;
      const wouldOverflowRight =
        rect.left + popoverWidth > window.innerWidth - 8;

      const left = wouldOverflowRight
        ? Math.max(8, rect.right - popoverWidth)
        : rect.left;

      const wouldOverflowBottom =
        rect.bottom + GAP + 260 > window.innerHeight - 8;

      setPopoverStyle({
        position: "fixed",
        left,
        top: wouldOverflowBottom ? rect.top - GAP : rect.bottom + GAP,
        transform: wouldOverflowBottom ? "translateY(-100%)" : "none",
      });
    };

    position();
    window.addEventListener("scroll", position, true);
    window.addEventListener("resize", position);
    return () => {
      window.removeEventListener("scroll", position, true);
      window.removeEventListener("resize", position);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedInput = wrapperRef.current?.contains(e.target);
      const clickedPopover = popoverRef.current?.contains(e.target);
      if (!clickedInput && !clickedPopover) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isMonthDisabled = (monthIndex) => {
    // monthIndex is 0-based; only relevant when the selected/hovered
    // year is the current year — future months in the current year
    // are disabled, past years have all 12 months available.
    const y = Number(year) || CURRENT_YEAR;
    if (y === CURRENT_YEAR && monthIndex + 1 > CURRENT_MONTH) return true;

    const comparable = y * 12 + (monthIndex + 1);
    if (minComparable !== null && comparable < minComparable) return true;
    if (maxComparable !== null && comparable > maxComparable) return true;
    return false;
  };

  const isYearDisabled = (y) => {
    // A year is fully disabled only if every month in it falls outside
    // the allowed min/max range.
    if (minComparable !== null && y * 12 + 12 < minComparable) return true;
    if (maxComparable !== null && y * 12 + 1 > maxComparable) return true;
    return false;
  };

  const selectMonth = (index) => {
    if (isMonthDisabled(index)) return;
    const monthNum = String(index + 1).padStart(2, "0");
    onChange(`${monthNum}/${year || ""}`);
  };

  const selectYear = (y) => {
    if (isYearDisabled(y)) return;

    // if the currently-picked month is now in the future, or outside
    // the min/max range, for this year, clear it rather than leaving
    // an invalid combination
    const monthNum = Number(month);
    const monthStillValid =
      month &&
      !(y === CURRENT_YEAR && monthNum > CURRENT_MONTH) &&
      !(minComparable !== null && y * 12 + monthNum < minComparable) &&
      !(maxComparable !== null && y * 12 + monthNum > maxComparable);

    const validMonth = monthStillValid ? month : "";
    onChange(`${validMonth}/${y}`);
    if (validMonth) setIsOpen(false);
  };

  const selectPresent = () => {
    onChange("Present");
    setIsOpen(false);
  };

  return (
    <div className={styles.field} ref={wrapperRef}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        ref={inputRef}
        className={styles.input}
        value={isPresent ? "Present" : month && year ? `${month}/${year}` : ""}
        placeholder={placeholder}
        readOnly
        onClick={() => setIsOpen((o) => !o)}
      />
      {isOpen &&
        createPortal(
          <div
            ref={popoverRef}
            className={styles.popover}
            style={popoverStyle || { visibility: "hidden" }}
          >
            <div className={styles.monthGrid}>
              {MONTHS.map((m, i) => {
                const monthNum = String(i + 1).padStart(2, "0");
                const disabled = isMonthDisabled(i);
                return (
                  <button
                    key={m}
                    type="button"
                    disabled={disabled}
                    className={`${styles.cell} ${month === monthNum ? styles.cellActive : ""} ${disabled ? styles.cellDisabled : ""}`}
                    onClick={() => selectMonth(i)}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
            <div className={styles.yearCol}>
              <div className={styles.yearGrid}>
                {YEARS.map((y) => {
                  const disabled = isYearDisabled(y);
                  return (
                    <button
                      key={y}
                      type="button"
                      disabled={disabled}
                      className={`${styles.cell} ${year === String(y) ? styles.cellActive : ""} ${disabled ? styles.cellDisabled : ""}`}
                      onClick={() => selectYear(y)}
                    >
                      {y}
                    </button>
                  );
                })}
              </div>
              {allowPresent && (
                <button
                  type="button"
                  className={`${styles.presentBtn} ${isPresent ? styles.cellActive : ""}`}
                  onClick={selectPresent}
                >
                  Present
                </button>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
