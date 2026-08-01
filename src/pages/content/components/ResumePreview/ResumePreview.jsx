import { Mail, Phone, Pin } from "../Icons/Icons";
import styles from "./ResumePreview.module.css";

const ICONS = { email: Mail, phone: Phone, location: Pin };

const defaultOrder = ["email", "phone", "location"];

export default function ResumePreview({ details, fieldOrder = defaultOrder }) {
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
                {fieldOrder.map((key) => {
                  const value = details[key];
                  if (!value) return null;
                  const Icon = ICONS[key];
                  return (
                    <span key={key}>
                      <Icon /> {value}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
