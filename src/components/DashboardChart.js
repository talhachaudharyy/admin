import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';
import { PointElement, Chart } from 'chart.js';
Chart.register(PointElement);
Chart.register(Chart);

const ChartComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://3.111.35.219/api/admin/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setUserData(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const lineChartData = {
    labels: ['Active Users', 'Total Users', 'Buyers', 'Sellers', 'Products'],
    datasets: [
      {
        label: 'Count',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: userData ? [userData.activeUsers, userData.totalUsers, userData.buyers, userData.sellers, userData.products] : []
      }
    ]
  };

  const barChartData = {
    labels: ['Active Users', 'Total Users', 'Buyers', 'Sellers', 'Products'],
    datasets: [
      {
        label: 'Count',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: userData ? [userData.activeUsers, userData.totalUsers, userData.buyers, userData.sellers, userData.products] : []
      }
    ]
  };

  return (
    <div>
      <h2>User Data</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {userData && (
          <>
            <div style={{ width: '45%' }}>
              <h3>Line Chart</h3>
              <Line data={lineChartData} />
            </div>
            <div style={{ width: '45%' }}>
              <h3>Bar Chart</h3>
              <Bar data={barChartData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChartComponent;
