import { CATEGORIES, COLOR_FILTERS, FEATURE_FILTERS } from "./templatesData";

const TemplatesSidebar = ({
  styles,
  activeCategory,
  activeColor,
  onCategoryChange,
  onColorToggle,
}) => (
  <aside className={styles.sidebar}>
    <div className={styles.filterGroup}>
      <p className={styles.filterTitle}>Category</p>
      {CATEGORIES.map((c) => (
        <button
          key={c.label}
          className={`${styles.filterBtn} ${
            activeCategory === c.label ? styles.filterBtnActive : ""
          }`}
          onClick={() => onCategoryChange(c.label)}
        >
          {c.label}
          <span className={styles.filterCount}>{c.count}</span>
        </button>
      ))}
    </div>

    <div className={styles.filterGroup}>
      <p className={styles.filterTitle}>Color</p>
      {COLOR_FILTERS.map((c) => (
        <button
          key={c.hex}
          className={`${styles.filterBtn} ${
            activeColor === c.hex ? styles.filterBtnActive : ""
          }`}
          onClick={() => onColorToggle(c.hex)}
        >
          <span className={styles.colorDot} style={{ background: c.hex }} />
          {c.label}
        </button>
      ))}
    </div>

    <div className={styles.filterGroup}>
      <p className={styles.filterTitle}>Features</p>
      {FEATURE_FILTERS.map((f) => (
        <button key={f} className={styles.filterBtn}>
          {f}
        </button>
      ))}
    </div>
  </aside>
);

export default TemplatesSidebar;
