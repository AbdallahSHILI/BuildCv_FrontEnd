import { useState } from "react";
import {
  QUICK_FIELDS,
  PERSONAL_DETAILS_FIELDS,
  PERSONAL_DETAILS_COLLAPSED_COUNT,
  LINKS_FIELDS,
  LINKS_COLLAPSED_COUNT,
} from "../data";
import Chip from "./Chip";
import styles from "./AddDetailsSection.module.css";

export default function AddDetailsSection({ activeExtras, onAddExtra }) {
  // false = flat "quick" grid (screenshot 1). true = split into
  // Personal details / Links categories (screenshot 2).
  const [categorized, setCategorized] = useState(false);
  // Once categorized, each category can independently expand to its
  // full list (screenshot 3 for Personal details, same idea for Links).
  const [expandedCategories, setExpandedCategories] = useState({
    personal: false,
    links: false,
  });

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
    <div className={styles.addDetailsBlock}>
      <span className={styles.addDetailsLabel}>Add details</span>

      {!categorized ? (
        <div className={styles.chipGrid}>
          {visibleQuickFields.map((f) => (
            <Chip
              key={f.key}
              label={f.label}
              onClick={() => onAddExtra(f.key)}
            />
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
                <Chip
                  key={f.key}
                  label={f.label}
                  onClick={() => onAddExtra(f.key)}
                />
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
                <Chip
                  key={f.key}
                  label={f.label}
                  onClick={() => onAddExtra(f.key)}
                />
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
  );
}
