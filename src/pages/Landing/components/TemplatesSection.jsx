import { useInView } from "../../hooks/useInView";
import styles from "../Landing.module.css";

const templates = [
  { name: "Classic", accent: "#2563eb", lines: [70, 50, 85, 40, 60] },
  { name: "Modern", accent: "#0ea5e9", lines: [60, 80, 45, 70, 55] },
  { name: "Minimal", accent: "#64748b", lines: [90, 40, 75, 50, 65] },
  { name: "Bold", accent: "#f59e0b", lines: [55, 75, 40, 80, 50] },
  { name: "Executive", accent: "#10b981", lines: [80, 55, 70, 45, 75] },
  { name: "Creative", accent: "#ec4899", lines: [45, 85, 55, 70, 40] },
];

function TemplateCard({ name, accent, lines }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.templateCard} ${visible ? styles.fadeUp : ""}`}
    >
      <div className={styles.templatePreview}>
        <div className={styles.templateHeader} style={{ background: accent }} />
        <div className={styles.templateBody}>
          <div
            className={styles.templateAvatar}
            style={{ background: accent + "33" }}
          />
          <div className={styles.templateLines}>
            {lines.map((w, i) => (
              <div
                key={i}
                className={styles.templateLine}
                style={{
                  width: `${w}%`,
                  background: i === 0 ? accent : undefined,
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.templateOverlay}>
          <span>Use Template</span>
        </div>
      </div>
      <p className={styles.templateName}>{name}</p>
    </div>
  );
}

export default function TemplatesSection() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Templates</span>
        <h2 className={styles.sectionTitle}>50+ designs, all free</h2>
        <p className={styles.sectionSub}>
          Pick one, make it yours. Every template is ATS-optimized.
        </p>
      </div>
      <div className={styles.templatesGrid}>
        {templates.map((t) => (
          <TemplateCard key={t.name} {...t} />
        ))}
      </div>
      <div className={styles.templatesCta}>
        <button className={styles.ctaPrimary}>Browse all templates →</button>
      </div>
    </section>
  );
}
