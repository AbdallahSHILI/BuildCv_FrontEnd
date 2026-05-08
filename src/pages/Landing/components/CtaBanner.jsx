import { useInView } from "../hooks/useInView";
import styles from "../Landing.module.css";

export default function CtaBanner() {
  const [ctaRef, ctaVisible] = useInView();

  return (
    <section
      ref={ctaRef}
      className={`${styles.ctaBanner} ${ctaVisible ? styles.ctaBannerVisible : ""}`}
    >
      <div className={styles.ctaBannerBg} />
      <h2 className={styles.ctaBannerTitle}>Your next job starts here.</h2>
      <p className={styles.ctaBannerSub}>
        Free forever. No credit card. No catch.
      </p>
      <button className={styles.ctaBannerBtn}>Build my resume now →</button>
    </section>
  );
}
