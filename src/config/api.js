// API Configuration
// For Create React App
export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// API Endpoints
export const AUTH_ENDPOINTS = {
  GOOGLE_AUTH: `${API_URL}/auth/google`,
  GOOGLE_CALLBACK: `${API_URL}/auth/google/callback`,
  LOGOUT: `${API_URL}/auth/logout`,
  CURRENT_USER: `${API_URL}/auth/current`,
  AUTH_STATUS: `${API_URL}/auth/status`,
};

export default API_URL;
