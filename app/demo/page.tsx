import { PieChart } from '@/components/PieChart';
import { Table } from '@/components/Table';

export default function Demo() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex">
        <PieChart />
        <Table />
      </div>
    </main>
  );
}
