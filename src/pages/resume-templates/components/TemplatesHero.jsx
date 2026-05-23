const TemplatesHero = ({ styles, search, onSearchChange }) => (
  <section className={styles.hero}>
    <span className={styles.heroTag}>✦ Resume Templates</span>
    <h1 className={styles.heroTitle}>
      Pick a template, <span className={styles.heroAccent}>land the job.</span>
    </h1>
    <p className={styles.heroSub}>
      ATS-friendly templates crafted to impress recruiters. Choose, customize,
      download — in minutes.
    </p>
    <div className={styles.searchWrap}>
      <span className={styles.searchIcon}>🔍</span>
      <input
        className={styles.search}
        placeholder="Search templates..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  </section>
);

export default TemplatesHero;
