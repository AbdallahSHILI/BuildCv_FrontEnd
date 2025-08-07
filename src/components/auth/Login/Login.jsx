import React from "react";
import styles from "./Login.module.css";
import RocketMan from "../../../assets/rocket.png";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>
          Be <br /> limitless
        </h1>
        <img src={RocketMan} alt="RocketMan" className={styles.rocket} />
      </div>
      <div className={styles.right}>
        <form className={styles.form}>
          <div className={styles.topText}>
            <span className={styles.loginTitle}>Log in</span>
            <span className={styles.signupPrompt}>
              Don't have an account? <a href="#">Sign up</a>
            </span>
          </div>

          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>

          <label>
            Password
            <div className={styles.passwordWrapper}>
              <input type="password" placeholder="Enter password" />
              <span className={styles.eyeIcon}>👁️</span>
            </div>
          </label>

          <button className={styles.loginButton}>Log in</button>

          <div className={styles.divider}>or continue with</div>

          <div className={styles.socials}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
