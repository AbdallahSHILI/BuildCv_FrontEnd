import styles from "./DescriptionEditor.module.css";

const DescriptionEditor = ({ value, onChange }) => {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>Description</label>

      <div className={styles.editorBox}>
        <div className={styles.toolbar}>
          <button type="button" className={styles.toolBtn}>
            <strong>B</strong>
          </button>
          <button type="button" className={styles.toolBtn}>
            <em>I</em>
          </button>
          <button type="button" className={styles.toolBtn}>
            <u>U</u>
          </button>

          <span className={styles.toolDivider} />

          <button type="button" className={styles.toolBtn} aria-label="List">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="9" y1="6" x2="20" y2="6" />
              <line x1="9" y1="12" x2="20" y2="12" />
              <line x1="9" y1="18" x2="20" y2="18" />
              <circle cx="4" cy="6" r="1" />
              <circle cx="4" cy="12" r="1" />
              <circle cx="4" cy="18" r="1" />
            </svg>
          </button>
          <button type="button" className={styles.toolBtn} aria-label="Link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 4.84" />
              <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L13 19.16" />
            </svg>
          </button>

          <span className={styles.toolDivider} />

          <button
            type="button"
            className={`${styles.toolBtn} ${styles.toolBtnActive}`}
            aria-label="Align left"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="14" y2="12" />
              <line x1="4" y1="18" x2="18" y2="18" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            aria-label="Align center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="5" y1="18" x2="19" y2="18" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            aria-label="Align right"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="10" y1="12" x2="20" y2="12" />
              <line x1="6" y1="18" x2="20" y2="18" />
            </svg>
          </button>
          <button type="button" className={styles.toolBtn} aria-label="Justify">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>

        <textarea
          className={styles.textarea}
          placeholder="Add a description of your education entry..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
        />
      </div>

      <div className={styles.aiRow}>
        <span className={styles.aiIcon} aria-hidden="true">
          🤖
        </span>
        <button type="button" className={styles.aiPill}>
          Improve Writing
        </button>
        <button type="button" className={styles.aiPill}>
          Suggest Content
        </button>
        <button type="button" className={styles.aiPill}>
          Grammar Check
        </button>
        <button type="button" className={styles.aiPill}>
          Shorter
        </button>
      </div>
    </div>
  );
};

export default DescriptionEditor;
