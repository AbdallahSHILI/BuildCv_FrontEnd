import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../assets/context/AuthContext";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { checkAuthStatus } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Check authentication status
        await checkAuthStatus();

        // Signup and Login both stash an "authIntent" before the Google
        // redirect, since React state can't survive the round trip.
        // Pass it through as "authToastIntent" so Dashboard knows whether
        // to show a "Welcome" (signup) or "Welcome back" (login) toast.
        // Consume it now so a page refresh or a later visit doesn't
        // re-trigger it.
        const intent = sessionStorage.getItem("authIntent");
        sessionStorage.removeItem("authIntent");
        if (intent === "signup" || intent === "login") {
          sessionStorage.setItem("authToastIntent", intent);
        }

        // Redirect to dashboard
        navigate("/dashboard", { replace: true });
      } catch (error) {
        console.error("Auth callback error:", error);
        navigate("/login", { replace: true });
      }
    };

    handleCallback();
  }, [navigate, checkAuthStatus]);

  // No visible UI — this route just bridges the OAuth redirect back to the
  // dashboard, so it renders nothing while checkAuthStatus() resolves.
  return null;
};

export default AuthCallback;
