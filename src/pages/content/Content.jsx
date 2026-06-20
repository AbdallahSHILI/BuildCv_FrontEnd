import { useState } from "react";
import { Editor, ResumePreview, PersonalInfoCard } from "./components/index";
import { AddContentModal } from "../../components/modals/index";
import styles from "./Content.module.css";

const defaultPersonalData = {
  fullName: "",
  title: "",
  phone: "",
  email: "",
  location: "",
  photo: "",
};

const defaultEducation = {
  degree: "",
  school: "",
  startDate: "",
  endDate: "",
  location: "",
  description: "",
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
  const [personalData, setPersonalData] = useState(defaultPersonalData);
  const [isEditing, setIsEditing] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addedSections, setAddedSections] = useState([]);
  const [activeSection, setActiveSection] = useState("personalDetails"); // which form Editor shows
  const [summaryText, setSummaryText] = useState("");
  const [educationData, setEducationData] = useState(defaultEducation);

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

  const handleDeleteSection = (key) => {
    setAddedSections((prev) => prev.filter((k) => k !== key));
    setIsEditing(false);
  };

  // pick the right data/setter for whichever section is active
  const getActiveData = () => {
    if (activeSection === "summary") return summaryText;
    if (activeSection === "education") return educationData;
    return personalData;
  };

  const getActiveSetter = () => {
    if (activeSection === "summary") return setSummaryText;
    if (activeSection === "education") return setEducationData;
    return setPersonalData;
  };

  return (
    <div className={styles.page}>
      {/* ── Left panel ── */}
      <div className={styles.editor}>
        {isEditing ? (
          <Editor
            section={activeSection}
            data={getActiveData()}
            onChange={getActiveSetter()}
            onDone={handleDone}
            onDelete={() => handleDeleteSection(activeSection)}
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
      <ResumePreview
        data={personalData}
        summary={summaryText}
        education={educationData}
      />

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
