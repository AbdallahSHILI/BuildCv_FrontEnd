import styles from "./Editor.module.css";
import PersonalDetailsForm from "../personalDetailsForm/PersonalDetailsForm";
import Summary from "../../summary/Summary";
import Education from "../education/Education";

const Editor = ({ section, data, onChange, onDone, onDelete }) => {
  if (section === "personalDetails") {
    return (
      <div className={styles.editorInner}>
        <PersonalDetailsForm data={data} onChange={onChange} />
        {/* keep its own Done bar / customize row here, since personal details isn't deletable */}
      </div>
    );
  }
  if (section === "summary")
    return (
      <Summary
        data={data}
        onChange={onChange}
        onDone={onDone}
        onDelete={onDelete}
      />
    );
  if (section === "education")
    return (
      <Education
        data={data}
        onChange={onChange}
        onDone={onDone}
        onDelete={onDelete}
      />
    );

  return null;
};

export default Editor;
