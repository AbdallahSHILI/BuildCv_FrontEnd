import { useInView } from "../../hooks/useInView";
import styles from "../Landing.module.css";

const features = [
  {
    icon: "∞",
    title: "First Resume Free Forever",
    desc: "No trial. No credit card. No auto-upgrade. Your first resume is yours for life.",
  },
  {
    icon: "◎",
    title: "No Watermarks Ever",
    desc: "Your resume is your space. We never slap our logo on your work.",
  },
  {
    icon: "↓",
    title: "Unlimited PDF Downloads",
    desc: "Download as many times as you need. Edit, refresh, repeat.",
  },
  {
    icon: "▤",
    title: "50+ Premium Templates",
    desc: "ATS-optimized, recruiter-approved, fully customizable.",
  },
  {
    icon: "⬆",
    title: "Import Any Resume",
    desc: "Upload a PDF or DOCX and we'll extract your content instantly.",
  },
  {
    icon: "◉",
    title: "Privacy First",
    desc: "GDPR-compliant. We never sell your data. Delete everything anytime.",
  },
];

export default function FeaturesSection() {
  const [featRef, featVisible] = useInView();

  return (
    <section
      ref={featRef}
      className={`${styles.section} ${featVisible ? styles.sectionVisible : ""}`}
    >
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>What's included</span>
        <h2 className={styles.sectionTitle}>Everything you need, free</h2>
        <p className={styles.sectionSub}>
          You won't find a more generous free plan anywhere.
        </p>
      </div>
      <div className={styles.featuresGrid}>
        {features.map((f, i) => (
          <div
            key={f.title}
            className={styles.featureCard}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className={styles.featureIcon}>{f.icon}</div>
            <h3 className={styles.featureTitle}>{f.title}</h3>
            <p className={styles.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
