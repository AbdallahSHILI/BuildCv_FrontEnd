import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import styles from "../Landing.module.css";

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

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [testiRef, testiVisible] = useInView();
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setTIdx((i) => (i + 1) % testimonials.length),
      3500,
    );
    return () => clearInterval(t);
  }, []);

  return (
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
  );
}
