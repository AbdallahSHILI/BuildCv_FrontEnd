import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <h2 className={styles.logo}>BuildCV</h2>
        <ul className={styles.links}>
          <li>Overview</li>
          <li>Content</li>
          <li>Customize</li>
          <li>AI Tools</li>
        </ul>
      </div>

      <div className={styles.right}>
        <span className={styles.resume}>Resume 1</span>
        <button className={styles.download}>Download</button>
      </div>
    </nav>
  );
};

export default Navbar;
