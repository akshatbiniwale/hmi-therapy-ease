import React from "react";
import { Line } from "react-chartjs-2";

export default function MessageSection({ messageCount, messages, healthScoreData }) {

    const chartData = {
    labels: healthScoreData.labels,
    datasets: [
      {
        label: "Patient Health Score",
        data: healthScoreData.data,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Left Side - Message Section */}
      <div style={{ flex: 1, paddingRight: "20px" }}>
        <div style={{ marginBottom: "10px", textAlign: "center" }}>
          <h3>Messages</h3>
          <p>Message Count: {messageCount}</p>
        </div>
        {/* Render messages */}
        <div>
          {messages.map((message, index) => (
            <div key={index} style={{ marginBottom: "5px" }}>
              {message}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Line Chart */}
      <div style={{ flex: 1 }}>
        <div style={{ textAlign: "center" }}>
          <h3>Patient Health Score</h3>
        </div>
        <Line data={chartData} />
      </div>
    </div>
  )
}



