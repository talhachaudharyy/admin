import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaComments, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import companylogo from '../../src/images/logotransparent.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("chats");
    localStorage.removeItem("chatID");
    localStorage.removeItem("chatsId");
    

    // Navigate to login page
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar toggle button for mobile and tablet */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-300 p-2 rounded-full focus:outline-none"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`lg:w-64 lg:flex-none fixed h-screen left-0 top-0 bg-customYellow text-gray-300 flex flex-col z-10 ${isOpen ? '' : 'hidden lg:block'}`}>
        <div className="p-4">
          <img src={companylogo} alt="Logo" className="w-28 mb-0" />
          <h5 className="text-xs font-medium text-gray-800">Medcare Admin Dashboard</h5>
        </div>
        <div>
          {/* Sidebar Options */}
          <SidebarOption to="/dashboard" icon={<FaHome />} text="Dashboard" isActive={location.pathname === '/dashboard'} />
          <SidebarOption to="/chat" icon={<FaComments />} text="Chat" isActive={location.pathname === '/chat'} />
          <SidebarOption to="/profile" icon={<FaUser />} text="Profile" isActive={location.pathname === '/profile'} />
          <div className="flex-grow" />

          {/* Logout Button */}
          <button onClick={handleLogout} className="flex font-semibold items-center py-3 px-4 text-gray-600  hover:text-slate-800 bg-transparent rounded-lg mx-3">
            <span className="mr-4"><FaSignOutAlt /></span>
            <span>Logout</span>
          </button>
        </div>
        <div className="p-4 mt-auto">
          <p className="text-xs font-bold text-gray-500">Medcare Pharrmaaniciinl Admin Dashboard</p>
          <p className="text-xs text-gray-500">&copy; 2024 All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

const SidebarOption = ({ to, icon, text, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex font-semibold items-center py-3 px-4 text-gray-600  hover:text-slate-800 ${isActive ? 'bg-customOrange bg-opacity-30 rounded-lg mx-3 text-slate-800' : ''}`}
    >
      <span className="mr-4">{icon}</span>
      <span>{text}</span>
    </Link>
  );
};

export default Sidebar;
