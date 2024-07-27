import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <GoogleOAuthProvider clientId="796923825071-otjft52mqijp2djjrm6jrbud03qr3di1.apps.googleusercontent.com">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/usuarios" element={<UserList />} />
            <Route
              path="/users"
              element={<ProtectedRoute component={UserList} />}
            />
          </Routes>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
