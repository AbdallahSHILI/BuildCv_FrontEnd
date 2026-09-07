import { SECTIONS } from "../../../../components/modals/Addcontentmodal/Addcontentmodal";
import styles from "./SectionAccordion.module.css";

export default function SectionAccordion({
  sectionKey,
  expanded,
  onToggle,
  children,
}) {
  const meta = SECTIONS.find((s) => s.key === sectionKey);

  return (
    <div className={styles.accordionItem}>
      <button
        type="button"
        className={styles.accordionHeader}
        onClick={onToggle}
      >
        <span className={styles.accordionIcon}>{meta?.icon}</span>
        <span className={styles.accordionLabel}>
          {meta?.label || sectionKey}
        </span>
        <span
          className={`${styles.chevron} ${expanded ? styles.chevronOpen : ""}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {expanded && <div className={styles.accordionBody}>{children}</div>}
    </div>
  );
}
