import styles from "./CVPreviewModal.module.css";
import cvStyles from "../../../pages/content/Content.module.css";

const CVPreviewModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const isEmpty =
    !data.fullName &&
    !data.title &&
    !data.phone &&
    !data.email &&
    !data.location;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} title="Close">
          ×
        </button>

        <div className={styles.cvSheet}>
          {/* Top gradient bar via ::before in CSS */}

          {/* CV Header */}
          <div className={cvStyles.cvHeader}>
            <div className={cvStyles.cvHeaderLeft}>
              {data.fullName ? (
                <h1 className={cvStyles.cvName}>{data.fullName}</h1>
              ) : (
                <div className={cvStyles.cvPlaceholderName} />
              )}
              {data.title ? (
                <p className={cvStyles.cvJobTitle}>{data.title}</p>
              ) : (
                <div className={cvStyles.cvPlaceholderTitle} />
              )}
            </div>

            <div className={cvStyles.cvPhotoSlot}>
              {data.photo && (
                <img
                  src={data.photo}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              )}
            </div>
          </div>

          <div className={cvStyles.cvDivider} />

          {/* Contact Info */}
          <div className={cvStyles.cvContact}>
            {data.phone && (
              <span className={cvStyles.cvContactItem}>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {data.phone}
              </span>
            )}
            {data.email && (
              <span className={cvStyles.cvContactItem}>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {data.email}
              </span>
            )}
            {data.location && (
              <span className={cvStyles.cvContactItem}>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {data.location}
              </span>
            )}
          </div>

          {isEmpty && (
            <div className={cvStyles.cvEmptyHint}>
              Start filling in your details on the left — your CV will appear
              here in real time.
            </div>
          )}

          {/* Skeleton sections */}
          <div className={cvStyles.cvBody}>
            {["Experience", "Education", "Skills"].map((section) => (
              <div key={section} className={cvStyles.cvSection}>
                <div className={cvStyles.cvSectionTitle}>{section}</div>
                <div className={cvStyles.cvSectionDivider} />
                <div className={cvStyles.cvSkeletonLines}>
                  <div className={cvStyles.skLine} style={{ width: "60%" }} />
                  <div className={cvStyles.skLine} style={{ width: "40%" }} />
                  <div className={cvStyles.skLine} style={{ width: "80%" }} />
                  <div className={cvStyles.skLine} style={{ width: "55%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPreviewModal;
