const AboutCta = ({ styles, onNavigate }) => {
  return (
    <section className={`${styles.section} ${styles.cta}`}>
      <h2>Ready to build yours?</h2>
      <p>Create a polished resume in minutes. No credit card required.</p>
      <button
        className={styles.ctaButton}
        onClick={() => onNavigate("/signup")}
      >
        Start building — it's free
      </button>
      <div className={styles.ctaNote}>
        FREE MEANS FREE. NO TRICKS, NO TRAPS.
      </div>
    </section>
  );
};

export default AboutCta;
