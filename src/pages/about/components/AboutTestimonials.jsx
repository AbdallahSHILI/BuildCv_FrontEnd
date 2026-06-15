import { QUOTES } from "./data";

const AboutTestimonials = ({ styles }) => {
  return (
    <section className={`${styles.section} ${styles.testimonials}`}>
      <div className={styles.sectionHead}>
        <span className={styles.eyebrow}>Sheet A-04 — Feedback</span>
        <h2>What job seekers are saying</h2>
        <div className={styles.stars}>★★★★★</div>
      </div>

      <div className={styles.quoteGrid}>
        {QUOTES.map((quote) => (
          <div key={quote.author} className={styles.quoteCard}>
            <p>{quote.text}</p>
            <span className={styles.quoteAuthor}>{quote.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTestimonials;
