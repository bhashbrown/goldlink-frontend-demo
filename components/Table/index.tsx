import { FC } from 'react';
import { DataCard } from '../DataCard';
import { Volatility, VolatilityChip } from '../Chip';

const data = [
  {
    strategy: 'Strategy 1',
    tvl: '$100,000',
    volatility: Volatility.LOW,
    collatoral: '$1,000',
    pnl: '$100',
  },
  {
    strategy: 'Strategy 2',
    tvl: '$12,500',
    volatility: Volatility.MEDIUM,
    collatoral: '$1,000',
    pnl: '-$100',
  },
  {
    strategy: 'Strategy 3',
    tvl: '$12,500',
    volatility: Volatility.MEDIUM,
    collatoral: '$1,000',
    pnl: '$100',
  },
  {
    strategy: 'Strategy 4',
    tvl: '$25,000',
    volatility: Volatility.HIGH,
    collatoral: '$1,000',
    pnl: '$100',
  },
];

export const Table: FC = () => {
  return (
    <DataCard>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Strategy</th>
            <th>TVL</th>
            <th>Volatility</th>
            <th>Collateral</th>
            <th>PNL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={`strategy-input-${index}`}>
              <td>{data.strategy}</td>
              <td>{data.tvl}</td>
              <td>
                <VolatilityChip volatility={data.volatility} />
              </td>
              <td>{data.collatoral}</td>
              <td>{data.pnl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DataCard>
  );
};
