import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ data }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    // Ensure that the existing chart instance is destroyed before creating a new one
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: data.person1.name,
            data: data.person1.scores,
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1,
          },
          {
            label: data.person2.name,
            data: data.person2.scores,
            fill: false,
            borderColor: "rgba(255, 99, 132, 1)",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy the chart when component unmounts or re-renders
    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
