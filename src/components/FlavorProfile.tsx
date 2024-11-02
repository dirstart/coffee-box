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

const FlavorProfile: React.FC<FlavorProfileProps> = ({ 
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
        backgroundColor: 'rgba(64, 128, 255, 0.2)',
        borderColor: '#4080ff',
        borderWidth: 2,
        pointBackgroundColor: '#4080ff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4080ff'
      }
    ]
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: '#e5e7eb'
        },
        grid: {
          color: '#e5e7eb'
        },
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: {
          stepSize: 1,
          display: false
        },
        pointLabels: {
          font: {
            size: 12,
            family: "system-ui, -apple-system, sans-serif"
          },
          color: '#4b5563'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 8,
        boxPadding: 4,
        usePointStyle: true,
        callbacks: {
          title: () => '',
          label: (context: any) => `${context.label}: ${context.raw}/5`
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="aspect-square w-full max-w-[280px] mx-auto">
        <Radar data={chartData} options={options} />
      </div>
      {notes.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-medium">风味描述：</span>
            <div className="flex flex-wrap gap-2">
              {notes.map((note, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlavorProfile;
