import { useRef, useState } from "react";
import styles from "../Content.module.css";

const EXTRA_FIELDS = [
  "LinkedIn",
  "Website",
  "Nationality",
  "Date of Birth",
  "Visa",
  "Passport or Id",
  "Availability",
  "Gender",
  "Marital Status",
  "Military Service",
];

const PersonalDetailsForm = ({ data, onChange }) => {
  const [activeExtras, setActiveExtras] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const fileInputRef = useRef(null);

  const visibleExtras = showMore ? EXTRA_FIELDS : EXTRA_FIELDS.slice(0, 6);

  const toggleExtra = (field) => {
    setActiveExtras((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field],
    );
  };

  const handleChange = (field) => (e) =>
    onChange({ ...data, [field]: e.target.value });

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      onChange({ ...data, photo: ev.target.result });
    };
    reader.readAsDataURL(file);
    // reset so the same file can be re-selected
    e.target.value = "";
  };

  const handleDeletePhoto = (e) => {
    e.stopPropagation();
    onChange({ ...data, photo: "" });
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Edit Personal Details</h2>
        <button className={styles.tipsBtn}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          Get Tips
        </button>
      </div>

      <div className={styles.topRow}>
        <div className={styles.leftFields}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Full name</label>
            <input
              className={styles.input}
              placeholder="Enter your title, first- and last name"
              value={data.fullName}
              onChange={handleChange("fullName")}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Professional title</label>
            <input
              className={styles.input}
              placeholder="Target position or current role"
              value={data.title}
              onChange={handleChange("title")}
            />
          </div>
        </div>

        <div className={styles.photoCol}>
          <label className={styles.label}>Photo</label>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <div className={styles.photoWrapper}>
            <div className={styles.photoCircle} onClick={handlePhotoClick}>
              {data.photo ? (
                <img
                  src={data.photo}
                  alt="Profile"
                  className={styles.photoPreview}
                />
              ) : (
                <>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#adb5bd"
                    strokeWidth="1.5"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <span
                    style={{
                      fontSize: 10,
                      color: "#adb5bd",
                      textAlign: "center",
                      lineHeight: 1.3,
                    }}
                  >
                    Upload photo
                  </span>
                </>
              )}
            </div>

            {data.photo && (
              <button
                className={styles.photoDeleteBtn}
                onClick={handleDeletePhoto}
                title="Remove photo"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      {[
        {
          key: "phone",
          label: "Phone",
          placeholder: "Enter Phone",
          type: "tel",
        },
        {
          key: "email",
          label: "Email",
          placeholder: "Enter email",
          type: "email",
        },
        {
          key: "location",
          label: "Location",
          placeholder: "City, Country",
          type: "text",
        },
      ].map(({ key, label, placeholder, type }) => (
        <div className={styles.fieldGroup} key={key}>
          <label className={styles.label}>{label}</label>
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              type={type}
              placeholder={placeholder}
              value={data[key]}
              onChange={handleChange(key)}
            />
            <button className={styles.reorderBtn} title="Reorder">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3v18M6 8l6-6 6 6M6 16l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      ))}

      <div className={styles.addDetails}>
        <p className={styles.addDetailsTitle}>Add details</p>
        <div className={styles.chipRow}>
          {visibleExtras.map((field) => {
            const active = activeExtras.includes(field);
            return (
              <button
                key={field}
                className={`${styles.chip} ${active ? styles.chipActive : ""}`}
                onClick={() => toggleExtra(field)}
              >
                <span className={styles.chipIcon}>{active ? "×" : "+"}</span>
                {field}
              </button>
            );
          })}
          <button
            className={styles.chipOutline}
            onClick={() => setShowMore((v) => !v)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        {activeExtras.map((field) => (
          <div
            className={styles.fieldGroup}
            key={field}
            style={{ marginTop: "12px" }}
          >
            <label className={styles.label}>{field}</label>
            <div className={styles.inputRow}>
              <input
                className={styles.input}
                placeholder={`Enter ${field}`}
                value={data[field] || ""}
                onChange={handleChange(field)}
              />
              <button className={styles.reorderBtn}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 3v18M6 8l6-6 6 6M6 16l6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
