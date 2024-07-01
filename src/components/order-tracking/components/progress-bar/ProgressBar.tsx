import { useEffect, useState } from 'preact/compat';
import StepperNavigation from './components/StepperNavigation';
import StepperText from './components/StepperText';
import { cloneDeep } from '@/functions';

export interface ProgressBarProps {
  status: StatusMapperValue;
  delivery: string;
}

export type StatusMapperValue = 'placed' | 'confirmed' | 'out_delivery' | 'delivered';

export interface StatusMapperItem {
  step: number;
  fulfilled: boolean;
  label: string;
}

export const initialStatusMapper: Record<StatusMapperValue, StatusMapperItem> = {
  placed: { step: 1, fulfilled: false, label: 'Placed' },
  confirmed: { step: 2, fulfilled: false, label: 'Confirmed' },
  out_delivery: { step: 3, fulfilled: false, label: 'Out for delivery' },
  delivered: { step: 4, fulfilled: false, label: 'Delivered' },
};

const ProgressBar = ({ status, delivery }: ProgressBarProps) => {
  const [statusMapper, setStatusMapper] = useState(initialStatusMapper);

  useEffect(() => {
    const updatedStatusMapper =
      cloneDeep<Record<StatusMapperValue, StatusMapperItem>>(statusMapper);
    const statusKeys = Object.keys(statusMapper) as StatusMapperValue[];
    const statusIndex = statusKeys.findIndex(
      (key) => statusMapper[key].step >= statusMapper[status]?.step,
    );
    if (statusIndex !== -1) {
      for (let i = 0; i <= statusIndex; i++) {
        const key = statusKeys[i];
        updatedStatusMapper[key].fulfilled = true;
      }
      setStatusMapper(updatedStatusMapper);
    }

    // disabled to prevent infinite loop when adding status mapper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="flex gap-[10px] py-4 px-6 lg:p-6 flex-col items-center self-stretch border-b border-secondary max-w-[330px] sm:max-w-[480px] lg:max-w-[720px] w-[330px] sm:w-[480px] lg:w-[720px]">
      {/* Header */}
      <div className=" flex flex-col items-center gap-1 self-stretch">
        <h1 className="text-base lg:text-lg font-bold font-['Open Sans']">Order Status</h1>
        <p className="text-sm lg:text-base font-normal font-['Open Sans'] text-default">
          {delivery}
        </p>
      </div>
      {/* Stepper Navigation */}
      <StepperNavigation statusMapper={statusMapper} />
      {/* Stepper Text */}
      <StepperText statusMapper={statusMapper} />
    </div>
  );
};

export default ProgressBar;
