import { useState, useEffect, useRef } from "react";
import styles from "./Landing.module.css";

/* ─── Testimonials data ─── */
const testimonials = [
  {
    name: "Sarah M.",
    role: "Software Engineer",
    text: "Built my resume in under 10 minutes. Landed 3 interviews the same week I sent it out.",
    stars: 5,
  },
  {
    name: "James K.",
    role: "Product Designer",
    text: "The templates are clean and actually ATS-friendly. No watermarks, no paywalls. Incredible.",
    stars: 5,
  },
  {
    name: "Amira T.",
    role: "Marketing Lead",
    text: "I've tried every resume builder out there. BuildCV is the only one that doesn't feel like a scam.",
    stars: 5,
  },
  {
    name: "Luca R.",
    role: "Data Analyst",
    text: "Exported a perfect PDF in one click. Exactly what I needed before my deadline.",
    stars: 5,
  },
  {
    name: "Priya S.",
    role: "UX Researcher",
    text: "The AI suggestions are shockingly good. Saved me hours of rewriting.",
    stars: 5,
  },
  {
    name: "Omar F.",
    role: "Finance Analyst",
    text: "Clean, fast, free. Wish I found this two years ago when I was job hunting.",
    stars: 5,
  },
];

/* ─── Steps data ─── */
const steps = [
  {
    number: "01",
    title: "Choose a template",
    desc: "Pick from 50+ professionally designed templates — or start from a blank canvas and make it yours.",
    icon: "▤",
  },
  {
    number: "02",
    title: "Add your experience",
    desc: "Fill in your details with our guided editor. Import an existing resume to get started even faster.",
    icon: "✎",
  },
  {
    number: "03",
    title: "Customize the design",
    desc: "Adjust fonts, colors, spacing, and layout until your resume feels exactly like you.",
    icon: "◈",
  },
  {
    number: "04",
    title: "Download unlimited PDFs",
    desc: "Your resume auto-saves. Update and re-download anytime — no limits, no fees.",
    icon: "↓",
  },
];

/* ─── Template cards ─── */
const templates = [
  { name: "Classic", accent: "#2563eb", lines: [70, 50, 85, 40, 60] },
  { name: "Modern", accent: "#0ea5e9", lines: [60, 80, 45, 70, 55] },
  { name: "Minimal", accent: "#64748b", lines: [90, 40, 75, 50, 65] },
  { name: "Bold", accent: "#f59e0b", lines: [55, 75, 40, 80, 50] },
  { name: "Executive", accent: "#10b981", lines: [80, 55, 70, 45, 75] },
  { name: "Creative", accent: "#ec4899", lines: [45, 85, 55, 70, 40] },
];

/* ─── Features ─── */
const features = [
  {
    icon: "∞",
    title: "First Resume Free Forever",
    desc: "No trial. No credit card. No auto-upgrade. Your first resume is yours for life.",
  },
  {
    icon: "◎",
    title: "No Watermarks Ever",
    desc: "Your resume is your space. We never slap our logo on your work.",
  },
  {
    icon: "↓",
    title: "Unlimited PDF Downloads",
    desc: "Download as many times as you need. Edit, refresh, repeat.",
  },
  {
    icon: "▤",
    title: "50+ Premium Templates",
    desc: "ATS-optimized, recruiter-approved, fully customizable.",
  },
  {
    icon: "⬆",
    title: "Import Any Resume",
    desc: "Upload a PDF or DOCX and we'll extract your content instantly.",
  },
  {
    icon: "◉",
    title: "Privacy First",
    desc: "GDPR-compliant. We never sell your data. Delete everything anytime.",
  },
];

/* ─── useInView hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── Mini resume SVG card ─── */
function TemplateCard({ name, accent, lines }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.templateCard} ${visible ? styles.fadeUp : ""}`}
    >
      <div className={styles.templatePreview}>
        <div className={styles.templateHeader} style={{ background: accent }} />
        <div className={styles.templateBody}>
          <div
            className={styles.templateAvatar}
            style={{ background: accent + "33" }}
          />
          <div className={styles.templateLines}>
            {lines.map((w, i) => (
              <div
                key={i}
                className={styles.templateLine}
                style={{
                  width: `${w}%`,
                  background: i === 0 ? accent : undefined,
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.templateOverlay}>
          <span>Use Template</span>
        </div>
      </div>
      <p className={styles.templateName}>{name}</p>
    </div>
  );
}

/* ─── Star rating ─── */
function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

/* ─── Main Component ─── */
const Landing = () => {
  const [heroRef, heroVisible] = useInView(0.05);
  const [stepsRef, stepsVisible] = useInView();
  const [featRef, featVisible] = useInView();
  const [testiRef, testiVisible] = useInView();
  const [ctaRef, ctaVisible] = useInView();
  const [tIdx, setTIdx] = useState(0);

  /* auto-scroll testimonials */
  useEffect(() => {
    const t = setInterval(
      () => setTIdx((i) => (i + 1) % testimonials.length),
      3500,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className={`${styles.hero} ${heroVisible ? styles.heroVisible : ""}`}
      >
        <div className={styles.heroBg}>
          <div className={styles.heroBlob1} />
          <div className={styles.heroBlob2} />
          <div className={styles.heroGrid} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>✨ 100% Free — No Credit Card</div>
          <h1 className={styles.heroTitle}>
            Build a Resume That
            <br />
            <span className={styles.heroAccent}>Gets You Hired</span>
          </h1>
          <p className={styles.heroSub}>
            Create a professional, ATS-ready resume in minutes.
            <br />
            No watermarks. No paywalls. No nonsense.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.ctaPrimary}>
              Get started for free →
            </button>
            <button className={styles.ctaSecondary}>See templates</button>
          </div>
          <div className={styles.heroTrust}>
            <div className={styles.heroAvatars}>
              {["#2563eb", "#0ea5e9", "#10b981", "#f59e0b", "#ec4899"].map(
                (c, i) => (
                  <div
                    key={i}
                    className={styles.heroAvatar}
                    style={{ background: c, marginLeft: i ? "-10px" : 0 }}
                  />
                ),
              )}
            </div>
            <span>
              Trusted by <strong>5M+</strong> job seekers worldwide
            </span>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.mockResume}>
            <div className={styles.mockHeader}>
              <div className={styles.mockAvatar} />
              <div className={styles.mockInfo}>
                <div className={styles.mockName} />
                <div className={styles.mockRole} />
              </div>
            </div>
            <div className={styles.mockSection}>
              <div className={styles.mockLabel} />
              <div className={styles.mockLine} style={{ width: "90%" }} />
              <div className={styles.mockLine} style={{ width: "75%" }} />
              <div className={styles.mockLine} style={{ width: "82%" }} />
            </div>
            <div className={styles.mockSection}>
              <div className={styles.mockLabel} />
              <div className={styles.mockLine} style={{ width: "70%" }} />
              <div className={styles.mockLine} style={{ width: "85%" }} />
            </div>
            <div className={styles.mockSkills}>
              {["React", "Design", "Python", "Leadership"].map((s) => (
                <span key={s} className={styles.mockSkill}>
                  {s}
                </span>
              ))}
            </div>
            <div className={styles.mockBadge}>✓ ATS Ready</div>
          </div>
          <div className={styles.floatCard1}>
            <span>📄</span> PDF exported!
          </div>
          <div className={styles.floatCard2}>
            <span>🎯</span> Interview in 2 days
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className={styles.statsStrip}>
        {[
          ["5M+", "Users worldwide"],
          ["50+", "Resume templates"],
          ["4.9★", "Average rating"],
          ["100%", "Free to start"],
        ].map(([val, label]) => (
          <div key={label} className={styles.statItem}>
            <span className={styles.statVal}>{val}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>

      {/* ── HOW IT WORKS ── */}
      <section
        ref={stepsRef}
        className={`${styles.section} ${stepsVisible ? styles.sectionVisible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>How it works</span>
          <h2 className={styles.sectionTitle}>Resume ready in 4 steps</h2>
          <p className={styles.sectionSub}>
            No learning curve. No confusion. Just results.
          </p>
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((s, i) => (
            <div
              key={s.number}
              className={styles.stepCard}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className={styles.stepNumber}>{s.number}</div>
              <div className={styles.stepIcon}>{s.icon}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEMPLATES ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Templates</span>
          <h2 className={styles.sectionTitle}>50+ designs, all free</h2>
          <p className={styles.sectionSub}>
            Pick one, make it yours. Every template is ATS-optimized.
          </p>
        </div>
        <div className={styles.templatesGrid}>
          {templates.map((t) => (
            <TemplateCard key={t.name} {...t} />
          ))}
        </div>
        <div className={styles.templatesCta}>
          <button className={styles.ctaPrimary}>Browse all templates →</button>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        ref={featRef}
        className={`${styles.section} ${featVisible ? styles.sectionVisible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>What's included</span>
          <h2 className={styles.sectionTitle}>Everything you need, free</h2>
          <p className={styles.sectionSub}>
            You won't find a more generous free plan anywhere.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className={styles.featureCard}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        ref={testiRef}
        className={`${styles.section} ${styles.sectionDark} ${testiVisible ? styles.sectionVisible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Testimonials</span>
          <h2 className={styles.sectionTitle}>Loved by millions</h2>
          <p className={styles.sectionSub}>
            Rated 4.9/5 across Trustpilot, Google, and Product Hunt.
          </p>
        </div>
        <div className={styles.testiTrack}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${styles.testiCard} ${i === tIdx ? styles.testiActive : ""}`}
              onClick={() => setTIdx(i)}
            >
              <Stars count={t.stars} />
              <p className={styles.testiText}>"{t.text}"</p>
              <div className={styles.testiAuthor}>
                <div
                  className={styles.testiAvatar}
                  style={{ background: `hsl(${i * 55}, 70%, 55%)` }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.testiDots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === tIdx ? styles.dotActive : ""}`}
              onClick={() => setTIdx(i)}
            />
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        ref={ctaRef}
        className={`${styles.ctaBanner} ${ctaVisible ? styles.ctaBannerVisible : ""}`}
      >
        <div className={styles.ctaBannerBg} />
        <h2 className={styles.ctaBannerTitle}>Your next job starts here.</h2>
        <p className={styles.ctaBannerSub}>
          Free forever. No credit card. No catch.
        </p>
        <button className={styles.ctaBannerBtn}>Build my resume now →</button>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.footerLogo}>BuildCV</span>
          <span>© 2025 BuildCV. All rights reserved.</span>
        </div>
        <div className={styles.footerLinks}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
