import { ChevronDownIcon } from "../icons";
import styles from "./DateField.module.css";

const DAYS = Array.from({ length: 31 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 80 }, (_, i) => String(CURRENT_YEAR - i));

// Day / Month / Year dropdown row, with an optional "Don't show" checkbox
// under Day and under Month so an entry can omit the exact day/month on
// the resume while keeping the year (used by Awards; reusable anywhere
// else a date needs this granular show/hide control instead of a plain
// MM/YYYY TextField).
export default function DateField({
  label = "Date",
  day,
  month,
  year,
  onDayChange,
  onMonthChange,
  onYearChange,
  hideDay,
  onHideDayChange,
  hideMonth,
  onHideMonthChange,
}) {
  return (
    <div className={styles.field}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.row}>
        <div className={styles.selectWrapper}>
          <select
            className={styles.select}
            value={day}
            onChange={(e) => onDayChange(e.target.value)}
          >
            <option value="" disabled hidden>
              Day
            </option>
            {DAYS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <span className={styles.chevron}>
            <ChevronDownIcon />
          </span>
        </div>

        <div className={styles.selectWrapper}>
          <select
            className={styles.select}
            value={month}
            onChange={(e) => onMonthChange(e.target.value)}
          >
            <option value="" disabled hidden>
              Month
            </option>
            {MONTHS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <span className={styles.chevron}>
            <ChevronDownIcon />
          </span>
        </div>

        <div className={styles.selectWrapper}>
          <select
            className={styles.select}
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
          >
            <option value="" disabled hidden>
              Year
            </option>
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <span className={styles.chevron}>
            <ChevronDownIcon />
          </span>
        </div>
      </div>

      <div className={styles.hideRow}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={!!hideDay}
            onChange={(e) => onHideDayChange?.(e.target.checked)}
          />
          Don't show
        </label>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={!!hideMonth}
            onChange={(e) => onHideMonthChange?.(e.target.checked)}
          />
          Don't show
        </label>
      </div>
    </div>
  );
}
