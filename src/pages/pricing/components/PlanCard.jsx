const PlanCard = ({ styles, plan, yearly, animDelay }) => {
  const {
    icon,
    iconBg,
    name,
    desc,
    monthlyPrice,
    yearlyPrice,
    priceNote,
    featured,
    btnLabel,
    btnStyle,
    features,
  } = plan;

  const price = yearly ? yearlyPrice : monthlyPrice;
  const isFree = price === 0;
  const light = featured;

  const btnClass =
    btnStyle === "featured"
      ? styles.planBtnFeatured
      : btnStyle === "enterprise"
        ? styles.planBtnEnterprise
        : styles.planBtnDefault;

  return (
    <div
      className={`${styles.planCard} ${featured ? styles.planCardFeatured : ""} ${styles.animFadeUp}`}
      style={{ animationDelay: animDelay }}
    >
      {featured && <span className={styles.popularBadge}>⚡ Most popular</span>}

      {/* Icon */}
      <div className={styles.planIcon} style={{ background: iconBg }}>
        {icon}
      </div>

      {/* Name & desc */}
      <h3 className={`${styles.planName} ${light ? styles.planNameLight : ""}`}>
        {name}
      </h3>
      <p className={`${styles.planDesc} ${light ? styles.planDescLight : ""}`}>
        {desc}
      </p>

      {/* Price */}
      <div className={styles.priceRow}>
        {!isFree && (
          <span
            className={`${styles.priceCurrency} ${light ? styles.priceCurrencyLight : ""}`}
          >
            $
          </span>
        )}
        <span
          className={`${styles.priceAmount} ${light ? styles.priceAmountLight : ""}`}
        >
          {isFree ? "Free" : price}
        </span>
      </div>

      {!isFree && (
        <p
          className={`${styles.pricePeriod} ${light ? styles.pricePeriodLight : ""}`}
        >
          / month{" "}
          {yearly && <span style={{ opacity: 0.6 }}>(billed yearly)</span>}
        </p>
      )}

      <p
        className={`${styles.priceNote} ${light ? styles.priceNoteLight : ""}`}
      >
        {priceNote}
      </p>

      {/* CTA */}
      <button className={`${styles.planBtn} ${btnClass}`}>{btnLabel}</button>

      {/* Features */}
      <div
        className={`${styles.featureDivider} ${light ? styles.featureDividerDark : ""}`}
      />
      <p
        className={`${styles.featureLabel} ${light ? styles.featureLabelLight : ""}`}
      >
        What's included
      </p>
      <ul className={styles.featureList}>
        {features.map((f, i) => (
          <li
            key={i}
            className={`${styles.featureItem} ${light ? styles.featureItemLight : ""}`}
          >
            <span
              className={`${styles.featureCheck} ${light ? styles.featureCheckBlue : styles.featureCheckGreen}`}
            >
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
