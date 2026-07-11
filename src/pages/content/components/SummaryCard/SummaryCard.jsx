import { Mail, Phone, Pin, Camera, Pencil, Plus } from "../Icons";
import styles from "./SummaryCard.module.css";

//ResumePreview lives in the right panel. It's the actual resume document — the blank page that's
// meant to look like what gets exported/printed. It has no click behavior, no edit button, nothing interactive;
// it just renders whatever is in details as a formatted resume header (photo, name, title, contact line).

export default function SummaryCard({ details, onEdit, onAddContent }) {
  return (
    <>
      <div className={styles.summaryCard} onClick={onEdit}>
        <button
          className={styles.editButton}
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          aria-label="Edit personal details"
        >
          <Pencil />
        </button>

        <div className={styles.summaryText}>
          <p
            className={
              details.fullName ? styles.summaryName : styles.placeholder
            }
          >
            {details.fullName || "Your name"}
          </p>
          <div className={styles.summaryRow}>
            <Mail />
            <span className={details.email ? "" : styles.placeholder}>
              {details.email || "Email"}
            </span>
          </div>
          <div className={styles.summaryRow}>
            <Phone />
            <span className={details.phone ? "" : styles.placeholder}>
              {details.phone || "Phone"}
            </span>
          </div>
          <div className={styles.summaryRow}>
            <Pin />
            <span className={details.location ? "" : styles.placeholder}>
              {details.location || "Address"}
            </span>
          </div>
        </div>

        <div className={styles.avatar}>
          {details.photo ? (
            <img
              src={details.photo}
              alt="Profile"
              className={styles.avatarImg}
            />
          ) : (
            <Camera />
          )}
        </div>
      </div>

      <button className={styles.addContentBtn} onClick={onAddContent}>
        <Plus />
        Add Content
      </button>
    </>
  );
}
