const MiniResume = ({ styles, colors, style }) => {
  const [primary, dark, light] = colors;

  if (style === "sidebar")
    return (
      <div className={styles.miniSidebarWrap}>
        <div className={styles.miniSidebarLeft} style={{ background: dark }}>
          <div
            className={styles.miniSidebarAvatar}
            style={{ background: primary }}
          />
          <div
            className={styles.miniLine}
            style={{ background: "rgba(255,255,255,0.3)", width: "90%" }}
          />
          <div
            className={styles.miniLine}
            style={{ background: "rgba(255,255,255,0.15)", width: "65%" }}
          />
          <div className={styles.miniDividerDark} />
          <div
            className={styles.miniLine}
            style={{ background: "rgba(255,255,255,0.15)", width: "90%" }}
          />
          <div
            className={styles.miniLine}
            style={{ background: "rgba(255,255,255,0.15)", width: "70%" }}
          />
          <div
            className={styles.miniLine}
            style={{ background: "rgba(255,255,255,0.15)", width: "80%" }}
          />
        </div>
        <div className={styles.miniSidebarRight} style={{ background: light }}>
          <div
            className={styles.miniLine}
            style={{
              background: dark,
              height: 7,
              width: "75%",
              marginBottom: 5,
            }}
          />
          <div
            className={styles.miniLine}
            style={{ background: "#94a3b8", width: "50%", marginBottom: 8 }}
          />
          <div className={styles.miniDivider} />
          {[1, 2].map((i) => (
            <div key={i} style={{ marginBottom: 6 }}>
              <div
                className={styles.miniSectionLabel}
                style={{ background: primary }}
              />
              <div
                className={styles.miniLine}
                style={{ background: "#e2e8f0" }}
              />
              <div
                className={styles.miniLine}
                style={{ background: "#e2e8f0", width: "70%" }}
              />
            </div>
          ))}
        </div>
      </div>
    );

  if (style === "twoCol")
    return (
      <div className={styles.miniResume}>
        <div className={styles.miniHeader}>
          <div className={styles.miniAvatar} style={{ background: primary }} />
          <div className={styles.miniNameBlock}>
            <div
              className={styles.miniLine}
              style={{ background: dark, height: 7, width: "75%" }}
            />
            <div
              className={styles.miniLine}
              style={{ background: "#94a3b8", width: "50%" }}
            />
          </div>
        </div>
        <div className={styles.miniTwoCol}>
          {[
            ["100%", "80%", "90%", "70%"],
            ["90%", "70%", "85%", "60%"],
          ].map((ws, ci) => (
            <div key={ci} className={styles.miniCol}>
              <div
                className={styles.miniSectionLabel}
                style={{ background: primary }}
              />
              {ws.map((w, i) => (
                <div
                  key={i}
                  className={styles.miniLine}
                  style={{ background: "#e2e8f0", width: w }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );

  if (style === "dark")
    return (
      <div className={styles.miniDark} style={{ background: dark }}>
        <div className={styles.miniDarkHeader}>
          <div
            className={styles.miniLine}
            style={{
              background: "rgba(255,255,255,0.85)",
              height: 9,
              width: "65%",
            }}
          />
          <div
            className={styles.miniLine}
            style={{ background: colors[2], opacity: 0.6, width: "42%" }}
          />
        </div>
        {[1, 2].map((i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <div
              className={styles.miniSectionLabel}
              style={{ background: colors[2], opacity: 0.4 }}
            />
            <div
              className={styles.miniLine}
              style={{ background: "rgba(255,255,255,0.15)" }}
            />
            <div
              className={styles.miniLine}
              style={{ background: "rgba(255,255,255,0.1)", width: "70%" }}
            />
          </div>
        ))}
      </div>
    );

  if (style === "bold")
    return (
      <div className={styles.miniBold}>
        <div className={styles.miniBoldHeader} style={{ background: dark }}>
          <div
            className={styles.miniLine}
            style={{ background: "white", height: 10, width: "70%" }}
          />
          <div
            className={styles.miniLine}
            style={{ background: primary, width: "44%" }}
          />
        </div>
        <div className={styles.miniBoldBody}>
          {[1, 2].map((i) => (
            <div key={i} style={{ marginBottom: 7 }}>
              <div
                className={styles.miniSectionLabel}
                style={{ background: primary }}
              />
              <div
                className={styles.miniLine}
                style={{ background: "#e2e8f0" }}
              />
              <div
                className={styles.miniLine}
                style={{ background: "#e2e8f0", width: "65%" }}
              />
            </div>
          ))}
        </div>
      </div>
    );

  /* classic / minimal / clean */
  return (
    <div className={styles.miniResume}>
      <div className={styles.miniHeader}>
        <div
          className={styles.miniAvatar}
          style={{ background: style === "minimal" ? dark : primary }}
        />
        <div className={styles.miniNameBlock}>
          <div
            className={styles.miniLine}
            style={{ background: dark, height: 7, width: "75%" }}
          />
          <div
            className={styles.miniLine}
            style={{ background: "#94a3b8", width: "50%" }}
          />
        </div>
      </div>
      <div className={styles.miniDivider} />
      <div
        className={styles.miniSectionLabel}
        style={{ background: primary }}
      />
      <div className={styles.miniLine} style={{ background: "#e2e8f0" }} />
      <div
        className={styles.miniLine}
        style={{ background: "#e2e8f0", width: "72%" }}
      />
      <div className={styles.miniDivider} />
      <div
        className={styles.miniSectionLabel}
        style={{ background: primary }}
      />
      <div className={styles.miniLine} style={{ background: "#e2e8f0" }} />
      <div
        className={styles.miniLine}
        style={{ background: "#e2e8f0", width: "55%" }}
      />
      <div className={styles.miniSkills}>
        {[35, 28, 42].map((w, i) => (
          <div
            key={i}
            className={styles.miniSkillPill}
            style={{ background: primary, opacity: 0.22, width: w }}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniResume;
