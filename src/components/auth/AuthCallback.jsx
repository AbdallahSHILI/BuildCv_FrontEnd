import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../assets/context/AuthContext";
import { motion } from "framer-motion";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { checkAuthStatus } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Wait a moment for the session to be established
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Check authentication status
        await checkAuthStatus();

        // Redirect to dashboard
        navigate("/dashboard", { replace: true });
      } catch (error) {
        console.error("Auth callback error:", error);
        navigate("/login", { replace: true });
      }
    };

    handleCallback();
  }, [navigate, checkAuthStatus]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          width: "50px",
          height: "50px",
          border: "4px solid rgba(255,255,255,0.3)",
          borderTop: "4px solid white",
          borderRadius: "50%",
          marginBottom: "1rem",
        }}
      />
      <h2 style={{ color: "white", marginBottom: "0.5rem" }}>
        Completing sign in...
      </h2>
      <p style={{ color: "rgba(255,255,255,0.8)" }}>
        Please wait while we redirect you.
      </p>
    </motion.div>
  );
};

export default AuthCallback;
