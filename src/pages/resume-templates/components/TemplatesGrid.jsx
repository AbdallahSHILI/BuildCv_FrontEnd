import TemplateCard from "./TemplateCard";

const TemplatesGrid = ({ styles, templates, liked, onToggleLike }) => (
  <main className={styles.content}>
    <div className={styles.toolbar}>
      <p className={styles.count}>
        Showing <strong>{templates.length}</strong> template
        {templates.length !== 1 ? "s" : ""}
      </p>
      <div className={styles.sort}>
        Sort by
        <select className={styles.sortSelect}>
          <option>Most popular</option>
          <option>Newest</option>
          <option>A–Z</option>
        </select>
      </div>
    </div>

    <div className={styles.grid}>
      {templates.map((t, i) => (
        <div key={t.id} style={{ animationDelay: `${i * 40}ms` }}>
          <TemplateCard
            styles={styles}
            template={t}
            liked={liked.has(t.id)}
            onToggleLike={onToggleLike}
          />
        </div>
      ))}
    </div>
  </main>
);

export default TemplatesGrid;
