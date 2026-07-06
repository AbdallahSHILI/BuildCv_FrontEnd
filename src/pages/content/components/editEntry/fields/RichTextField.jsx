import styles from "./RichTextField.module.css";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  ListIcon,
  LinkIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  JustifyIcon,
} from "../../icons/index";

const DEFAULT_AI_ACTIONS = ["Improve Writing", "Grammar Check", "Shorter"];

const RichTextField = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 5,
  aiActions = DEFAULT_AI_ACTIONS,
}) => {
  return (
    <div className={styles.fieldGroup}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.editorBox}>
        <div className={styles.toolbar}>
          <button type="button" className={styles.toolBtn}>
            <BoldIcon />
          </button>
          <button type="button" className={styles.toolBtn}>
            <ItalicIcon />
          </button>
          <button type="button" className={styles.toolBtn}>
            <UnderlineIcon />
          </button>
          <span className={styles.toolDivider} />
          <button type="button" className={styles.toolBtn} aria-label="List">
            <ListIcon />
          </button>
          <button type="button" className={styles.toolBtn} aria-label="Link">
            <LinkIcon />
          </button>
          <span className={styles.toolDivider} />
          <button
            type="button"
            className={`${styles.toolBtn} ${styles.toolBtnActive}`}
            aria-label="Align left"
          >
            <AlignLeftIcon />
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            aria-label="Align center"
          >
            <AlignCenterIcon />
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            aria-label="Align right"
          >
            <AlignRightIcon />
          </button>
          <button type="button" className={styles.toolBtn} aria-label="Justify">
            <JustifyIcon />
          </button>
        </div>

        <textarea
          className={styles.textarea}
          placeholder={placeholder}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
        />
      </div>

      <div className={styles.aiRow}>
        <span className={styles.aiIcon} aria-hidden="true">
          🤖
        </span>
        {aiActions.map((action) => (
          <button key={action} type="button" className={styles.aiPill}>
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RichTextField;
