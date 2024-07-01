
import React, { FC } from 'preact/compat';

export interface AdBadgeProps {
  label: string;
}

const AdBadge: FC<AdBadgeProps> = ({ label }) => {
  return (
    <div className="bg-white px-2 py-1 rounded-md border border-solid border-gray-200">
      <p className="text-gray-500 text-center text-[10px] font-semibold">{label}</p>
    </div>
  );
};

export default AdBadge;

