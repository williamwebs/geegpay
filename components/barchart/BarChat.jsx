"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const BarChat = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        backgroundColor: "rgba(52, 202, 165, 0.1)",
        borderColor: "rgba(52, 202, 165, 0.1)",
        borderWidth: 1,
        data: [7, 2, 2, 28, 9, 45, 9, 24, 32, 3, 30, 25],
      },
    ],
  };

  const options = {
    animation: {
      duration: 1000,
    },
    elements: {
      bar: {
        borderRadius: 100,
        borderWidth: 0.7,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        border: { dash: [6, 6], display: true },
        grid: {
          display: true,
        },
        ticks: {
          padding: 15,
        },
      },
      x: {
        beginAtZero: true,
        border: { display: true },
        grid: {
          display: false,
        },
        ticks: {
          padding: 7,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Bar data={data} options={options} />;
};

export default BarChat;
