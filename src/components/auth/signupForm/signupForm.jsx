import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../AuthLayout.module.css";
import { AUTH_ENDPOINTS } from "../../../config/api";
import { googleIcon, facebookIcon } from "../../../assets/index";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup:", { name, email, password });
  };

  const handleGoogleSignup = () => {
    // Redirect to Google OAuth endpoint
    window.location.href = AUTH_ENDPOINTS.GOOGLE_AUTH;
  };

  const handleFacebookSignup = () => {
    // Add Facebook signup logic here
    console.log("Facebook signup clicked");
  };

  return (
    <div className={styles.formCard}>
      <div className={styles.header}>
        <h2 className={styles.formTitle}>Sign Up</h2>
        <p className={styles.linkText}>
          Already have an account?{" "}
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name && (
              <button
                type="button"
                className={styles.clearBtn}
                onClick={() => setName("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>

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
          Create Account
        </button>
      </form>

      <div className={styles.divider}>
        <span className={styles.dividerText}>Or continue with</span>
      </div>

      <div className={styles.socialButtons}>
        <button
          className={styles.socialBtn}
          onClick={handleGoogleSignup}
          type="button"
        >
          <img src={googleIcon} alt="Google" className={styles.socialIcon} />
        </button>

        <button
          className={styles.socialBtn}
          onClick={handleFacebookSignup}
          type="button"
        >
          <img
            src={facebookIcon}
            alt="Facebook"
            className={styles.socialIcon}
          />
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
