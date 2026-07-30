import { Bulb } from "../../Icons";
import styles from "./EditHeader.module.css";

export default function EditHeader() {
  return (
    <div className={styles.editHeader}>
      <h2>Edit Personal Details</h2>
      <button className={styles.tipsBtn}>
        <Bulb />
        Get Tips
      </button>
    </div>
  );
}
