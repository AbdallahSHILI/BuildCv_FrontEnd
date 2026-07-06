import styles from "./EntryCard.module.css";
import { TipsIcon, PreviewIcon, DeleteIcon, DoneIcon } from "../icons/index";

/**
 * Generic wrapper for every "edit entry" section (Summary, Education,
 * Projects, Awards, Languages...). Handles the identical header/footer
 * chrome so section components only declare their own fields.
 *
 * showPreview / onDelete are optional — pass onDelete only if the section
 * is deletable (i.e. it came from Add Content, not a fixed section).
 */
const EntryCard = ({
  title,
  onDone,
  onDelete,
  showPreview = true,
  children,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.headerActions}>
          <button type="button" className={styles.tipsBtn}>
            <TipsIcon /> Get Tips
          </button>
          {showPreview && (
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Preview"
            >
              <PreviewIcon />
            </button>
          )}
          {onDelete && (
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Delete"
              onClick={onDelete}
            >
              <DeleteIcon />
            </button>
          )}
        </div>
      </div>

      <div className={styles.body}>{children}</div>

      <button type="button" className={styles.doneBtn} onClick={onDone}>
        <DoneIcon /> Done
      </button>
    </div>
  );
};

export default EntryCard;
