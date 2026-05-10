import styles from "../Resumes.module.css";
import MockCV from "./MockCV";

const CV_PLACEHOLDER = null;

const CV_TEMPLATES = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  label: ["Classic", "Bold", "Slate", "Minimal", "Sharp"][i % 5],
}));

const CVGrid = () => {
  return (
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
              <MockCV index={i} />
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
  );
};

export default CVGrid;
