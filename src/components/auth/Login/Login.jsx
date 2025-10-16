import React from "react";
import styles from "./Login.module.css";
import LeftSection from "./leftSection/leftSection";
import LoginForm from "./loginForm/loginForm";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentCard}>
        <LeftSection />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
