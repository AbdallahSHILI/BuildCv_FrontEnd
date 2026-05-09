import { useState } from "react";
import styles from "./Navbar.module.css";
import { useAuth } from "../../../assets/context/AuthContext";
import {
  Customize,
  IA_Tools,
  Content,
  Nine_Point,
  Download,
} from "../../../assets/images";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth(); // grab the current user from context

  // Extract Google photo if available
  const googlePhoto = user?.profilePicture || user?._json?.picture || null;
  const displayName = user?.displayName || user?.name || null;

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <h2 className={styles.logo}>BuildCV</h2>
          <ul className={styles.links}>
            <li className={styles.active}>
              <img src={Nine_Point} alt="" className={styles.navIcon} />
              Overview
            </li>
            <li>
              <img src={Content} alt="" className={styles.navIcon} />
              Content
            </li>
            <li>
              <img src={Customize} alt="" className={styles.navIcon} />
              Customize
            </li>
            <li>
              <img src={IA_Tools} alt="" className={styles.navIcon} />
              AI Tools
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <span className={styles.resume}>Resume 1</span>
          <button className={styles.download}>
            Download
            <img src={Download} alt="" className={styles.downloadIcon} />
          </button>

          {/* Google profile avatar — only shown when logged in via Google */}
          {googlePhoto && (
            <div className={styles.avatarWrapper} title={displayName}>
              <img
                src={googlePhoto}
                alt={displayName || "Profile"}
                className={styles.avatar}
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          <button
            className={styles.hamburger}
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {sidebarOpen && (
        <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
      >
        <button
          className={styles.closeBtn}
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <ul className={styles.sidebarLinks}>
          <li className={styles.sidebarActive}>
            <img src={Nine_Point} alt="" className={styles.navIcon} />
            Overview
          </li>
          <li>
            <img src={Content} alt="" className={styles.navIcon} />
            Content
          </li>
          <li>
            <img src={Customize} alt="" className={styles.navIcon} />
            Customize
          </li>
          <li>
            <img src={IA_Tools} alt="" className={styles.navIcon} />
            AI Tools
          </li>
        </ul>

        <div className={styles.sidebarBottom}>
          {/* Avatar in sidebar bottom too */}
          {googlePhoto && (
            <div className={styles.sidebarUser}>
              <img
                src={googlePhoto}
                alt={displayName || "Profile"}
                className={styles.sidebarAvatar}
                referrerPolicy="no-referrer"
              />
              {displayName && (
                <span className={styles.sidebarName}>{displayName}</span>
              )}
            </div>
          )}
          <span className={styles.sidebarResume}>Resume 1</span>
          <button className={styles.download}>
            Download
            <img src={Download} alt="" className={styles.downloadIcon} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
