const ACCENTS = ["#3b82f6", "#6366f1", "#0ea5e9", "#8b5cf6", "#38bdf8"];

const MockCV = ({ index }) => {
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f8fafc",
        padding: "14px",
        boxSizing: "border-box",
        fontFamily: "Georgia, serif",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        overflow: "hidden",
      }}
    >
      <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: "8px" }}>
        <div
          style={{
            width: "55%",
            height: "7px",
            background: "#1e293b",
            borderRadius: "3px",
            marginBottom: "3px",
          }}
        />
        <div
          style={{
            width: "35%",
            height: "5px",
            background: "#94a3b8",
            borderRadius: "3px",
          }}
        />
      </div>
      <div style={{ height: "1px", background: "#e2e8f0", margin: "2px 0" }} />
      {[70, 50, 80, 45, 60, 55, 40, 65, 50, 75, 40, 55].map((w, j) => (
        <div
          key={j}
          style={{
            width: `${w}%`,
            height: j % 4 === 0 ? "5px" : "3px",
            background: j % 4 === 0 ? "#334155" : "#cbd5e1",
            borderRadius: "3px",
            marginTop: j % 4 === 0 ? "4px" : "0",
          }}
        />
      ))}
    </div>
  );
};

export default MockCV;
