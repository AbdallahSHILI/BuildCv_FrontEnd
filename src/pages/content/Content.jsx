import { useState } from "react";
import { SummaryCard, EditPersonalDetail, ResumePreview } from "./components";
import { EMPTY_DETAILS } from "./data";
import styles from "./Content.module.css";

export default function Content() {
  const [details, setDetails] = useState(EMPTY_DETAILS);
  const [isEditing, setIsEditing] = useState(false);

  const updateField = (field, value) =>
    setDetails((d) => ({ ...d, [field]: value }));
  const updatePhoto = (dataUrl) => updateField("photo", dataUrl);

  return (
    <div className={styles.page}>
      <div className={styles.leftPanel}>
        {!isEditing ? (
          <SummaryCard details={details} onEdit={() => setIsEditing(true)} />
        ) : (
          <EditPersonalDetail
            details={details}
            onChange={updateField}
            onPhotoChange={updatePhoto}
            onDone={() => setIsEditing(false)}
          />
        )}
      </div>

      <div className={styles.rightPanel}>
        <ResumePreview details={details} />
      </div>
    </div>
  );
}
