const AboutHero = ({ styles }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>Sheet A-01 — Origin story</span>
          <h1>
            Why we built <span>BuildCV</span>
          </h1>
          <p>
            Writing a resume shouldn't feel like assembling furniture without
            instructions. Most people still fight with Word margins, font sizes,
            and broken layouts. BuildCV is a free, no‑nonsense resume builder —
            you bring the content, we handle the structure, spacing, and design.
          </p>
        </div>

        <div className={styles.heroArt}>
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            {/* page outline */}
            <rect
              x="40"
              y="20"
              width="220"
              height="320"
              rx="2"
              fill="rgba(255,255,255,0.04)"
              stroke="#93c5fd"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* corner crop marks */}
            <path d="M32,20 H40 M40,12 V20" stroke="#93c5fd" strokeWidth="1" />
            <path
              d="M260,20 H268 M260,12 V20"
              stroke="#93c5fd"
              strokeWidth="1"
            />
            <path
              d="M32,340 H40 M40,340 V348"
              stroke="#93c5fd"
              strokeWidth="1"
            />
            <path
              d="M260,340 H268 M260,340 V348"
              stroke="#93c5fd"
              strokeWidth="1"
            />

            {/* header block */}
            <rect
              x="58"
              y="38"
              width="130"
              height="30"
              rx="2"
              fill="rgba(255,255,255,0.14)"
            />
            <circle
              cx="228"
              cy="53"
              r="15"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="1.5"
            />

            {/* name + title */}
            <rect
              x="58"
              y="82"
              width="90"
              height="6"
              rx="1"
              fill="rgba(255,255,255,0.28)"
            />
            <rect
              x="58"
              y="94"
              width="130"
              height="5"
              rx="1"
              fill="rgba(255,255,255,0.14)"
            />
            <line
              x1="58"
              y1="116"
              x2="240"
              y2="116"
              stroke="rgba(255,255,255,0.2)"
            />

            {/* experience section */}
            <rect x="58" y="128" width="60" height="6" rx="1" fill="#f59e0b" />
            <rect
              x="58"
              y="144"
              width="140"
              height="6"
              rx="1"
              fill="rgba(255,255,255,0.26)"
            />
            <rect
              x="58"
              y="156"
              width="160"
              height="4"
              rx="1"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="58"
              y="164"
              width="120"
              height="4"
              rx="1"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="58"
              y="184"
              width="130"
              height="6"
              rx="1"
              fill="rgba(255,255,255,0.26)"
            />
            <rect
              x="58"
              y="196"
              width="160"
              height="4"
              rx="1"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="58"
              y="204"
              width="100"
              height="4"
              rx="1"
              fill="rgba(255,255,255,0.1)"
            />
            <line
              x1="58"
              y1="226"
              x2="240"
              y2="226"
              stroke="rgba(255,255,255,0.2)"
            />

            {/* skills section */}
            <rect x="58" y="238" width="50" height="6" rx="1" fill="#f59e0b" />
            <rect
              x="58"
              y="252"
              width="44"
              height="14"
              rx="7"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="108"
              y="252"
              width="58"
              height="14"
              rx="7"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="172"
              y="252"
              width="40"
              height="14"
              rx="7"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="58"
              y="272"
              width="66"
              height="14"
              rx="7"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="130"
              y="272"
              width="48"
              height="14"
              rx="7"
              fill="rgba(255,255,255,0.1)"
            />

            {/* horizontal dimension */}
            <line
              x1="40"
              y1="358"
              x2="260"
              y2="358"
              stroke="#f59e0b"
              strokeWidth="1"
            />
            <line
              x1="40"
              y1="354"
              x2="40"
              y2="362"
              stroke="#f59e0b"
              strokeWidth="1"
            />
            <line
              x1="260"
              y1="354"
              x2="260"
              y2="362"
              stroke="#f59e0b"
              strokeWidth="1"
            />
            <text
              x="150"
              y="374"
              textAnchor="middle"
              fill="#f59e0b"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="10"
            >
              210 mm
            </text>

            {/* vertical dimension */}
            <line
              x1="278"
              y1="20"
              x2="278"
              y2="340"
              stroke="#f59e0b"
              strokeWidth="1"
            />
            <line
              x1="274"
              y1="20"
              x2="282"
              y2="20"
              stroke="#f59e0b"
              strokeWidth="1"
            />
            <line
              x1="274"
              y1="340"
              x2="282"
              y2="340"
              stroke="#f59e0b"
              strokeWidth="1"
            />
            <text
              x="292"
              y="185"
              textAnchor="middle"
              fill="#f59e0b"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="10"
              transform="rotate(90,292,185)"
            >
              297 mm
            </text>

            {/* sidebar panel */}
            <rect
              x="300"
              y="60"
              width="80"
              height="280"
              rx="2"
              fill="rgba(255,255,255,0.03)"
              stroke="#334155"
              strokeWidth="1"
            />
            <rect
              x="312"
              y="76"
              width="56"
              height="5"
              rx="1"
              fill="rgba(255,255,255,0.18)"
            />
            <rect
              x="312"
              y="87"
              width="40"
              height="4"
              rx="1"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="312"
              y="95"
              width="48"
              height="4"
              rx="1"
              fill="rgba(255,255,255,0.1)"
            />

            {/* sidebar section labels */}
            <rect
              x="312"
              y="115"
              width="56"
              height="5"
              rx="1"
              fill="rgba(255,255,255,0.18)"
            />
            <rect
              x="312"
              y="126"
              width="44"
              height="4"
              rx="1"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="312"
              y="134"
              width="52"
              height="4"
              rx="1"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="312"
              y="142"
              width="36"
              height="4"
              rx="1"
              fill="rgba(255,255,255,0.1)"
            />

            {/* sidebar skills dots */}
            <rect
              x="312"
              y="162"
              width="56"
              height="5"
              rx="1"
              fill="rgba(255,255,255,0.18)"
            />
            <circle cx="318" cy="178" r="3" fill="#3b82f6" />
            <circle cx="328" cy="178" r="3" fill="#3b82f6" />
            <circle cx="338" cy="178" r="3" fill="#3b82f6" />
            <circle cx="348" cy="178" r="3" fill="#3b82f6" />
            <circle cx="358" cy="178" r="3" fill="rgba(255,255,255,0.15)" />

            <circle cx="318" cy="191" r="3" fill="#3b82f6" />
            <circle cx="328" cy="191" r="3" fill="#3b82f6" />
            <circle cx="338" cy="191" r="3" fill="#3b82f6" />
            <circle cx="348" cy="191" r="3" fill="rgba(255,255,255,0.15)" />
            <circle cx="358" cy="191" r="3" fill="rgba(255,255,255,0.15)" />

            {/* sidebar callout lines */}
            <line
              x1="260"
              y1="53"
              x2="300"
              y2="76"
              stroke="#334155"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <line
              x1="260"
              y1="134"
              x2="300"
              y2="130"
              stroke="#334155"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <line
              x1="260"
              y1="259"
              x2="300"
              y2="174"
              stroke="#334155"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            {/* callout dots */}
            <circle cx="260" cy="53" r="3" fill="#f59e0b" />
            <circle cx="260" cy="134" r="3" fill="#f59e0b" />
            <circle cx="212" cy="259" r="3" fill="#f59e0b" />

            {/* sidebar labels */}
            <text
              x="316"
              y="73"
              fill="#e0f2fe"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
            >
              Photo
            </text>
            <text
              x="316"
              y="127"
              fill="#e0f2fe"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
            >
              Header
            </text>
            <text
              x="316"
              y="163"
              fill="#e0f2fe"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
            >
              Skills
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
