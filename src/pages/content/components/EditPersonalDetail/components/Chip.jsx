import { Plus } from "../../Icons";
import styles from "./Chip.module.css";

export default function Chip({ label, onClick }) {
  return (
    <button type="button" className={styles.chip} onClick={onClick}>
      <Plus />
      {label}
    </button>
  );
}
