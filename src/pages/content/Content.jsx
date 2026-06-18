import { useState } from "react";
import { Editor, ResumePreview, PersonalInfoCard } from "./components/index";
import { AddContentModal } from "../../components/modals/index";
import styles from "./Content.module.css";

const defaultData = {
  fullName: "",
  title: "",
  phone: "",
  email: "",
  location: "",
  photo: "",
};

const Content = () => {
  const [personalData, setPersonalData] = useState(defaultData);
  const [isEditing, setIsEditing] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addedSections, setAddedSections] = useState([]);

  const handleAddSection = (key) => {
    setAddedSections((prev) => [...prev, key]);
    // TODO: render the matching section form in the editor panel
  };

  const handleDone = () => setIsEditing(false);

  return (
    <div className={styles.page}>
      {/* ── Left panel ── */}
      <div className={styles.editor}>
        {isEditing ? (
          /* Full personal details form */
          <Editor
            data={personalData}
            onChange={setPersonalData}
            onDone={handleDone}
          />
        ) : (
          /* Default view: compact card + Add Content button */
          <>
            <PersonalInfoCard
              data={personalData}
              onEdit={() => setIsEditing(true)}
            />

            <button
              className={styles.addContentBtn}
              onClick={() => setAddModalOpen(true)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Content
            </button>

            {/* Added section placeholders */}
            {addedSections.map((key) => (
              <div key={key} className={styles.sectionPlaceholder}>
                <span className={styles.sectionPlaceholderLabel}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
                <span className={styles.sectionPlaceholderHint}>
                  Click to edit
                </span>
              </div>
            ))}
          </>
        )}
      </div>

      {/* ── Right panel: live CV preview ── */}
      <ResumePreview data={personalData} />

      {/* ── Add content modal ── */}
      <AddContentModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddSection}
        addedSections={addedSections}
      />
    </div>
  );
};

export default Content;
