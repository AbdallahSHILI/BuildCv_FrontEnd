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

const SECTION_LABELS = {
  summary: "Summary",
  education: "Education",
  experience: "Professional Experience",
  skills: "Skills",
  languages: "Languages",
  certificates: "Certificates",
  interests: "Interests",
  projects: "Projects",
  courses: "Courses",
  awards: "Awards",
  organisations: "Organisations",
  publications: "Publications",
  references: "References",
  declaration: "Declaration",
  custom: "Custom",
};

const Content = () => {
  const [personalData, setPersonalData] = useState(defaultData);
  const [isEditing, setIsEditing] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addedSections, setAddedSections] = useState([]);
  const [activeSection, setActiveSection] = useState("personalDetails"); // which form Editor shows
  const [summaryText, setSummaryText] = useState("");

  const handleAddSection = (key) => {
    setAddedSections((prev) => [...prev, key]);
    setAddModalOpen(false);
    setActiveSection(key);
    setIsEditing(true);
  };

  const handleOpenSection = (key) => {
    setActiveSection(key);
    setIsEditing(true);
  };

  const handleDone = () => setIsEditing(false);

  return (
    <div className={styles.page}>
      {/* ── Left panel ── */}
      <div className={styles.editor}>
        {isEditing ? (
          <Editor
            section={activeSection}
            data={activeSection === "summary" ? summaryText : personalData}
            onChange={
              activeSection === "summary" ? setSummaryText : setPersonalData
            }
            onDone={handleDone}
          />
        ) : (
          /* Default view: compact card + Add Content button */
          <>
            <PersonalInfoCard
              data={personalData}
              onEdit={() => handleOpenSection("personalDetails")}
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
              <div
                key={key}
                className={styles.sectionPlaceholder}
                onClick={() => handleOpenSection(key)}
              >
                <span className={styles.sectionPlaceholderLabel}>
                  {SECTION_LABELS[key] || key}
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
      <ResumePreview data={personalData} summary={summaryText} />

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
