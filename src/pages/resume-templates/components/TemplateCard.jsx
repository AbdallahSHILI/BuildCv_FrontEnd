import MiniResume from "./MiniResume";

const TemplateCard = ({ styles, template, liked, onToggleLike }) => {
  const { id, name, cat, colors, style, badge } = template;

  return (
    <div className={styles.card}>
      <div
        className={`${styles.preview} ${
          badge === "popular" ? styles.previewPopular : ""
        }`}
      >
        {badge === "popular" && (
          <span className={`${styles.badge} ${styles.badgePopular}`}>
            ⭐ Popular
          </span>
        )}
        {badge === "new" && (
          <span className={`${styles.badge} ${styles.badgeNew}`}>✦ New</span>
        )}

        <MiniResume styles={styles} colors={colors} style={style} />

        <div className={styles.overlay}>
          <button className={styles.overlayBtn}>Use template</button>
          <button className={`${styles.overlayBtn} ${styles.overlayBtnGhost}`}>
            Preview
          </button>
        </div>
      </div>

      <div className={styles.cardInfo}>
        <div>
          <p className={styles.cardName}>{name}</p>
          <p className={styles.cardCat}>{cat}</p>
        </div>
        <button
          className={`${styles.heart} ${liked ? styles.heartLiked : ""}`}
          onClick={(e) => onToggleLike(id, e)}
          aria-label="Like"
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
