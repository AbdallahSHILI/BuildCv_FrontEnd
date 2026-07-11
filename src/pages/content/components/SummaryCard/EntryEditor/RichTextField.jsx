import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  ListIcon,
  LinkIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  AlignJustifyIcon,
  RobotIcon,
} from "./icons";
import styles from "./RichTextField.module.css";

const ALIGN_OPTIONS = [
  { key: "left", Icon: AlignLeftIcon },
  { key: "center", Icon: AlignCenterIcon },
  { key: "right", Icon: AlignRightIcon },
  { key: "justify", Icon: AlignJustifyIcon },
];

// Formatting toolbar + textarea. Pass `aiActions` (array of string labels,
// e.g. ["Improve Writing", "Grammar Check", "Shorter"]) to show the AI
// suggestion chips underneath, as on the Summary entry. Omit it for
// entries that don't need AI help (Language, Interest).
export default function RichTextField({
  label,
  value,
  onChange,
  placeholder,
  align = "left",
  onAlignChange,
  aiActions,
  onAiAction,
}) {
  return (
    <div className={styles.field}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.editor}>
        <div className={styles.toolbar}>
          <button type="button" className={styles.toolbarBtn}>
            <BoldIcon />
          </button>
          <button type="button" className={styles.toolbarBtn}>
            <ItalicIcon />
          </button>
          <button type="button" className={styles.toolbarBtn}>
            <UnderlineIcon />
          </button>
          <button type="button" className={styles.toolbarBtn}>
            <ListIcon />
          </button>
          <button type="button" className={styles.toolbarBtn}>
            <LinkIcon />
          </button>
          <span className={styles.divider} />
          {ALIGN_OPTIONS.map(({ key, Icon }) => (
            <button
              key={key}
              type="button"
              className={`${styles.toolbarBtn} ${
                align === key ? styles.toolbarBtnActive : ""
              }`}
              onClick={() => onAlignChange?.(key)}
            >
              <Icon />
            </button>
          ))}
        </div>

        <textarea
          className={styles.textarea}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
        />
      </div>

      {aiActions?.length > 0 && (
        <div className={styles.aiRow}>
          <span className={styles.aiIcon}>
            <RobotIcon />
          </span>
          {aiActions.map((action) => (
            <button
              key={action}
              type="button"
              className={styles.aiChip}
              onClick={() => onAiAction?.(action)}
            >
              {action}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
