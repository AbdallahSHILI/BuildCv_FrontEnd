import styles from "../Landing.module.css";

const stats = [
  ["5M+", "Users worldwide"],
  ["50+", "Resume templates"],
  ["4.9★", "Average rating"],
  ["100%", "Free to start"],
];

export default function StatsStrip() {
  return (
    <div className={styles.statsStrip}>
      {stats.map(([val, label]) => (
        <div key={label} className={styles.statItem}>
          <span className={styles.statVal}>{val}</span>
          <span className={styles.statLabel}>{label}</span>
        </div>
      ))}
    </div>
  );
}
