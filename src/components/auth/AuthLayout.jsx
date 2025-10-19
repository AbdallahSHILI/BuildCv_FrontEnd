import React from "react";
import styles from "./AuthLayout.module.css";
import LeftSection from "./leftSection/leftSection";

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentCard}>
        <LeftSection />
        <div className={styles.rightSection}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
