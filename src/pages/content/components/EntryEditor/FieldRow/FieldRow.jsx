import styles from "./FieldRow.module.css";

// Lays out multiple fields side by side in an even grid — used wherever
// a form needs Start Date / End Date / Location (or similar) on one row
// instead of stacked. Just wrap the fields you want in the same row:
//
//   <FieldRow>
//     <TextField label="Start Date" ... />
//     <TextField label="End Date" ... />
//     <TextField label="Location" ... />
//   </FieldRow>
export default function FieldRow({ children }) {
  return <div className={styles.row}>{children}</div>;
}
