import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const DataCard: FC<Props> = ({ children }) => {
  return <div className="bg-lowvol shadow-md rounded-lg p-4">{children}</div>;
};
