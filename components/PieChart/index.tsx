'use client';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { DataCard } from '../DataCard';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Strategy 1', 'Strategy 2', 'Strategy 3', 'Strategy 4'],
  datasets: [
    {
      label: 'Lending Allocations',
      data: [50, 12.5, 12.5, 25],
      backgroundColor: ['#855CF8', '#E289F2', '#7879F1', '#B085FF'],
      borderWidth: 0,
    },
  ],
};

export const PieChart = () => {
  return (
    <DataCard>
      <div className="flex justify-between mb-4">
        <p>Lending Allocations</p>
        <p>$5000 USDC</p>
      </div>
      <Pie data={data} />
    </DataCard>
  );
};
