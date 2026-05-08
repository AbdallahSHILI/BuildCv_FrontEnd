import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingNavbar.module.css";

const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* ── Logo ── */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="8" fill="#2563eb" />
            <rect x="8" y="9" width="10" height="2.5" rx="1.25" fill="white" />
            <rect
              x="8"
              y="14.75"
              width="16"
              height="2.5"
              rx="1.25"
              fill="white"
            />
            <rect
              x="8"
              y="20.5"
              width="13"
              height="2.5"
              rx="1.25"
              fill="white"
            />
          </svg>
        </div>
        <span className={styles.logoText}>
          <span className={styles.logoBuild}>build</span>
          <span className={styles.logoCv}>cv</span>
        </span>
      </div>

      {/* ── Nav links ── */}
      <nav className={styles.links}>
        <a href="#templates" className={styles.link}>
          Resume Templates
        </a>
        <a href="#pricing" className={styles.link}>
          Pricing
        </a>
        <a href="#about" className={styles.link}>
          About
        </a>
      </nav>

      {/* ── Actions ── */}
      <div className={styles.actions}>
        <button className={styles.loginBtn} onClick={() => navigate("/login")}>
          Login
        </button>
        <button className={styles.startBtn} onClick={() => navigate("/signup")}>
          Start now
        </button>
      </div>

      {/* ── Mobile hamburger ── */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barOpen1 : ""} />
        <span className={menuOpen ? styles.barOpen2 : ""} />
        <span className={menuOpen ? styles.barOpen3 : ""} />
      </button>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a
            href="#templates"
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Resume Templates
          </a>
          <a
            href="#pricing"
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#about"
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <div className={styles.mobileDivider} />
          <button
            className={styles.mobileLogin}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className={styles.mobileStart}
            onClick={() => navigate("/signup")}
          >
            Start now
          </button>
        </div>
      )}
    </header>
  );
};

export default LandingNavbar;
