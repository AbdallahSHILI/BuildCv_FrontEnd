import styles from "../Landing.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <span className={styles.footerLogo}>BuildCV</span>
        <span>© 2025 BuildCV. All rights reserved.</span>
      </div>
      <div className={styles.footerLinks}>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
}
