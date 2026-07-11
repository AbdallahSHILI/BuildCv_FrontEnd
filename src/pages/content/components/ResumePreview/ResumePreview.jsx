import { Mail, Phone, Pin } from "../Icons";
import styles from "./ResumePreview.module.css";

//SummaryCard lives in the left panel.
// It's the collapsed/default state of the editor itself — the little card
// showing "Your name / Email / Phone / Address" with the pencil icon. Its only job is to be a clickable
// summary of what's currently filled in, and a trigger to open EditPersonalDetail. It's part of the editing UI,
// not the resume.

export default function ResumePreview({ details }) {
  const hasAnyInfo = details.email || details.phone || details.location;
  const isEmpty = !details.fullName && !hasAnyInfo && !details.photo;

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
                {details.email && (
                  <span>
                    <Mail /> {details.email}
                  </span>
                )}
                {details.phone && (
                  <span>
                    <Phone /> {details.phone}
                  </span>
                )}
                {details.location && (
                  <span>
                    <Pin /> {details.location}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
