import React from 'react';
import Chart from 'react-apexcharts';

const DashboardChart2 = () => {
  // Data for line chart
  const lineOptions = {
    chart: {
      id: 'line-chart',
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    }
  };

  const lineSeries = [{
    name: 'Sales',
    data: [65, 59, 80, 81, 56, 55]
  }];

  // Data for circular chart
  const circularOptions = {
    chart: {
      id: 'circular-chart',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            formatter: function (val) {
              return val + '%';
            }
          }
        }
      }
    },
    labels: ['Progress']
  };

  const circularSeries = [75];

  return (
    <div className="p-8 bg-white rounded-xl">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Total Buyer</h2>

      <div className="flex flex-wrap">
        {/* Line Chart */}
        <div className="w-full sm:w-1/2 mb-4">
          <div className="w-full">
            {lineSeries[0].data.length > 0 && <Chart options={lineOptions} series={lineSeries} type="line" height={300} />}
          </div>
        </div>

        {/* Circular Chart */}
        <div className="w-full sm:w-1/2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Circular Chart</h3>
          <div className="w-full">
            {circularSeries.length > 0 && <Chart options={circularOptions} series={circularSeries} type="radialBar" height={300} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardChart2;
