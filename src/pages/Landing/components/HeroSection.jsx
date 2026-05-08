import { useInView } from "../hooks/useInView";
import styles from "../Landing.module.css";

export default function HeroSection() {
  const [heroRef, heroVisible] = useInView(0.05);

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${heroVisible ? styles.heroVisible : ""}`}
    >
      <div className={styles.heroBg}>
        <div className={styles.heroBlob1} />
        <div className={styles.heroBlob2} />
        <div className={styles.heroGrid} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>✨ 100% Free — No Credit Card</div>
        <h1 className={styles.heroTitle}>
          Build a Resume That
          <br />
          <span className={styles.heroAccent}>Gets You Hired</span>
        </h1>
        <p className={styles.heroSub}>
          Create a professional, ATS-ready resume in minutes.
          <br />
          No watermarks. No paywalls. No nonsense.
        </p>
        <div className={styles.heroCtas}>
          <button className={styles.ctaPrimary}>Get started for free →</button>
          <button className={styles.ctaSecondary}>See templates</button>
        </div>
        <div className={styles.heroTrust}>
          <div className={styles.heroAvatars}>
            {["#2563eb", "#0ea5e9", "#10b981", "#f59e0b", "#ec4899"].map(
              (c, i) => (
                <div
                  key={i}
                  className={styles.heroAvatar}
                  style={{ background: c, marginLeft: i ? "-10px" : 0 }}
                />
              ),
            )}
          </div>
          <span>
            Trusted by <strong>5M+</strong> job seekers worldwide
          </span>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.mockResume}>
          <div className={styles.mockHeader}>
            <div className={styles.mockAvatar} />
            <div className={styles.mockInfo}>
              <div className={styles.mockName} />
              <div className={styles.mockRole} />
            </div>
          </div>
          <div className={styles.mockSection}>
            <div className={styles.mockLabel} />
            <div className={styles.mockLine} style={{ width: "90%" }} />
            <div className={styles.mockLine} style={{ width: "75%" }} />
            <div className={styles.mockLine} style={{ width: "82%" }} />
          </div>
          <div className={styles.mockSection}>
            <div className={styles.mockLabel} />
            <div className={styles.mockLine} style={{ width: "70%" }} />
            <div className={styles.mockLine} style={{ width: "85%" }} />
          </div>
          <div className={styles.mockSkills}>
            {["React", "Design", "Python", "Leadership"].map((s) => (
              <span key={s} className={styles.mockSkill}>
                {s}
              </span>
            ))}
          </div>
          <div className={styles.mockBadge}>✓ ATS Ready</div>
        </div>
        <div className={styles.floatCard1}>
          <span>📄</span> PDF exported!
        </div>
        <div className={styles.floatCard2}>
          <span>🎯</span> Interview in 2 days
        </div>
      </div>
    </section>
  );
}
