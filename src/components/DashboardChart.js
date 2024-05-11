import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import getUserData from '../modules/getUserData';

const ChartComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    getUserData(token)
      .then(data => {
        setUserData(data);
      });
  }, []);

  return (
    <div className='bg-gray-50 p-8 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>User Data Chart</h2>

      <div className="flex flex-wrap justify-around">
        {userData && (
          <>
            <div className="chart-container">
              <Chart
                width={'100%'}
                height={'100%'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Category', 'Count'],
                  ['Active Users', userData.activeUsers],
                  ['Total Users', userData.totalUsers],
                  ['Buyers', userData.buyers],
                  ['Sellers', userData.sellers],
                  ['Products', userData.products]
                ]}
                options={{
                  title: 'Monthly Data',
                  curveType: 'function',
                  legend: { position: 'bottom' }
                }}
              />
              <h3 className='text-sm font-semibold mt-4'>Line Chart</h3>
            </div>

            <div className="chart-container">
              <Chart
                width={'100%'}
                height={'100%'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Category', 'Count'],
                  ['Active Users', userData.activeUsers],
                  ['Total Users', userData.totalUsers],
                  ['Buyers', userData.buyers],
                  ['Sellers', userData.sellers],
                  ['Products', userData.products]
                ]}
                options={{
                  title: 'Monthly Data',
                  legend: { position: 'none' }
                }}
              />
              <h3 className='text-sm font-semibold mt-4'>Bar Chart</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChartComponent;
