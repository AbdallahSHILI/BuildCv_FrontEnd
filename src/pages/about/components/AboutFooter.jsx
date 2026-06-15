import { FOOTER_LINKS } from "./data";

const AboutFooter = ({ styles, onNavigate }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <h3>BuildCV</h3>
          <p>
            A small, independent team building a free, no-nonsense resume maker.
            Our mission: help job seekers put their best foot forward, without
            the busywork.
          </p>
        </div>

        <div className={styles.footerCol}>
          <h4>Product</h4>
          <ul>
            {FOOTER_LINKS.product.map((link) => (
              <li key={link.route}>
                <button onClick={() => onNavigate(link.route)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Company</h4>
          <ul>
            {FOOTER_LINKS.company.map((link) => (
              <li key={link.route}>
                <button onClick={() => onNavigate(link.route)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        © 2026 BuildCV. All rights reserved.
      </div>
    </footer>
  );
};

export default AboutFooter;
