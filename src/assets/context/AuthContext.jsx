import React, { createContext, useState, useEffect, useContext } from "react";
import { AUTH_ENDPOINTS } from "../../config/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch(AUTH_ENDPOINTS.AUTH_STATUS, {
        credentials: "include", // Important for sending cookies
      });
      const data = await response.json();

      if (data.authenticated && data.user) {
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login = (email, password) => {
    // Implement traditional login if needed
    console.log("Traditional login:", { email, password });
  };

  const loginWithGoogle = () => {
    // Redirect to Google OAuth
    window.location.href = AUTH_ENDPOINTS.GOOGLE_AUTH;
  };

  const logout = async () => {
    try {
      await fetch(AUTH_ENDPOINTS.LOGOUT, {
        credentials: "include",
      });
      setUser(null);
      setIsAuthenticated(false);
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    loginWithGoogle,
    logout,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
