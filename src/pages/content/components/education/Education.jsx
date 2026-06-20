import {
  DegreeSchoolFields,
  DateLocationRow,
  DescriptionEditor,
} from "./components/index";
import styles from "./Eduction.module.css";

const defaultEntry = {
  degree: "",
  school: "",
  startDate: "",
  endDate: "",
  location: "",
  description: "",
};

const Education = ({ data = defaultEntry, onChange, onDone, onDelete }) => {
  const handleField = (field) => (value) =>
    onChange({ ...data, [field]: value });

  return (
    <div className={styles.educationCard}>
      <div className={styles.educationHeader}>
        <h2 className={styles.educationTitle}>Edit Entry</h2>

        <div className={styles.educationHeaderActions}>
          <button type="button" className={styles.tipsBtn}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
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

      <DegreeSchoolFields
        degree={data.degree}
        school={data.school}
        onDegreeChange={handleField("degree")}
        onSchoolChange={handleField("school")}
      />

      <DateLocationRow
        startDate={data.startDate}
        endDate={data.endDate}
        location={data.location}
        onStartDateChange={handleField("startDate")}
        onEndDateChange={handleField("endDate")}
        onLocationChange={handleField("location")}
      />

      <DescriptionEditor
        value={data.description}
        onChange={handleField("description")}
      />

      <button type="button" className={styles.doneBtn} onClick={onDone}>
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

export default Education;
