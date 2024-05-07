import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DashboardChart = () => {
  // Data for pie chart
  const pieData = {
    labels: ['Seller A', 'Seller B', 'Seller C'],
    datasets: [
      {
        data: [300, 450, 200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Data for histogram chart
  const histogramData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.7)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  return (
    <div className="p-8 bg-white rounded-xl">
      <h2 className="text-xl font-semibold mb-4 ">Total Seller</h2>

      <div className="flex flex-wrap">
        {/* Pie Chart */}
        <div className="w-full sm:w-1/2 mb-4">
          <div className="w-72 h-72">
            <Pie data={pieData} />
          </div>

        </div>

        {/* Histogram Chart */}
        <div className="w-full sm:w-1/2 mb-4">
          <div className="w-full">
            <Bar data={histogramData} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
