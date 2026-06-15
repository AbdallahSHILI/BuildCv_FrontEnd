import { CHECK_ITEMS } from "./data";

const AboutDifference = ({ styles }) => {
  return (
    <section className={`${styles.section} ${styles.different}`}>
      <div className={styles.sectionHead}>
        <span className={styles.eyebrow}>Sheet A-03 — The difference</span>
        <h2>Purpose-built for one job: your resume</h2>
        <p>
          Unlike general design tools, BuildCV isn't trying to be a presentation
          app, a poster maker, and a resume builder all at once. Every part of
          it is built around a single document.
        </p>
      </div>

      <div className={styles.checkGrid}>
        {CHECK_ITEMS.map((item) => (
          <div key={item.title} className={styles.checkItem}>
            <span className={styles.checkMark}>✓</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutDifference;
