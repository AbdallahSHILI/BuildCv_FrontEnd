import { useNavigate } from "react-router-dom";
import LandingNavbar from "../../components/navbar/landingNavbar/LandingNavbar"; // adjust path to match your project structure
import styles from "./about.module.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <LandingNavbar />

      <main className={styles.main}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <span className={styles.eyebrow}>Sheet A-01 — Origin story</span>
              <h1>
                Why we built <span>BuildCV</span>
              </h1>
              <p>
                Writing a resume shouldn't feel like assembling furniture
                without instructions. Most people still fight with Word margins,
                font sizes, and broken layouts. BuildCV is a free, no‑nonsense
                resume builder — you bring the content, we handle the structure,
                spacing, and design.
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
                <path
                  d="M32,20 H40 M40,12 V20"
                  stroke="#93c5fd"
                  strokeWidth="1"
                />
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
                <rect
                  x="58"
                  y="128"
                  width="60"
                  height="6"
                  rx="1"
                  fill="#f59e0b"
                />
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
                <rect
                  x="58"
                  y="238"
                  width="50"
                  height="6"
                  rx="1"
                  fill="#f59e0b"
                />
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
                  y1="353"
                  x2="40"
                  y2="363"
                  stroke="#f59e0b"
                  strokeWidth="1"
                />
                <line
                  x1="260"
                  y1="353"
                  x2="260"
                  y2="363"
                  stroke="#f59e0b"
                  strokeWidth="1"
                />
                <text
                  x="150"
                  y="380"
                  textAnchor="middle"
                  fill="#fcd34d"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="11"
                >
                  8.5"
                </text>

                {/* vertical dimension */}
                <line
                  x1="22"
                  y1="20"
                  x2="22"
                  y2="340"
                  stroke="#f59e0b"
                  strokeWidth="1"
                />
                <line
                  x1="17"
                  y1="20"
                  x2="27"
                  y2="20"
                  stroke="#f59e0b"
                  strokeWidth="1"
                />
                <line
                  x1="17"
                  y1="340"
                  x2="27"
                  y2="340"
                  stroke="#f59e0b"
                  strokeWidth="1"
                />
                <text
                  x="-180"
                  y="14"
                  transform="rotate(-90)"
                  textAnchor="middle"
                  fill="#fcd34d"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="11"
                >
                  11"
                </text>

                {/* annotations */}
                <line
                  x1="260"
                  y1="48"
                  x2="310"
                  y2="48"
                  stroke="#93c5fd"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <circle cx="260" cy="48" r="3" fill="#f59e0b" />
                <text
                  x="316"
                  y="52"
                  fill="#e0f2fe"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="11"
                >
                  Header
                </text>

                <line
                  x1="260"
                  y1="150"
                  x2="310"
                  y2="150"
                  stroke="#93c5fd"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <circle cx="260" cy="150" r="3" fill="#f59e0b" />
                <text
                  x="316"
                  y="154"
                  fill="#e0f2fe"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="11"
                >
                  Experience
                </text>

                <line
                  x1="212"
                  y1="259"
                  x2="310"
                  y2="259"
                  stroke="#93c5fd"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <circle cx="212" cy="259" r="3" fill="#f59e0b" />
                <text
                  x="316"
                  y="263"
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

        {/* ── Team ── */}
        <section className={`${styles.section} ${styles.team}`}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Sheet A-02 — The team</span>
            <h2>Built by a small, independent team</h2>
            <p>
              We're not backed by investors chasing growth at all costs. We're a
              small, quality-focused team building the resume tool we always
              wished existed — for everyone, everywhere.
            </p>
          </div>

          <div className={styles.calloutGrid}>
            <div className={styles.callout}>
              <span className={styles.calloutTag}>01 — Access</span>
              <h3>Your first resume, free forever</h3>
              <p>
                Full access to every template and design feature, no trial
                period and no countdown.
              </p>
            </div>
            <div className={styles.callout}>
              <span className={styles.calloutTag}>02 — Honesty</span>
              <h3>No paywalls, no watermarks</h3>
              <p>
                What you design is what you download. Nothing stamped on top,
                nothing locked behind a popup.
              </p>
            </div>
            <div className={styles.callout}>
              <span className={styles.calloutTag}>03 — Pricing</span>
              <h3>Pay only if you need more</h3>
              <p>
                Managing multiple versions or unlocking AI writing tools is
                optional, never required.
              </p>
            </div>
          </div>
        </section>

        {/* ── Difference ── */}
        <section className={`${styles.section} ${styles.different}`}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Sheet A-03 — The difference</span>
            <h2>Purpose-built for one job: your resume</h2>
            <p>
              Unlike general design tools, BuildCV isn't trying to be a
              presentation app, a poster maker, and a resume builder all at
              once. Every part of it is built around a single document.
            </p>
          </div>

          <div className={styles.checkGrid}>
            <div className={styles.checkItem}>
              <span className={styles.checkMark}>✓</span>
              <div>
                <h3>Structured guidance</h3>
                <p>
                  We prompt you for the right sections in the right order, so
                  you never start from a blank page.
                </p>
              </div>
            </div>
            <div className={styles.checkItem}>
              <span className={styles.checkMark}>✓</span>
              <div>
                <h3>Recruiter-tested templates</h3>
                <p>
                  Layouts follow conventions hiring managers actually expect,
                  not just what looks nice.
                </p>
              </div>
            </div>
            <div className={styles.checkItem}>
              <span className={styles.checkMark}>✓</span>
              <div>
                <h3>Full design control</h3>
                <p>
                  Adjust colors, spacing, and fonts without ever breaking the
                  underlying layout.
                </p>
              </div>
            </div>
            <div className={styles.checkItem}>
              <span className={styles.checkMark}>✓</span>
              <div>
                <h3>No design skills required</h3>
                <p>
                  The structure does the heavy lifting, so you can focus on what
                  you actually want to say.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className={`${styles.section} ${styles.testimonials}`}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Sheet A-04 — Feedback</span>
            <h2>What job seekers are saying</h2>
            <div className={styles.stars}>★★★★★</div>
          </div>

          <div className={styles.quoteGrid}>
            <div className={styles.quoteCard}>
              <p>
                "I had a finished, good-looking resume in under twenty minutes.
                The hardest part was picking which template to use."
              </p>
              <span className={styles.quoteAuthor}>
                — Amel B., Marketing Coordinator
              </span>
            </div>
            <div className={styles.quoteCard}>
              <p>
                "No watermark, no surprise paywall when I went to download. That
                alone made it stand out from everything else I tried."
              </p>
              <span className={styles.quoteAuthor}>
                — Karim T., Software Engineer
              </span>
            </div>
            <div className={styles.quoteCard}>
              <p>
                "The layout suggestions actually matched what my recruiter
                friends told me to do. Felt like having a second pair of eyes."
              </p>
              <span className={styles.quoteAuthor}>
                — Lina M., Recent Graduate
              </span>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={`${styles.section} ${styles.cta}`}>
          <h2>Ready to build yours?</h2>
          <p>Create a polished resume in minutes. No credit card required.</p>
          <button
            className={styles.ctaButton}
            onClick={() => navigate("/signup")}
          >
            Start building — it's free
          </button>
          <div className={styles.ctaNote}>
            FREE MEANS FREE. NO TRICKS, NO TRAPS.
          </div>
        </section>

        {/* ── Partner ── */}
        <section className={`${styles.section} ${styles.partner}`}>
          <div>
            <span className={styles.eyebrow}>Sheet A-05 — Collaborations</span>
            <h2>Interested in partnering?</h2>
            <p>
              Are you a career coach, job board, or platform supporting job
              seekers? We're open to meaningful collaborations that help more
              people put their best resume forward.
            </p>
          </div>
          <div className={styles.partnerActions}>
            <a href="mailto:hello@buildcv.com">→ hello@buildcv.com</a>
            <button onClick={() => navigate("/pricing")}>→ View pricing</button>
            <button onClick={() => navigate("/templates")}>
              → Browse templates
            </button>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <h3>BuildCV</h3>
            <p>
              A small, independent team building a free, no-nonsense resume
              maker. Our mission: help job seekers put their best foot forward,
              without the busywork.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Product</h4>
            <ul>
              <li>
                <button onClick={() => navigate("/templates")}>
                  Resume Templates
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/pricing")}>Pricing</button>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul>
              <li>
                <button onClick={() => navigate("/about")}>About</button>
              </li>
              <li>
                <button onClick={() => navigate("/login")}>Login</button>
              </li>
              <li>
                <button onClick={() => navigate("/signup")}>Start now</button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © 2026 BuildCV. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
