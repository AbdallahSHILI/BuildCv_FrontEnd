import { LightbulbIcon, EyeIcon, TrashIcon } from "./icons";
import styles from "./EditEntryHeader.module.css";

// Header chrome shared by every "Edit Entry" panel: a title, an optional
// "Get Tips" action, a preview toggle, and a delete button.
export default function EditEntryHeader({
  title = "Edit Entry",
  onGetTips,
  onPreview,
  onDelete,
}) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.actions}>
        {onGetTips && (
          <button
            className={styles.getTipsBtn}
            onClick={onGetTips}
            type="button"
          >
            <LightbulbIcon />
            Get Tips
          </button>
        )}
        <button
          className={styles.iconBtn}
          onClick={onPreview}
          aria-label="Preview entry"
          type="button"
        >
          <EyeIcon />
        </button>
        <button
          className={styles.iconBtn}
          onClick={onDelete}
          aria-label="Delete entry"
          type="button"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}
