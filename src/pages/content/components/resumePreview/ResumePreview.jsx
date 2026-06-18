import { useState } from "react";
import styles from "./ResumePreview.module.css";
import { CVPreviewModal } from "../../../../components/modals/index";
import Arrows from "../../../../assets/Arrows_TopDown.svg";

const ResumePreview = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const isEmpty =
    !data.fullName &&
    !data.title &&
    !data.phone &&
    !data.email &&
    !data.location;

  return (
    <>
      <div className={styles.preview}>
        <div
          className={styles.cvSheetWrapper}
          onClick={() => setModalOpen(true)}
        >
          <div className={styles.cvSheet}>
            {/* CV Header */}
            <div className={styles.cvHeader}>
              <div className={styles.cvHeaderLeft}>
                {data.fullName ? (
                  <h1 className={styles.cvName}>{data.fullName}</h1>
                ) : (
                  <div className={styles.cvPlaceholderName} />
                )}
                {data.title ? (
                  <p className={styles.cvJobTitle}>{data.title}</p>
                ) : (
                  <div className={styles.cvPlaceholderTitle} />
                )}
              </div>

              <div className={styles.cvPhotoSlot}>
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

            <div className={styles.cvDivider} />

            {/* Contact Info */}
            <div className={styles.cvContact}>
              {data.phone && (
                <span className={styles.cvContactItem}>
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
                <span className={styles.cvContactItem}>
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
                <span className={styles.cvContactItem}>
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
              <div className={styles.cvEmptyHint}>
                Start filling in your details on the left — your CV will appear
                here in real time.
              </div>
            )}

            {/* Skeleton sections */}
            <div className={styles.cvBody}>
              {["Experience", "Education", "Skills"].map((section) => (
                <div key={section} className={styles.cvSection}>
                  <div className={styles.cvSectionTitle}>{section}</div>
                  <div className={styles.cvSectionDivider} />
                  <div className={styles.cvSkeletonLines}>
                    <div className={styles.skLine} style={{ width: "60%" }} />
                    <div className={styles.skLine} style={{ width: "40%" }} />
                    <div className={styles.skLine} style={{ width: "80%" }} />
                    <div className={styles.skLine} style={{ width: "55%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hover overlay */}
          <div className={styles.cvHoverOverlay}>
            <div className={styles.cvHoverIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
                <line x1="11" y1="8" x2="11" y2="14" />
              </svg>
              <span className={styles.cvHoverLabel}>Preview CV</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shared modal — reusable from any page */}
      <CVPreviewModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={data}
      />
    </>
  );
};

export default ResumePreview;
