import styles from "../Resumes.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLabel}>✦ Template Gallery</div>
      <h1 className={styles.heroTitle}>
        Build your resume,
        <br />
        <span className={styles.heroAccent}>your way.</span>
      </h1>
      <p className={styles.heroSub}>
        Pick a design below — every detail is customizable and switchable
        anytime.
      </p>
    </div>
  );
};

export default Hero;
