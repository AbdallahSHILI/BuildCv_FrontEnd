import React, { useState } from "react";
import styles from "./Login.module.css";
import RocketMan from "../../../assets/rocket.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { name, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentCard}>
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

        <div className={styles.rightSection}>
          <div className={styles.loginCard}>
            <div className={styles.header}>
              <h2 className={styles.loginTitle}>Log in</h2>
              <p className={styles.signupText}>
                Don't have an account?{" "}
                <span className={styles.signupLink}>Sign up</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Name</label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                  />
                  {name && (
                    <button
                      type="button"
                      onClick={() => setName("")}
                      className={styles.clearBtn}
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Password</label>
                <div className={styles.inputWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={styles.eyeBtn}
                  >
                    👁
                  </button>
                </div>
              </div>

              <button type="submit" className={styles.loginBtn}>
                Log in
              </button>
            </form>

            <div className={styles.divider}>
              <span className={styles.dividerText}>or continue with</span>
            </div>

            <div className={styles.socialButtons}>
              <button className={styles.socialBtn}>
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className={styles.socialIcon}
                />
              </button>
              <button className={styles.socialBtn}>
                <svg
                  className={styles.socialIcon}
                  viewBox="0 0 24 24"
                  fill="#1877F2"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
