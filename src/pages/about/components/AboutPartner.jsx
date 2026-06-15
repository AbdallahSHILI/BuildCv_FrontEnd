const AboutPartner = ({ styles, onNavigate }) => {
  return (
    <section className={`${styles.section} ${styles.partner}`}>
      <div>
        <span className={styles.eyebrow}>Sheet A-05 — Collaborations</span>
        <h2>Interested in partnering?</h2>
        <p>
          Are you a career coach, job board, or platform supporting job seekers?
          We're open to meaningful collaborations that help more people put
          their best resume forward.
        </p>
      </div>
      <div className={styles.partnerActions}>
        <a href="mailto:hello@buildcv.com">→ hello@buildcv.com</a>
        <button onClick={() => onNavigate("/pricing")}>→ View pricing</button>
        <button onClick={() => onNavigate("/templates")}>
          → Browse templates
        </button>
      </div>
    </section>
  );
};

export default AboutPartner;
