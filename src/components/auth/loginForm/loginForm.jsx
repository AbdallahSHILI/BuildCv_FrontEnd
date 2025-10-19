import React, { useState } from "react";
import styles from "../AuthLayout.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password });
  };

  return (
    <div className={styles.formCard}>
      <div className={styles.header}>
        <h2 className={styles.formTitle}>Login</h2>
        <p className={styles.linkText}>
          New user? <span className={styles.link}>Sign up</span>
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              className={styles.input}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {email && (
              <button
                type="button"
                className={styles.clearBtn}
                onClick={() => setEmail("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <div className={styles.inputWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.input}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className={styles.eyeBtn}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Login
        </button>
      </form>

      <div className={styles.divider}>
        <span className={styles.dividerText}>Or continue with</span>
      </div>

      <div className={styles.socialButtons}>
        <button className={styles.socialBtn}>
          <img
            src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
            alt="Google"
            className={styles.socialIcon}
          />
        </button>
        <button className={styles.socialBtn}>
          <img
            src="https://cdn.cdnlogo.com/logos/f/84/facebook.svg"
            alt="Facebook"
            className={styles.socialIcon}
          />
        </button>
        <button className={styles.socialBtn}>
          <img
            src="https://cdn.cdnlogo.com/logos/a/30/apple.svg"
            alt="Apple"
            className={styles.socialIcon}
          />
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
