import { Mail, Phone, Pin } from "../Icons/Icons";
import { EXTRA_ICONS, DefaultExtraIcon } from "../Icons/ExtraIcons";
import styles from "./ResumePreview.module.css";

const CORE_ICONS = { email: Mail, phone: Phone, location: Pin };
const defaultOrder = ["email", "phone", "location"];

export default function ResumePreview({
  details,
  summary,
  showSummary = false,
  fieldOrder = defaultOrder,
  activeExtras = [],
  extraValues = {},
  education = [],
  experience = [],
  skills,
  showSkills = false,
  languages,
  showLanguages = false,
  certificates,
  showCertificates = false,
}) {
  const coreItems = fieldOrder
    .map((key) => ({ key, value: details[key], Icon: CORE_ICONS[key] }))
    .filter((item) => item.value);

  const extraItems = activeExtras
    .map((key) => ({
      key,
      value: extraValues[key],
      Icon: EXTRA_ICONS[key] || DefaultExtraIcon,
    }))
    .filter((item) => item.value);

  const contactItems = [...coreItems, ...extraItems];
  const hasAnyInfo = contactItems.length > 0;
  const isEmpty =
    !details.fullName &&
    !hasAnyInfo &&
    !details.photo &&
    !showSummary && // was: !summary
    !showSkills &&
    !showLanguages &&
    !showCertificates &&
    education.length === 0 &&
    experience.length === 0;

  return (
    <div className={styles.previewSheet}>
      {isEmpty ? (
        <div className={styles.previewEmpty}>
          Your resume preview will appear here
        </div>
      ) : (
        <div className={styles.previewHeader}>
          {details.photo && (
            <img
              src={details.photo}
              alt="Profile"
              className={styles.previewAvatar}
            />
          )}

          <div>
            {details.fullName && (
              <h1 className={styles.previewName}>{details.fullName}</h1>
            )}

            {details.title && (
              <p className={styles.previewTitle}>{details.title}</p>
            )}

            {hasAnyInfo && (
              <div className={styles.previewContactRow}>
                {contactItems.map(({ key, value, Icon }) => (
                  <span key={key}>
                    <Icon />
                    <span>{value}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {showSummary && (
        <div className={styles.previewSection}>
          <h2 className={styles.previewSectionTitle}>Summary</h2>
          <div
            className={styles.previewSummary}
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
      )}

      {showSkills && (
        <div className={styles.previewSection}>
          <h2 className={styles.previewSectionTitle}>Skills</h2>
          <div className={styles.previewEntry}>
            <div className={styles.previewEntryRow}>
              <span className={styles.previewEntryTitle}>{skills.skill}</span>
              {skills.level && (
                <span className={styles.previewEntryDate}>{skills.level}</span>
              )}
            </div>
            {skills.info && (
              <div
                className={styles.previewEntryDescription}
                dangerouslySetInnerHTML={{ __html: skills.info }}
              />
            )}
          </div>
        </div>
      )}

      {showLanguages && (
        <div className={styles.previewSection}>
          <h2 className={styles.previewSectionTitle}>Languages</h2>
          <div className={styles.previewEntry}>
            <div className={styles.previewEntryRow}>
              <span className={styles.previewEntryTitle}>
                {languages.language}
              </span>
              {languages.level && (
                <span className={styles.previewEntryDate}>
                  {languages.level}
                </span>
              )}
            </div>
            {languages.additionalInfo && (
              <div
                className={styles.previewEntryDescription}
                dangerouslySetInnerHTML={{ __html: languages.additionalInfo }}
              />
            )}
          </div>
        </div>
      )}

      {showCertificates && (
        <div className={styles.previewSection}>
          <h2 className={styles.previewSectionTitle}>Certificates</h2>
          <div className={styles.previewEntry}>
            <div className={styles.previewEntryRow}>
              <span className={styles.previewEntryTitle}>
                {certificates.certificate}
              </span>
            </div>
            {certificates.additionalInfo && (
              <div
                className={styles.previewEntryDescription}
                dangerouslySetInnerHTML={{
                  __html: certificates.additionalInfo,
                }}
              />
            )}
          </div>
        </div>
      )}

      {education.length > 0 && (
        <div className={styles.previewSection}>
          <h2 className={styles.previewSectionTitle}>Education</h2>
          {education.map((edu) => (
            <div className={styles.previewEntry} key={edu.id}>
              <div className={styles.previewEntryRow}>
                <span className={styles.previewEntryTitle}>{edu.degree}</span>
                {(edu.startDate || edu.endDate) && (
                  <span className={styles.previewEntryDate}>
                    {edu.startDate} — {edu.endDate}
                  </span>
                )}
              </div>
              <div className={styles.previewEntryRow}>
                <span className={styles.previewEntrySubtitle}>
                  {edu.school}
                </span>
                {edu.location && (
                  <span className={styles.previewEntryLocation}>
                    {edu.location}
                  </span>
                )}
              </div>
              {edu.description && (
                <div
                  className={styles.previewEntryDescription}
                  dangerouslySetInnerHTML={{ __html: edu.description }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {experience.length > 0 && (
        <div className={styles.previewSection}>
          <h2 className={styles.previewSectionTitle}>
            Professional Experience
          </h2>
          {experience.map((exp) => (
            <div className={styles.previewEntry} key={exp.id}>
              <div className={styles.previewEntryRow}>
                <span className={styles.previewEntryTitle}>{exp.jobTitle}</span>
                {(exp.startDate || exp.endDate) && (
                  <span className={styles.previewEntryDate}>
                    {exp.startDate} — {exp.endDate}
                  </span>
                )}
              </div>
              <div className={styles.previewEntryRow}>
                <span className={styles.previewEntrySubtitle}>
                  {exp.employer}
                </span>
                {exp.location && (
                  <span className={styles.previewEntryLocation}>
                    {exp.location}
                  </span>
                )}
              </div>
              {exp.description && (
                <div
                  className={styles.previewEntryDescription}
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
