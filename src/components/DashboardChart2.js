import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import getUserData from '../modules/getUserData';

export default function DashboardChart2() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    getUserData(token)
      .then(data => {
        setUserData(data);
      });
  }, []);

  const pieChartData1 = [
    ['Category', 'Count'],
    ['Active Users', userData ? userData.activeUsers : 0],
    ['Total Users', userData ? userData.totalUsers : 0],
    ['Buyers', userData ? userData.buyers : 0],
    ['Sellers', userData ? userData.sellers : 0],
    ['Products', userData ? userData.products : 0]
  ];

  const pieChartData2 = [
    ['Category', 'Count'],
    ['Category A', 20],
    ['Category B', 30],
    ['Category C', 50]
  ];

  return (
    <div className='bg-gray-50 p-8 rounded-lg shadow-md'>
      <div className="flex flex-wrap justify-around">
        <div className="chart-container">
          <Chart
            width={'100%'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={pieChartData1}
            options={{
              title: 'User Data',
              legend: { position: 'right' },
              pieSliceText: 'label', // Show labels
              slices: {
                0: { offset: 0.1 }, // Adjust the offset if needed
              },
            }}
          />
          <h3 className='text-sm font-semibold mt-4'>Pie Chart 1</h3>
        </div>

        <div className="chart-container">
          <Chart
            width={'100%'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={pieChartData2}
            options={{
              title: 'Category Data',
              legend: { position: 'right' },
              pieSliceText: 'label', // Show labels
              slices: {
                0: { offset: 0.1 }, // Adjust the offset if needed
              },
            }}
          />
          <h3 className='text-sm font-semibold mt-4'>Pie Chart 2</h3>
        </div>
      </div>
    </div>
  );
}
