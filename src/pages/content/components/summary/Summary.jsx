import { useState } from "react";

const Summary = ({ data, onChange, onDone, onDelete, styles }) => {
  const [text, setText] = useState(data || "");

  const handleChange = (e) => {
    setText(e.target.value);
    onChange(e.target.value);
  };

  const handleDone = () => onDone();

  return (
    <div className={styles.summaryCard}>
      <div className={styles.summaryHeader}>
        <h3 className={styles.summaryTitle}>Edit Entry</h3>

        <div className={styles.summaryHeaderActions}>
          <button type="button" className={styles.getTipsBtn}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
            </svg>
            Get Tips
          </button>

          <button type="button" className={styles.iconBtn} aria-label="Preview">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>

          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Delete"
            onClick={onDelete}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
      </div>

      <label className={styles.summaryLabel}>Professional Summary</label>

      <div className={styles.summaryEditor}>
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
          className={styles.summaryTextarea}
          placeholder="Write a professional summary or objective statement that highlights your key qualifications and career goals..."
          value={text}
          onChange={handleChange}
          rows={5}
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
          Grammar Check
        </button>
        <button type="button" className={styles.aiPill}>
          Shorter
        </button>
      </div>

      <button type="button" className={styles.doneBtn} onClick={handleDone}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        Done
      </button>
    </div>
  );
};

export default Summary;
