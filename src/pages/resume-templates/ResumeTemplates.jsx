import { useState } from "react";
import styles from "./ResumeTemplates.module.css";
import Navbar from "../../components/navbar/landingNavbar/LandingNavbar";
import TemplatesHero from "./components/TemplatesHero";
import TemplatesSidebar from "./components/TemplatesSidebar";
import TemplatesGrid from "./components/TemplatesGrid";
import { TEMPLATES } from "./components/templatesData";

const ResumeTemplates = () => {
  const [activeCategory, setActiveCategory] = useState("All templates");
  const [activeColor, setActiveColor] = useState(null);
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState(new Set());

  const filtered = TEMPLATES.filter((t) => {
    const matchCat =
      activeCategory === "All templates" || t.cat === activeCategory;
    const matchColor = !activeColor || t.colors.includes(activeColor);
    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.cat.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchColor && matchSearch;
  });

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleColor = (hex) =>
    setActiveColor((prev) => (prev === hex ? null : hex));

  return (
    <div className={styles.page}>
      <Navbar />

      <TemplatesHero
        styles={styles}
        search={search}
        onSearchChange={setSearch}
      />

      <div className={styles.body}>
        <TemplatesSidebar
          styles={styles}
          activeCategory={activeCategory}
          activeColor={activeColor}
          onCategoryChange={setActiveCategory}
          onColorToggle={toggleColor}
        />
        <TemplatesGrid
          styles={styles}
          templates={filtered}
          liked={liked}
          onToggleLike={toggleLike}
        />
      </div>

      <div className={styles.ctaStrip}>
        <div className={styles.ctaText}>
          <h3>Can't find the right template?</h3>
          <p>
            Start from scratch or let AI generate one tailored to your industry.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <button className={styles.btnGhost}>Browse all →</button>
          <button className={styles.btnPrimary}>✦ AI Generate</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplates;
