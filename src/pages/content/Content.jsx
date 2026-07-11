import { useState } from "react";
import { SummaryCard, EditPersonalDetail, ResumePreview } from "./components";
import { EMPTY_DETAILS } from "./data";
import AddContentModal from "../../components/modals/Addcontentmodal/Addcontentmodal";
import styles from "./Content.module.css";

export default function Content() {
  const [details, setDetails] = useState(EMPTY_DETAILS);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addedSections, setAddedSections] = useState([]);

  const updateField = (field, value) =>
    setDetails((d) => ({ ...d, [field]: value }));
  const updatePhoto = (dataUrl) => updateField("photo", dataUrl);

  const handleAddSection = (sectionKey) => {
    setAddedSections((s) => (s.includes(sectionKey) ? s : [...s, sectionKey]));
    setIsAddModalOpen(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.leftPanel}>
        {!isEditing ? (
          <SummaryCard
            details={details}
            onEdit={() => setIsEditing(true)}
            onAddContent={() => setIsAddModalOpen(true)}
          />
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

      <AddContentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddSection}
        addedSections={addedSections}
      />
    </div>
  );
}
