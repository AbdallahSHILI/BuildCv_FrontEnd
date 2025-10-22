import React from "react";
import { motion } from "framer-motion";
import styles from "./AuthLayout.module.css";
import LeftSection from "./leftSection/leftSection";

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentCard}>
        <LeftSection />
        <motion.div
          className={styles.rightSection}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
