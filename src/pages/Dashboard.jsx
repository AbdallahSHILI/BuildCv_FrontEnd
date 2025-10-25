import React from "react";
import { useAuth } from "../assets/context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#f5f5f5",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <h1>Welcome to Dashboard!</h1>

        {user && (
          <div style={{ marginTop: "2rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              {user.profilePicture && (
                <img
                  src={user.profilePicture}
                  alt={user.displayName}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                  }}
                />
              )}
              <div>
                <h2 style={{ margin: "0" }}>{user.displayName}</h2>
                <p style={{ margin: "0.5rem 0 0 0", color: "#666" }}>
                  {user.email}
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            >
              <h3>User Information:</h3>
              <p>
                <strong>First Name:</strong> {user.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {user.lastName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Google ID:</strong> {user.googleId}
              </p>
            </div>

            <button
              onClick={logout}
              style={{
                marginTop: "2rem",
                padding: "0.75rem 2rem",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
