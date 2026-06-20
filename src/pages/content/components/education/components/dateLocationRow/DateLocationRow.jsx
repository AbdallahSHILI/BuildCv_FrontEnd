import styles from "./DateLocationRow.module.css";

const DateLocationRow = ({
  startDate,
  endDate,
  location,
  onStartDateChange,
  onEndDateChange,
  onLocationChange,
}) => {
  return (
    <div className={styles.row}>
      <div className={styles.fieldGroup}>
        <label className={styles.label}>Start Date</label>
        <input
          className={styles.input}
          placeholder="MM/YYYY"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>End Date</label>
        <input
          className={styles.input}
          placeholder="MM/YYYY"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Location</label>
        <input
          className={styles.input}
          placeholder="City, Country"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateLocationRow;
