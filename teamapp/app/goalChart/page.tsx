'use client'
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Ensure that chart.js is correctly imported

export default function GoalChart() {
  const [chartData, setChartData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('teamapp/app/goalChart/goalChartLogic.js');
      const data = await response.json();
      setChartData(data);
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ width: '700px', height: '700px' }}>
      <h1>Bar Chart</h1>
      {chartData ? <Bar data={chartData} /> : <p>Loading chart...</p>}
    </div>
  );
}
