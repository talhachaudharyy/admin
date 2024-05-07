// LoginPage.js

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import handleLogin from "../modules/models"; 
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../images/logotransparent.png"; 

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLoginClick = async () => {
    try {
      const token = await handleLogin(email, password); // Call handleLogin function
      if (token) {
        if (onLogin) {
          onLogin(token);
          toast.success("Login successful");
        }
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("Login failed. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-8 text-center">
          <img src={CompanyLogo} alt="Company Logo" className="h-24 mx-auto mb-0" />
          <h2 className="text-2xl text-gray-800 font-semibold">Welcome Back!</h2>
          <p className="text-gray-600">Sign in to continue</p>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-customOrange"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border text-sm border-gray-300 rounded focus:outline-none focus:border-customOrange"
          />
        </div>
        <button
          onClick={handleLoginClick}
          className="w-full bg-customOrange bg-opacity-85 text-white py-2 rounded hover:bg-opacity-70 focus:outline-none"
        >
          Sign In
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
