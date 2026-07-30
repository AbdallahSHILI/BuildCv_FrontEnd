import { useRef } from "react";
import { Camera } from "../../Icons";
import fieldStyles from "./shared/fields.module.css";
import styles from "./ProfileSection.module.css";

export default function ProfileSection({ details, onChange, onPhotoChange }) {
  const fileInputRef = useRef(null);

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onPhotoChange(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.nameRow}>
      <div className={`${fieldStyles.fieldGroup} ${styles.nameFieldGroup}`}>
        <label>Full name</label>
        <input
          type="text"
          placeholder="Enter your title, first- and last name"
          value={details.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
        />
        <label className={fieldStyles.secondLabel}>Professional title</label>
        <input
          type="text"
          placeholder="Target position or current role"
          value={details.title}
          onChange={(e) => onChange("title", e.target.value)}
        />
      </div>

      <div className={styles.photoGroup}>
        <label>Photo</label>
        <button
          type="button"
          className={styles.photoCircle}
          onClick={() => fileInputRef.current?.click()}
        >
          {details.photo ? (
            <img
              src={details.photo}
              alt="Profile"
              className={styles.avatarImg}
            />
          ) : (
            <Camera />
          )}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handlePhoto}
        />
      </div>
    </div>
  );
}
