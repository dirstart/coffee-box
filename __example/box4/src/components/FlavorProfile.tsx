import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface FlavorProfileProps {
  data: number[];
  labels: string[];
  title?: string;
  notes?: string[];
}

export const FlavorProfile: React.FC<FlavorProfileProps> = ({ 
  data, 
  labels, 
  title = "产品风味表",
  notes = []
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }
    ]
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: '#e2e8f0'
        },
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: {
          stepSize: 1,
          font: {
            size: 12
          }
        },
        pointLabels: {
          font: {
            size: 14,
            family: "'Noto Sans SC', sans-serif"
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">{title}</h2>
      <div className="aspect-square">
        <Radar data={chartData} options={options} />
      </div>
      {notes.length > 0 && (
        <div className="mt-4 text-center text-gray-600">
          <p>风味：{notes.join('、')}</p>
        </div>
      )}
    </div>
  );
};