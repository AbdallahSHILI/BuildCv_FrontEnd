import { CALLOUTS } from "./data";

const AboutTeam = ({ styles }) => {
  return (
    <section className={`${styles.section} ${styles.team}`}>
      <div className={styles.sectionHead}>
        <span className={styles.eyebrow}>Sheet A-02 — The team</span>
        <h2>Built by a small, independent team</h2>
        <p>
          We're not backed by investors chasing growth at all costs. We're a
          small, quality-focused team building the resume tool we always wished
          existed — for everyone, everywhere.
        </p>
      </div>

      <div className={styles.calloutGrid}>
        {CALLOUTS.map((item) => (
          <div key={item.tag} className={styles.callout}>
            <span className={styles.calloutTag}>{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
