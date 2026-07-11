import { CheckIcon } from "../icons";
import styles from "./EditEntryFooter.module.css";

// Sticky footer with the gradient "Done" button, shared by every
// edit-entry panel.
export default function EditEntryFooter({ onDone, label = "Done" }) {
  return (
    <div className={styles.footer}>
      <button className={styles.doneBtn} onClick={onDone} type="button">
        <CheckIcon />
        {label}
      </button>
    </div>
  );
}
