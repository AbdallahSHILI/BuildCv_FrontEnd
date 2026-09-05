import { useState } from "react";
import useFieldReorder from "./components/EditPersonalDetail/hooks/useFieldReorder";
import {
  SummaryCard,
  EditPersonalDetail,
  ResumePreview,
  AddContentModal,
  Summary,
  Education,
  ProfessionalExperience,
  Skills,
  Languages,
  Certificates,
  Interests,
  Projects,
  Courses,
  Awards,
} from "./components";
import { EMPTY_DETAILS } from "./data";
import styles from "./Content.module.css";

export default function Content() {
  const [details, setDetails] = useState(EMPTY_DETAILS);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addedSections, setAddedSections] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [summaryEntry, setSummaryEntry] = useState({ summary: "" });
  const [activeExtras, setActiveExtras] = useState([]);
  const [extraValues, setExtraValues] = useState({});
  const addExtra = (key) => {
    setActiveExtras((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  const changeExtra = (key, value) =>
    setExtraValues((prev) => ({ ...prev, [key]: value }));
  const [educationEntry, setEducationEntry] = useState({
    degree: "",
    school: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  const [professionalExperienceEntry, setProfessionalExperienceEntry] =
    useState({
      jobTitle: "",
      employer: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  const [skillsEntry, setSkillsEntry] = useState({
    skill: "",
    info: "",
    level: "",
  });
  const [languagesEntry, setLanguagesEntry] = useState({
    language: "",
    additionalInfo: "",
    level: "",
  });
  const [certificatesEntry, setCertificatesEntry] = useState({
    certificate: "",
    additionalInfo: "",
  });
  const [interestsEntry, setInterestsEntry] = useState({
    interest: "",
    additionalInfo: "",
  });
  const [projectsEntry, setProjectsEntry] = useState({
    projectTitle: "",
    subTitle: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [coursesEntry, setCoursesEntry] = useState({
    courseTitle: "",
    institution: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  const [awardsEntry, setAwardsEntry] = useState({
    award: "",
    issuer: "",
    day: "",
    month: "",
    year: "",
    hideDay: false,
    hideMonth: false,
    description: "",
  });
  const {
    fieldOrder,
    draggingKey,
    dragOffsetY,
    setItemRef,
    handleDragPointerDown,
    handleDragPointerMove,
    handleDragPointerUp,
  } = useFieldReorder(["email", "phone", "location"]);

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
            fieldOrder={fieldOrder}
            draggingKey={draggingKey}
            dragOffsetY={dragOffsetY}
            setItemRef={setItemRef}
            onDragPointerDown={handleDragPointerDown}
            onDragPointerMove={handleDragPointerMove}
            onDragPointerUp={handleDragPointerUp}
            activeExtras={activeExtras}
            extraValues={extraValues}
            onAddExtra={addExtra}
            onChangeExtra={changeExtra}
          />
        ) : activeSection === "summary" ? (
          <Summary
            entry={summaryEntry}
            onChange={setSummaryEntry}
            onDone={closeActiveSection}
            onDelete={() => removeSection("summary")}
          />
        ) : activeSection === "education" ? (
          <Education
            entry={educationEntry}
            onChange={setEducationEntry}
            onDone={closeActiveSection}
            onDelete={() => removeSection("education")}
          />
        ) : activeSection === "experience" ? (
          <ProfessionalExperience
            entry={professionalExperienceEntry}
            onChange={setProfessionalExperienceEntry}
            onDone={closeActiveSection}
            onDelete={() => removeSection("experience")}
          />
        ) : activeSection === "skills" ? (
          <Skills
            entry={skillsEntry}
            onChange={setSkillsEntry}
            onDone={closeActiveSection}
            onDelete={() => removeSection("skills")}
          />
        ) : activeSection === "languages" ? (
          <Languages
            entry={languagesEntry}
            onChange={setLanguagesEntry}
            onDone={closeActiveSection}
            onDelete={() => removeSection("languages")}
          />
        ) : activeSection === "certificates" ? (
          <Certificates
            entry={certificatesEntry}
            onChange={setCertificatesEntry}
            onDone={closeActiveSection}
            onDelete={() => removeSection("certificates")}
          />
        ) : activeSection === "interests" ? (
          <Interests
            entry={interestsEntry}
            onChange={setInterestsEntry}
            onDone={closeActiveSection}
            onDelete={() => removeSection("interests")}
          />
        ) : activeSection === "projects" ? (
          <Projects
            entry={projectsEntry}
            onChange={setProjectsEntry}
            onDone={closeActiveSection}
            onDelete={() => removeSection("projects")}
          />
        ) : activeSection === "courses" ? (
          <Courses
            entry={coursesEntry}
            onChange={setCoursesEntry}
            onDone={closeActiveSection}
            onDelete={() => removeSection("courses")}
          />
        ) : activeSection === "awards" ? (
          <Awards
            entry={awardsEntry}
            onChange={setAwardsEntry}
            onDone={closeActiveSection}
            onDelete={() => removeSection("awards")}
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
        <ResumePreview
          details={details}
          summary={summaryEntry.summary}
          fieldOrder={fieldOrder}
          activeExtras={activeExtras}
          extraValues={extraValues}
          education={educationEntry}
        />
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
