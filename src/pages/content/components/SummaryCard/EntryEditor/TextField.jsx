import { LinkIcon } from "./icons";
import styles from "./TextField.module.css";

// Labeled text input. Pass `trailingAction` to render a small button
// inside the field (used for the "Link" button on Interest entries).
export default function TextField({
  label,
  value,
  onChange,
  placeholder,
  trailingAction,
  onTrailingActionClick,
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
        {trailingAction && (
          <button
            type="button"
            className={styles.trailingBtn}
            onClick={onTrailingActionClick}
          >
            <LinkIcon />
            {trailingAction}
          </button>
        )}
      </div>
    </div>
  );
}
