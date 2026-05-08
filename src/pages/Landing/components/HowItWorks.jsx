import { useInView } from "../../hooks/useInView";
import styles from "../Landing.module.css";

const steps = [
  {
    number: "01",
    title: "Choose a template",
    desc: "Pick from 50+ professionally designed templates — or start from a blank canvas and make it yours.",
    icon: "▤",
  },
  {
    number: "02",
    title: "Add your experience",
    desc: "Fill in your details with our guided editor. Import an existing resume to get started even faster.",
    icon: "✎",
  },
  {
    number: "03",
    title: "Customize the design",
    desc: "Adjust fonts, colors, spacing, and layout until your resume feels exactly like you.",
    icon: "◈",
  },
  {
    number: "04",
    title: "Download unlimited PDFs",
    desc: "Your resume auto-saves. Update and re-download anytime — no limits, no fees.",
    icon: "↓",
  },
];

export default function HowItWorks() {
  const [stepsRef, stepsVisible] = useInView();

  return (
    <section
      ref={stepsRef}
      className={`${styles.section} ${stepsVisible ? styles.sectionVisible : ""}`}
    >
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>How it works</span>
        <h2 className={styles.sectionTitle}>Resume ready in 4 steps</h2>
        <p className={styles.sectionSub}>
          No learning curve. No confusion. Just results.
        </p>
      </div>
      <div className={styles.stepsGrid}>
        {steps.map((s, i) => (
          <div
            key={s.number}
            className={styles.stepCard}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className={styles.stepNumber}>{s.number}</div>
            <div className={styles.stepIcon}>{s.icon}</div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
