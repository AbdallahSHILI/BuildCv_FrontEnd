import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../assets/context/AuthContext";
import styles from "../AuthLayout.module.css";
import { googleIcon, facebookIcon } from "../../../assets/index";

const LoginForm = () => {
  const { login, loginWithGoogle, isAuthenticated, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Implement your traditional login logic here
      await login(email, password);
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", err);
    }
  };

  const handleGoogleSignup = () => {
    loginWithGoogle();
  };

  const handleFacebookSignup = () => {
    console.log("Facebook login clicked");
    // Implement Facebook login if needed
  };

  if (loading) {
    return (
      <div className={styles.formCard}>
        <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.header}>
        <h2 className={styles.formTitle}>Login</h2>
        <p className={styles.linkText}>
          New user?{" "}
          <Link to="/signup" className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>

      {error && (
        <div
          style={{
            color: "#dc3545",
            backgroundColor: "#f8d7da",
            border: "1px solid #f5c6cb",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}

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
              required
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
              required
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

export default LoginForm;
