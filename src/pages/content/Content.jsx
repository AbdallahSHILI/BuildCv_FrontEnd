import { useState } from "react";
import useFieldReorder from "./components/EditPersonalDetail/hooks/useFieldReorder";
import {
  SummaryCard,
  EditPersonalDetail,
  ResumePreview,
  AddContentModal,
  SectionAccordion,
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
import { Plus } from "./components/Icons/Icons";
import { EMPTY_DETAILS } from "./data";
import styles from "./Content.module.css";

export default function Content() {
  const [details, setDetails] = useState(EMPTY_DETAILS);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addedSections, setAddedSections] = useState([]);
  // which accordion row is expanded — no longer swaps out the whole panel
  const [expandedSection, setExpandedSection] = useState(null);
  const [summaryEntry, setSummaryEntry] = useState({ summary: "" });
  const [activeExtras, setActiveExtras] = useState([]);
  const [extraValues, setExtraValues] = useState({});
  const addExtra = (key) => {
    setActiveExtras((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  const changeExtra = (key, value) =>
    setExtraValues((prev) => ({ ...prev, [key]: value }));
  const [educationEntries, setEducationEntries] = useState([]);
  const [activeEducationId, setActiveEducationId] = useState(null);

  const [experienceEntries, setExperienceEntries] = useState([]);
  const [activeExperienceId, setActiveExperienceId] = useState(null);
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

  // config for sections that hold a single entry object (unchanged data shape)
  const singleSections = {
    summary: {
      Component: Summary,
      entry: summaryEntry,
      setEntry: setSummaryEntry,
    },
    skills: { Component: Skills, entry: skillsEntry, setEntry: setSkillsEntry },
    languages: {
      Component: Languages,
      entry: languagesEntry,
      setEntry: setLanguagesEntry,
    },
    certificates: {
      Component: Certificates,
      entry: certificatesEntry,
      setEntry: setCertificatesEntry,
    },
    interests: {
      Component: Interests,
      entry: interestsEntry,
      setEntry: setInterestsEntry,
    },
    projects: {
      Component: Projects,
      entry: projectsEntry,
      setEntry: setProjectsEntry,
    },
    courses: {
      Component: Courses,
      entry: coursesEntry,
      setEntry: setCoursesEntry,
    },
    awards: { Component: Awards, entry: awardsEntry, setEntry: setAwardsEntry },
  };

  // config for sections that hold a list of entries (education, experience)
  const repeatableSections = {
    education: {
      Component: Education,
      entries: educationEntries,
      setEntries: setEducationEntries,
      activeId: activeEducationId,
      setActiveId: setActiveEducationId,
      titleField: "degree",
      subtitleField: "school",
      makeEntry: () => ({
        id: crypto.randomUUID(),
        degree: "",
        school: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      }),
    },
    experience: {
      Component: ProfessionalExperience,
      entries: experienceEntries,
      setEntries: setExperienceEntries,
      activeId: activeExperienceId,
      setActiveId: setActiveExperienceId,
      titleField: "jobTitle",
      subtitleField: "employer",
      makeEntry: () => ({
        id: crypto.randomUUID(),
        jobTitle: "",
        employer: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      }),
    },
  };

  const toggleSection = (key) =>
    setExpandedSection((prev) => (prev === key ? null : key));

  const removeSection = (sectionKey) => {
    setAddedSections((s) => s.filter((k) => k !== sectionKey));
    setExpandedSection((prev) => (prev === sectionKey ? null : prev));
  };

  const handleAddSection = (sectionKey) => {
    const repeatable = repeatableSections[sectionKey];
    if (repeatable) {
      const newEntry = repeatable.makeEntry();
      repeatable.setEntries((prev) => [...prev, newEntry]);
      repeatable.setActiveId(newEntry.id);
    }

    setAddedSections((s) => (s.includes(sectionKey) ? s : [...s, sectionKey]));
    setExpandedSection(sectionKey);
    setIsAddModalOpen(false);
  };

  const renderSingleSectionBody = (key) => {
    const { Component, entry, setEntry } = singleSections[key];
    return (
      <Component
        entry={entry}
        onChange={setEntry}
        onDone={() => setExpandedSection(null)}
        onDelete={() => removeSection(key)}
      />
    );
  };

  const renderRepeatableSectionBody = (key) => {
    const {
      Component,
      entries,
      setEntries,
      activeId,
      setActiveId,
      titleField,
      subtitleField,
      makeEntry,
    } = repeatableSections[key];

    if (activeId) {
      const entry = entries.find((e) => e.id === activeId);
      return (
        <Component
          entry={entry}
          onChange={(updated) =>
            setEntries((prev) =>
              prev.map((e) => (e.id === activeId ? updated : e)),
            )
          }
          onDone={() => {
            setActiveId(null);
            setExpandedSection(null);
          }}
          onDelete={() => {
            setEntries((prev) => prev.filter((e) => e.id !== activeId));
            setActiveId(null);
            setExpandedSection(null);
            if (entries.length <= 1) removeSection(key);
          }}
        />
      );
    }

    return (
      <div className={styles.entryList}>
        {entries.map((e) => (
          <button
            key={e.id}
            type="button"
            className={styles.entryRow}
            onClick={() => setActiveId(e.id)}
          >
            <span className={styles.entryRowTitle}>
              {e[titleField] || "Untitled"}
            </span>
            {e[subtitleField] && (
              <span className={styles.entryRowSubtitle}>
                {e[subtitleField]}
              </span>
            )}
          </button>
        ))}
        <button
          type="button"
          className={styles.addEntryBtn}
          onClick={() => {
            const newEntry = makeEntry();
            setEntries((prev) => [...prev, newEntry]);
            setActiveId(newEntry.id);
          }}
        >
          + Add {key === "education" ? "education" : "experience"}
        </button>
      </div>
    );
  };

  const renderSectionBody = (key) =>
    repeatableSections[key]
      ? renderRepeatableSectionBody(key)
      : renderSingleSectionBody(key);

  return (
    <div className={styles.page}>
      <div className={styles.leftPanel}>
        {expandedSection ? (
          // Focus mode: only the section being edited is shown.
          // Everything reappears once its onDone/onToggle clears expandedSection.
          <SectionAccordion
            sectionKey={expandedSection}
            expanded
            onToggle={() => toggleSection(expandedSection)}
          >
            {renderSectionBody(expandedSection)}
          </SectionAccordion>
        ) : (
          <>
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
            ) : (
              <SummaryCard
                details={details}
                onEdit={() => setIsEditing(true)}
              />
            )}

            {addedSections.length > 0 && (
              <div className={styles.sectionsList}>
                {addedSections.map((key) => (
                  <SectionAccordion
                    key={key}
                    sectionKey={key}
                    expanded={false}
                    onToggle={() => toggleSection(key)}
                  />
                ))}
              </div>
            )}

            <button
              className={styles.addContentBtn}
              onClick={() => setIsAddModalOpen(true)}
            >
              <Plus />
              Add Content
            </button>
          </>
        )}
      </div>

      <div className={styles.rightPanel}>
        <ResumePreview
          details={details}
          summary={summaryEntry.summary}
          showSummary={addedSections.includes("summary")}
          fieldOrder={fieldOrder}
          activeExtras={activeExtras}
          extraValues={extraValues}
          education={educationEntries}
          experience={experienceEntries}
          skills={skillsEntry}
          showSkills={addedSections.includes("skills")}
          languages={languagesEntry}
          showLanguages={addedSections.includes("languages")}
          certificates={certificatesEntry}
          showCertificates={addedSections.includes("certificates")}
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
