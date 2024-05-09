import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <>
      <Sidebar />
      <div className="max-w-3xl mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-customOrange bg-opacity-30 text-white p-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Profile</h2>
        </div>
        <div className="p-6">
          {userData ? (
            <>
              <div className="flex items-center justify-center mb-6">
                <img src={userData.profileImage} alt="Profile" className="w-32 h-32 rounded-full" />
              </div>
              <hr className="border-t border-gray-200 mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">First Name</label>
                  <p className="text-gray-800 text-sm">{userData.fname}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">Last Name</label>
                  <p className="text-gray-800 text-sm">{userData.lname}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">User Type</label>
                  <p className="text-gray-800 text-sm">{userData.userType}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
                  <p className="text-gray-800 text-sm">{userData.email}</p>
                </div>
                
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600">User data not available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
