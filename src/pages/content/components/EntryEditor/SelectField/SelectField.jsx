import { ChevronDownIcon } from "../icons";
import styles from "./SelectField.module.css";

// Labeled dropdown. `options` is an array of { value, label }.
export default function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <div className={styles.selectWrapper}>
        <select
          className={styles.select}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className={styles.chevron}>
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  );
}
