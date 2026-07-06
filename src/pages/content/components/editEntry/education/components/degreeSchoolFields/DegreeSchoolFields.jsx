import styles from "./DegreeSchoolFields.module.css";

const DegreeSchoolFields = ({
  degree,
  school,
  onDegreeChange,
  onSchoolChange,
}) => {
  return (
    <>
      <div className={styles.fieldGroup}>
        <label className={styles.label}>Degree</label>
        <input
          className={styles.input}
          placeholder="Enter Degree / Field Of Study / Exchange Semester"
          value={degree}
          onChange={(e) => onDegreeChange(e.target.value)}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>School</label>
        <div className={styles.schoolRow}>
          <input
            className={styles.input}
            placeholder="Enter school / university"
            value={school}
            onChange={(e) => onSchoolChange(e.target.value)}
          />
          <button type="button" className={styles.linkBtn}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 4.84" />
              <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L13 19.16" />
            </svg>
            Link
          </button>
        </div>
      </div>
    </>
  );
};

export default DegreeSchoolFields;
