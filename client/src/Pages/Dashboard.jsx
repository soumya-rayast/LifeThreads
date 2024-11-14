import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Dashboard = () => {
  // Placeholder data
  const [totalBlogs, setTotalBlogs] = useState(120);
  const [totalSharedBlogs, setTotalSharedBlogs] = useState(45);
  const [weeklyBlogs, setWeeklyBlogs] = useState(10);
  const [monthlyBlogs, setMonthlyBlogs] = useState(40);
  const [yearlyBlogs, setYearlyBlogs] = useState(250);

  // Chart data configuration
  const chartData = {
    labels: ['Week', 'Month', 'Year'],
    datasets: [
      {
        label: 'Number of Blogs',
        data: [weeklyBlogs, monthlyBlogs, yearlyBlogs],
        backgroundColor: ['#3b82f6', '#6366f1', '#8b5cf6'], // Colors for each bar
        borderColor: ['#2563eb', '#4f46e5', '#7c3aed'],
        borderWidth: 1,
      },
      {
        label: 'Shared Blogs',
        data: [5, 15, 45], // Replace these values with dynamic data as needed
        backgroundColor: ['#f87171', '#fb923c', '#fbbf24'],
        borderColor: ['#ef4444', '#f97316', '#f59e0b'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Blog Posting Activity',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-6">Dashboard</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Total Blogs</h3>
            <p className="text-2xl font-bold text-blue-800">{totalBlogs}</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-600">Total Shared Blogs</h3>
            <p className="text-2xl font-bold text-green-800">{totalSharedBlogs}</p>
          </div>
        </div>

        <div className="w-full mt-8">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
