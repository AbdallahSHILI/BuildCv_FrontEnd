import styles from "./TextField.module.css";

const TextField = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className={styles.fieldGroup}>
    <label className={styles.label}>{label}</label>
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default TextField;
