import styles from "../Resumes.module.css";

const Sidebar = ({ isAuthenticated }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <span className={styles.logoBuild}>Build</span>
        <span className={styles.logoCV}>CV</span>
      </div>

      <div className={styles.sidebarTop}>
        <nav className={styles.sidebarNav}>
          <div className={`${styles.navItem} ${styles.navActive}`}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Resume
          </div>
        </nav>
      </div>

      {!isAuthenticated && (
        <div className={styles.sidebarBottom}>
          <div className={styles.sidebarCta}>
            <p className={styles.ctaHint}>
              Save your progress & access anywhere
            </p>
            <a href="/login" className={styles.loginBtn}>
              Login
            </a>
            <a href="/signup" className={styles.signupBtn}>
              Sign up
            </a>
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className={styles.sidebarBottom}>
          {/* user info here if needed */}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
