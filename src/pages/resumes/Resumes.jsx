import { useState } from "react";
import styles from "./Resumes.module.css";
// import { useAuth } from "../../../assets/context/AuthContext";
// import { Link } from "react-router-dom";

// ── Mock CV thumbnail (replace with your real CV image later) ──
const CV_PLACEHOLDER = null; // set to your imported CV image

const FILTERS = ["All Templates", "Simple", "Modern", "Creative"];

// 20 placeholder CV cards — swap src with your real template images later
const CV_TEMPLATES = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  label: ["Classic", "Bold", "Slate", "Minimal", "Sharp"][i % 5],
}));

const Resumes = () => {
  // const { isAuthenticated, user } = useAuth();
  const isAuthenticated = false; // toggle to test both states

  const [activeFilter, setActiveFilter] = useState("All Templates");

  return (
    <div className={styles.page}>
      {/* ── Sidebar ── */}
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

      {/* ── Main Content ── */}
      <main className={styles.main}>
        {/* Hero Header */}
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

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          <div className={styles.filterTabs}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filterTab} ${activeFilter === f ? styles.filterActive : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === "Simple" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                  </svg>
                )}
                {f === "Modern" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                )}
                {f === "Creative" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                )}
                {f}
              </button>
            ))}
          </div>

          <button className={styles.importBtn}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Import existing resume
          </button>
        </div>

        {/* CV Grid */}
        <div className={styles.grid}>
          {CV_TEMPLATES.map((cv, i) => (
            <div
              key={cv.id}
              className={styles.card}
              style={{ animationDelay: `${i * 30}ms` }}
            >
              <div className={styles.cardPreview}>
                {CV_PLACEHOLDER ? (
                  <img
                    src={CV_PLACEHOLDER}
                    alt={`Template ${cv.id}`}
                    className={styles.cardImg}
                  />
                ) : (
                  <MockCV label={cv.label} index={i} />
                )}
                <div className={styles.cardOverlay}>
                  <button className={styles.useBtn}>Use this template</button>
                  <button className={styles.previewBtn}>Preview</button>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.cardLabel}>{cv.label}</span>
                <span className={styles.cardTag}>Free</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

// ── Placeholder CV skeleton rendered in CSS until real images are added ──
const MockCV = ({ label, index }) => {
  const accents = ["#3b82f6", "#6366f1", "#0ea5e9", "#8b5cf6", "#38bdf8"];
  const accent = accents[index % accents.length];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f8fafc",
        padding: "14px",
        boxSizing: "border-box",
        fontFamily: "Georgia, serif",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        overflow: "hidden",
      }}
    >
      {/* header bar */}
      <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: "8px" }}>
        <div
          style={{
            width: "55%",
            height: "7px",
            background: "#1e293b",
            borderRadius: "3px",
            marginBottom: "3px",
          }}
        />
        <div
          style={{
            width: "35%",
            height: "5px",
            background: "#94a3b8",
            borderRadius: "3px",
          }}
        />
      </div>
      <div style={{ height: "1px", background: "#e2e8f0", margin: "2px 0" }} />
      {/* section lines */}
      {[70, 50, 80, 45, 60, 55, 40, 65, 50, 75, 40, 55].map((w, j) => (
        <div
          key={j}
          style={{
            width: `${w}%`,
            height: j % 4 === 0 ? "5px" : "3px",
            background: j % 4 === 0 ? "#334155" : "#cbd5e1",
            borderRadius: "3px",
            marginTop: j % 4 === 0 ? "4px" : "0",
          }}
        />
      ))}
    </div>
  );
};

export default Resumes;
