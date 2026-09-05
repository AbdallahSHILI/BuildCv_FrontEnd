import { useState, useRef, useEffect } from "react";
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

// Read-only "MM/YYYY" field that opens a month/year picker popover on
// click instead of accepting free text. Dates can't be set in the
// future. Pass `allowPresent` for an End Date field to offer a
// "Present" shortcut instead of a specific month/year.
export default function MonthYearField({
  label,
  value,
  onChange,
  placeholder = "MM/YYYY",
  allowPresent = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const isPresent = value === "Present";
  const [month, year] = !isPresent && value ? value.split("/") : ["", ""];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
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
    return y === CURRENT_YEAR && monthIndex + 1 > CURRENT_MONTH;
  };

  const selectMonth = (index) => {
    if (isMonthDisabled(index)) return;
    const monthNum = String(index + 1).padStart(2, "0");
    onChange(`${monthNum}/${year || ""}`);
  };

  const selectYear = (y) => {
    // if the currently-picked month is now in the future for this
    // year, clear it rather than leaving an invalid combination
    const validMonth =
      month && !(y === CURRENT_YEAR && Number(month) > CURRENT_MONTH)
        ? month
        : "";
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
        className={styles.input}
        value={isPresent ? "Present" : month && year ? `${month}/${year}` : ""}
        placeholder={placeholder}
        readOnly
        onClick={() => setIsOpen((o) => !o)}
      />
      {isOpen && (
        <div className={styles.popover}>
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
              {YEARS.map((y) => (
                <button
                  key={y}
                  type="button"
                  className={`${styles.cell} ${year === String(y) ? styles.cellActive : ""}`}
                  onClick={() => selectYear(y)}
                >
                  {y}
                </button>
              ))}
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
        </div>
      )}
    </div>
  );
}
