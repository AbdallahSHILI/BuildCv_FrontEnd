import React from "react";
import styles from "../Login.module.css";
import RocketMan from "../../../../assets/rocket.png";

const LeftSection = () => {
  return (
    <div className={styles.leftSection}>
      <h1 className={styles.title}>
        Be
        <br />
        limitless
      </h1>
      <div className={styles.rocketContainer}>
        <img src={RocketMan} alt="Rocket" className={styles.rocket} />
      </div>
    </div>
  );
};

export default LeftSection;
