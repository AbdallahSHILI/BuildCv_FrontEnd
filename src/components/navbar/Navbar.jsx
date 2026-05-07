import styles from "./Navbar.module.css";
import { Customize, IA_Tools, Content, Nine_Point } from "../../assets/images";

const Navbar = () => {
  return (
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
        <button className={styles.download}>Download</button>
      </div>
    </nav>
  );
};

export default Navbar;
