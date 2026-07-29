import { useRef, useState } from "react";
import { Camera, Check, Plus, Bulb } from "../Icons";
import {
  QUICK_FIELDS,
  PERSONAL_DETAILS_FIELDS,
  PERSONAL_DETAILS_COLLAPSED_COUNT,
  LINKS_FIELDS,
  LINKS_COLLAPSED_COUNT,
  getFieldByKey,
} from "./data";
import styles from "./EditPersonalDetail.module.css";
import { ReactComponent as Reorder } from "../../../../assets/Arrows_TopDown.svg";

// Config for the three core fields whose order the user can rearrange
// (email / phone / location). Add an entry here if another field should
// become reorderable the same way.
const CORE_FIELDS = {
  email: {
    label: "Email",
    type: "email",
    placeholder: "Enter email",
  },
  phone: {
    label: "Phone",
    type: "tel",
    placeholder: "Enter Phone",
  },
  location: {
    label: "Location",
    type: "text",
    placeholder: "City, Country",
  },
};

export default function EditPersonalDetail({
  details,
  onChange,
  onPhotoChange,
  onDone,
}) {
  const [activeExtras, setActiveExtras] = useState([]);
  const [extraValues, setExtraValues] = useState({});
  // Display order of the core fields. Reordered by dragging the arrow icon.
  const [fieldOrder, setFieldOrder] = useState(["email", "phone", "location"]);
  // Key of the field currently being dragged (or null).
  const [draggingKey, setDraggingKey] = useState(null);
  // Live vertical offset (px) applied to the dragged row so it follows the pointer.
  const [dragOffsetY, setDragOffsetY] = useState(0);

  const itemRefs = useRef({}); // key -> row DOM node
  const dragInfoRef = useRef(null); // { startY, slots, startIndex, currentIndex }
  // false = flat "quick" grid (screenshot 1). true = split into
  // Personal details / Links categories (screenshot 2).
  const [categorized, setCategorized] = useState(false);
  // Once categorized, each category can independently expand to its
  // full list (screenshot 3 for Personal details, same idea for Links).
  const [expandedCategories, setExpandedCategories] = useState({
    personal: false,
    links: false,
  });
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

  const swapOrder = (i, j) =>
    setFieldOrder((prev) => {
      const next = [...prev];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });

  const handleDragPointerDown = (e, key) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);

    // Snapshot every row's current position before anything moves, so we
    // have fixed reference points ("slots") to compare against as the
    // pointer travels.
    const slots = fieldOrder.map((k) => {
      const rect = itemRefs.current[k].getBoundingClientRect();
      return { top: rect.top, centerY: rect.top + rect.height / 2 };
    });

    dragInfoRef.current = {
      startY: e.clientY,
      slots,
      startIndex: fieldOrder.indexOf(key),
      currentIndex: fieldOrder.indexOf(key),
    };
    setDraggingKey(key);
    setDragOffsetY(0);
  };

  const handleDragPointerMove = (e) => {
    const info = dragInfoRef.current;
    if (!info) return;

    const deltaY = e.clientY - info.startY;
    setDragOffsetY(deltaY);

    const draggedCenterNow = info.slots[info.startIndex].centerY + deltaY;
    const { currentIndex, slots } = info;

    if (
      currentIndex > 0 &&
      draggedCenterNow < slots[currentIndex - 1].centerY
    ) {
      swapOrder(currentIndex, currentIndex - 1);
      info.currentIndex -= 1;
    } else if (
      currentIndex < slots.length - 1 &&
      draggedCenterNow > slots[currentIndex + 1].centerY
    ) {
      swapOrder(currentIndex, currentIndex + 1);
      info.currentIndex += 1;
    }
  };

  const handleDragPointerUp = () => {
    dragInfoRef.current = null;
    setDraggingKey(null);
    setDragOffsetY(0);
  };

  const expandCategory = (category) =>
    setExpandedCategories((prev) => ({ ...prev, [category]: true }));

  const visibleQuickFields = QUICK_FIELDS.filter(
    (f) => !activeExtras.includes(f.key),
  );

  const availablePersonalFields = PERSONAL_DETAILS_FIELDS.filter(
    (f) => !activeExtras.includes(f.key),
  );
  const visiblePersonalFields = expandedCategories.personal
    ? availablePersonalFields
    : availablePersonalFields.slice(0, PERSONAL_DETAILS_COLLAPSED_COUNT);

  const availableLinksFields = LINKS_FIELDS.filter(
    (f) => !activeExtras.includes(f.key),
  );
  const visibleLinksFields = expandedCategories.links
    ? availableLinksFields
    : availableLinksFields.slice(0, LINKS_COLLAPSED_COUNT);

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

        {fieldOrder.map((key) => {
          const field = CORE_FIELDS[key];
          const isDragging = draggingKey === key;
          return (
            <div
              className={`${styles.fieldGroup} ${isDragging ? styles.fieldGroupDragging : ""}`}
              key={key}
              ref={(el) => {
                itemRefs.current[key] = el;
              }}
              style={
                isDragging
                  ? { transform: `translateY(${dragOffsetY}px)` }
                  : undefined
              }
            >
              <label>{field.label}</label>
              <div className={styles.inputWithHandle}>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={details[key]}
                  onChange={(e) => onChange(key, e.target.value)}
                />
                <button
                  type="button"
                  className={styles.reorderBtn}
                  aria-label={`Drag to reorder ${field.label}`}
                  onPointerDown={(e) => handleDragPointerDown(e, key)}
                  onPointerMove={handleDragPointerMove}
                  onPointerUp={handleDragPointerUp}
                  onPointerCancel={handleDragPointerUp}
                >
                  <Reorder />
                </button>
              </div>
            </div>
          );
        })}

        {activeExtras.map((key) => {
          const field = getFieldByKey(key);
          if (!field) return null;
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

          {!categorized ? (
            <div className={styles.chipGrid}>
              {visibleQuickFields.map((f) => (
                <button
                  key={f.key}
                  className={styles.chip}
                  onClick={() => addExtra(f.key)}
                >
                  <Plus />
                  {f.label}
                </button>
              ))}
              <button
                className={styles.chipOutline}
                onClick={() => setCategorized(true)}
              >
                Show More
              </button>
            </div>
          ) : (
            <>
              <div className={styles.categoryBlock}>
                <span className={styles.categoryLabel}>Personal details</span>
                <div className={styles.chipGrid}>
                  {visiblePersonalFields.map((f) => (
                    <button
                      key={f.key}
                      className={styles.chip}
                      onClick={() => addExtra(f.key)}
                    >
                      <Plus />
                      {f.label}
                    </button>
                  ))}
                  {!expandedCategories.personal &&
                    availablePersonalFields.length >
                      PERSONAL_DETAILS_COLLAPSED_COUNT && (
                      <button
                        className={styles.chipOutline}
                        onClick={() => expandCategory("personal")}
                      >
                        Show More
                      </button>
                    )}
                </div>
              </div>

              <div className={styles.categoryBlock}>
                <span className={styles.categoryLabel}>
                  Links / social profiles
                </span>
                <div className={styles.chipGrid}>
                  {visibleLinksFields.map((f) => (
                    <button
                      key={f.key}
                      className={styles.chip}
                      onClick={() => addExtra(f.key)}
                    >
                      <Plus />
                      {f.label}
                    </button>
                  ))}
                  {!expandedCategories.links &&
                    availableLinksFields.length > LINKS_COLLAPSED_COUNT && (
                      <button
                        className={styles.chipOutline}
                        onClick={() => expandCategory("links")}
                      >
                        Show More
                      </button>
                    )}
                </div>
              </div>
            </>
          )}
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
