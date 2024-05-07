import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ChatPage from "../pages/ChatPage";
import Profile from '../pages/Profile';

const ProtectedRoutes = () => {
    const isAuthenticated = localStorage.getItem("token");
  
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  return (
    <div className="ml-64 p-4">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default ProtectedRoutes;
