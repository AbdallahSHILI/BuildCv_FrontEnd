import styles from "./Editor.module.css";
import PersonalDetailsForm from "../personalDetailsForm/PersonalDetailsForm";
import Summary from "../../summary/Summary";

const Editor = ({ section, data, onChange, onDone }) => {
  return (
    <div className={styles.editorInner}>
      {section === "summary" ? (
        <Summary data={data} onChange={onChange} />
      ) : (
        <PersonalDetailsForm data={data} onChange={onChange} />
      )}

      <div className={styles.doneBar}>
        <button className={styles.doneBtn} onClick={onDone}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Done
        </button>
      </div>

      <div className={styles.customizeRow}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M21 12h-2M5 12H3M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93" />
        </svg>
        Show customizations for this section
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ marginLeft: "auto" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
};

export default Editor;
