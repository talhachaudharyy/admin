import React, { useState, useEffect } from 'react';
import { BarChartOutlined } from '@ant-design/icons';
import Sidebar from '../components/Sidebar';
// import DashboardChart from '../components/DashboardChart';
// import DashboardChart2 from '../components/DashboardChart2';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token')
          console.log(token, "token: ");
        let headersList = {
          "Accept": "*/*",
          "Authorization": `Bearer ${token}`,
         }
        let response = await fetch("http://3.111.35.219/api/admin/users", { 
          method: "GET",
          headers: headersList
        });
        // const response = await fetch('http://3.111.35.219/api/admin/users', {
        //   headers: {
        //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjBhZWQ0N2M4Yzg1ODRmMTNjYjkwZGUiLCJuYW1lIjoiQ29ubmVjdCBTYWxlcyIsImlhdCI6MTcxNDk3MjcyMCwiZXhwIjoxNzE1ODM2NzIwfQ.qBAujAm33OdMEInBclvujHHONt3vWj-3-XEpgZRHN6o'
        //   }
          
        // });
        console.log('Request headers:', response.headers); // Log the response headers to verify the Authorization header

        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        
        <p className="text-gray-600 mb-8">Hi, Welcome to Medicare Admin Dashboard</p>
        
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
          {userData && (
            <>
              <div className="flex items-center bg-white cursor-pointer p-4 rounded-lg shadow-md">
                <div style={{ borderRadius: '50%', padding: '8px', backgroundColor: '#fa9002' }}>
                  <BarChartOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <div className="ml-3">
                  <p className="text-slate-700 font-bold text-lg">{userData.activeUsers}</p>
                  <p className="text-slate-700 text-sm">Active Users</p>
                </div>
              </div>
              <div className="flex items-center bg-white cursor-pointer p-4 rounded-lg shadow-md">
                <div style={{ borderRadius: '50%', padding: '8px', backgroundColor: '#fa9002' }}>
                  <BarChartOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <div className="ml-3">
                  <p className="text-slate-700 font-bold text-lg">{userData.totalUsers}</p>
                  <p className="text-slate-700 text-sm">Total Users</p>
                </div>
              </div>
              <div className="flex items-center bg-white cursor-pointer p-4 rounded-lg shadow-md">
                <div style={{ borderRadius: '50%', padding: '8px', backgroundColor: '#fa9002' }}>
                  <BarChartOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <div className="ml-3">
                  <p className="text-slate-700 font-bold text-lg">{userData.buyers}</p>
                  <p className="text-slate-700 text-sm">Buyers</p>
                </div>
              </div>
              <div className="flex items-center bg-white cursor-pointer p-4 rounded-lg shadow-md">
                <div style={{ borderRadius: '50%', padding: '8px', backgroundColor: '#fa9002' }}>
                  <BarChartOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <div className="ml-3">
                  <p className="text-slate-700 font-bold text-lg">{userData.sellers}</p>
                  <p className="text-slate-700 text-sm">Sellers</p>
                </div>
              </div>
              <div className="flex items-center bg-white cursor-pointer p-4 rounded-lg shadow-md">
              <div style={{ borderRadius: '50%', padding: '8px', backgroundColor: '#fa9002' }}>
                  <BarChartOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </div>
              <div className="ml-3">
                  <p className="text-slate-700 font-bold text-lg">{userData.products}</p>
                  <p className="text-slate-700 text-sm">Products</p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="mt-8">
          {/* <DashboardChart /> */}
        </div>
        <div className="mt-8">
          {/* <DashboardChart2 /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;