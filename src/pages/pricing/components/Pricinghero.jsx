const PricingHero = ({ styles, yearly, onToggle }) => (
  <section className={styles.hero}>
    <div className={styles.heroTag}>✦ Simple pricing</div>
    <h1 className={styles.heroTitle}>
      Invest in your <span className={styles.heroAccent}>next chapter</span>
    </h1>
    <p className={styles.heroSub}>
      One plan does it all. Start free, upgrade when you're ready — cancel
      anytime.
    </p>

    <div className={styles.toggleWrap}>
      <span
        className={`${styles.toggleLabel} ${!yearly ? styles.toggleLabelActive : ""}`}
        onClick={() => yearly && onToggle()}
      >
        Monthly
      </span>

      <button
        className={`${styles.toggleTrack} ${yearly ? styles.toggleTrackOn : ""}`}
        onClick={onToggle}
        aria-label="Toggle billing period"
      >
        <span
          className={`${styles.toggleThumb} ${yearly ? styles.toggleThumbOn : ""}`}
        />
      </button>

      <span
        className={`${styles.toggleLabel} ${yearly ? styles.toggleLabelActive : ""}`}
        onClick={() => !yearly && onToggle()}
      >
        Yearly
      </span>

      <span className={styles.saveBadge}>Save 33%</span>
    </div>
  </section>
);

export default PricingHero;
