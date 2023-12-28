import { FC } from 'react';

export enum Volatility {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

const VOLATILITY_COLORS = {
  [Volatility.LOW]: '#7879F1',
  [Volatility.MEDIUM]: '#9B51E0',
  [Volatility.HIGH]: '#6148C2',
};

type Props = {
  volatility: Volatility;
};

export const VolatilityChip: FC<Props> = ({ volatility }) => {
  return (
    <div
      className="px-3 py-1 rounded-full text-white"
      style={{
        background: VOLATILITY_COLORS[volatility],
      }}
    >
      {volatility}
    </div>
  );
};
