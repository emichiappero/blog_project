import React from "react";
import { useAuth } from "../hooks/useAuth";

const LoginButton = () => {
  const { login, logout, user } = useAuth();

  return (
    <div className="my-4">
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={logout} className="btn btn-danger btn-sm">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={login} className="btn btn-primary btn-sm">
          Login with Google
        </button>
      )}
    </div>
  );
};

export default LoginButton;
