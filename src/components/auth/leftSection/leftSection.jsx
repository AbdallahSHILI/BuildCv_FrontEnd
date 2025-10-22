import React from "react";
import styles from "../AuthLayout.module.css";
import { rocket } from "../../../assets/index";

const LeftSection = () => {
  return (
    <div className={styles.leftSection}>
      <h1 className={styles.title}>
        Be
        <br />
        limitless
      </h1>
      <div className={styles.rocketContainer}>
        <img src={rocket} alt="Rocket" className={styles.rocket} />
      </div>
    </div>
  );
};

export default LeftSection;
