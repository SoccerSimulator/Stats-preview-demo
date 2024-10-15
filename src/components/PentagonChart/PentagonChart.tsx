import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import './PentagonChart.css'; // CSS for styling

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface PentagonChartProps {
  data: number[];
  labels: string[];
}

// Function to determine color based on the stat value
const getColor = (value: number): string => {
  const red = Math.floor((255 * (100 - value)) / 100);
  const green = Math.floor((255 * value) / 100);
  return `rgba(${red}, ${green}, 0, 1)`; // Solid color based on value
};

export const PentagonChart: React.FC<PentagonChartProps> = ({ data, labels }) => {
  // Calculate point colors for each value in the dataset
  const pointColors = data.map((value) => getColor(value));

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Player Averages',
        data,
        backgroundColor: 'rgba(0, 255, 0, 0.1)', // Same background for the radar
        borderColor: '#007bff', // Border color for the outline
        borderWidth: 2,
        pointBackgroundColor: pointColors, // Different color for each point
        pointBorderColor: pointColors, // Ensure the border of each point matches the background
        pointHoverBackgroundColor: pointColors, // Hover background color of points
        pointHoverBorderColor: pointColors, // Hover border color of points
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: true, // Enable ticks to show values around the chart
        },
        grid: {
          color: '#ddd', // Color of the grid lines
        },
        pointLabels: {
          color: '#000', // Color of the labels around the radar chart
          font: {
            size: 14, // Increase font size for better readability
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || '';
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3, // Line width for the chart
      },
    },
    maintainAspectRatio: false, // Ensure the aspect ratio is flexible
  };

  return (
    <div className="chart-container" style={{ width: '400px', height: '400px' }}>
      <Radar data={chartData} options={options} />
    </div>
  );
};