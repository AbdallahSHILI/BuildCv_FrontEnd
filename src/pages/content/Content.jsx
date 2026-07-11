import { useState } from "react";
import {
  SummaryCard,
  EditPersonalDetail,
  ResumePreview,
  Summary,
} from "./components";
import { EMPTY_DETAILS } from "./data";
import styles from "./Content.module.css";
import AddContentModal from "../../components/modals/Addcontentmodal/Addcontentmodal";

export default function Content() {
  const [details, setDetails] = useState(EMPTY_DETAILS);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addedSections, setAddedSections] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [summaryEntry, setSummaryEntry] = useState({ summary: "" });

  const updateField = (field, value) =>
    setDetails((d) => ({ ...d, [field]: value }));
  const updatePhoto = (dataUrl) => updateField("photo", dataUrl);

  const handleAddSection = (sectionKey) => {
    setAddedSections((s) => (s.includes(sectionKey) ? s : [...s, sectionKey]));
    setActiveSection(sectionKey);
    setIsAddModalOpen(false);
  };

  const closeActiveSection = () => setActiveSection(null);

  const removeSection = (sectionKey) => {
    setAddedSections((s) => s.filter((k) => k !== sectionKey));
    setActiveSection(null);
  };

  return (
    <div className={styles.page}>
      <div className={styles.leftPanel}>
        {isEditing ? (
          <EditPersonalDetail
            details={details}
            onChange={updateField}
            onPhotoChange={updatePhoto}
            onDone={() => setIsEditing(false)}
          />
        ) : activeSection === "summary" ? (
          <Summary
            entry={summaryEntry}
            onChange={setSummaryEntry}
            onDone={closeActiveSection}
            onDelete={() => removeSection("summary")}
          />
        ) : (
          <SummaryCard
            details={details}
            onEdit={() => setIsEditing(true)}
            onAddContent={() => setIsAddModalOpen(true)}
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
