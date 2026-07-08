import { useRef, useState } from "react";
import { Camera, Check, Plus, UpDown, Bulb } from "../Icons";
import { EXTRA_FIELDS } from "./data";
import styles from "./EditPersonalDetail.module.css";

export default function EditPersonalDetail({
  details,
  onChange,
  onPhotoChange,
  onDone,
}) {
  const [activeExtras, setActiveExtras] = useState([]);
  const [extraValues, setExtraValues] = useState({});
  const [showAllExtras, setShowAllExtras] = useState(false);
  const fileInputRef = useRef(null);

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onPhotoChange(reader.result);
    reader.readAsDataURL(file);
  };

  const addExtra = (key) => {
    if (!activeExtras.includes(key)) setActiveExtras((prev) => [...prev, key]);
  };

  const visibleExtraButtons = showAllExtras
    ? EXTRA_FIELDS
    : EXTRA_FIELDS.slice(0, 6);

  return (
    <div className={styles.editCard}>
      <div className={styles.editScroll}>
        <div className={styles.editHeader}>
          <h2>Edit Personal Details</h2>
          <button className={styles.tipsBtn}>
            <Bulb />
            Get Tips
          </button>
        </div>

        <div className={styles.nameRow}>
          <div className={styles.fieldGroup}>
            <label>Full name</label>
            <input
              type="text"
              placeholder="Enter your title, first- and last name"
              value={details.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
            />
            <label className={styles.secondLabel}>Professional title</label>
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

        <div className={styles.fieldGroup}>
          <label>Email</label>
          <div className={styles.inputWithHandle}>
            <input
              type="email"
              placeholder="Enter email"
              value={details.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
            <UpDown />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label>Phone</label>
          <div className={styles.inputWithHandle}>
            <input
              type="tel"
              placeholder="Enter Phone"
              value={details.phone}
              onChange={(e) => onChange("phone", e.target.value)}
            />
            <UpDown />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label>Location</label>
          <div className={styles.inputWithHandle}>
            <input
              type="text"
              placeholder="City, Country"
              value={details.location}
              onChange={(e) => onChange("location", e.target.value)}
            />
            <UpDown />
          </div>
        </div>

        {activeExtras.map((key) => {
          const field = EXTRA_FIELDS.find((f) => f.key === key);
          return (
            <div className={styles.fieldGroup} key={key}>
              <label>{field.label}</label>
              <input
                type="text"
                placeholder={field.placeholder}
                value={extraValues[key] || ""}
                onChange={(e) =>
                  setExtraValues((prev) => ({ ...prev, [key]: e.target.value }))
                }
              />
            </div>
          );
        })}

        <div className={styles.addDetailsBlock}>
          <span className={styles.addDetailsLabel}>Add details</span>
          <div className={styles.chipGrid}>
            {visibleExtraButtons
              .filter((f) => !activeExtras.includes(f.key))
              .map((f) => (
                <button
                  key={f.key}
                  className={styles.chip}
                  onClick={() => addExtra(f.key)}
                >
                  <Plus />
                  {f.label}
                </button>
              ))}
            {!showAllExtras && (
              <button
                className={styles.chipOutline}
                onClick={() => setShowAllExtras(true)}
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </div>

      <div className={styles.editFooter}>
        <button className={styles.doneBtn} onClick={onDone}>
          <Check />
          Done
        </button>
      </div>
    </div>
  );
}
