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
  const email = user?.email || user?._json?.email || null;

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <div className={styles.logoMark}>B</div>
          <ul className={styles.links}>
            <li className={styles.active}>
              <img src={Nine_Point} alt="" className={styles.navIcon} />
              <span>Overview</span>
            </li>
            <li>
              <span
                className={styles.navIconTinted}
                style={{
                  WebkitMaskImage: `url(${Content})`,
                  maskImage: `url(${Content})`,
                }}
                aria-hidden="true"
              />
              <span>Content</span>
            </li>
            <li>
              <span
                className={styles.navIconTinted}
                style={{
                  WebkitMaskImage: `url(${Customize})`,
                  maskImage: `url(${Customize})`,
                }}
                aria-hidden="true"
              />
              <span>Customize</span>
            </li>
            <li>
              <img src={IA_Tools} alt="" className={styles.navIcon} />
              <span>AI Tools</span>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <span className={styles.resumePill}>Resume 1</span>

          <button className={styles.download}>
            Download
            <img src={Download} alt="" className={styles.downloadIcon} />
          </button>

          {googlePhoto && (
            <div className={styles.userChip} title={displayName}>
              <img
                src={googlePhoto}
                alt={displayName || "Profile"}
                className={styles.avatar}
                referrerPolicy="no-referrer"
              />
              {displayName && (
                <div className={styles.userText}>
                  <span className={styles.userName}>{displayName}</span>
                  {email && <span className={styles.userSub}>{email}</span>}
                </div>
              )}
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
            <span>Overview</span>
          </li>
          <li>
            <span
              className={styles.navIconTinted}
              style={{
                WebkitMaskImage: `url(${Content})`,
                maskImage: `url(${Content})`,
              }}
              aria-hidden="true"
            />
            <span>Content</span>
          </li>
          <li>
            <span
              className={styles.navIconTinted}
              style={{
                WebkitMaskImage: `url(${Customize})`,
                maskImage: `url(${Customize})`,
              }}
              aria-hidden="true"
            />
            <span>Customize</span>
          </li>
          <li>
            <img src={IA_Tools} alt="" className={styles.navIcon} />
            <span>AI Tools</span>
          </li>
        </ul>

        <div className={styles.sidebarBottom}>
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
