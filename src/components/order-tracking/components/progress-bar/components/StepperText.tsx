import classNames from 'classnames';
import { StatusMapperItem, StatusMapperValue } from '../ProgressBar';

export interface StepperTextProps {
  statusMapper: Record<StatusMapperValue, StatusMapperItem>;
}

const StepperText = ({ statusMapper }: StepperTextProps) => {
  return (
    <div className="flex justify-between items-center self-stretch min-w-[286px] lg:min-w-[676px]">
      {Object.values(statusMapper).map((sts) => {
        return (
          <p
            key={sts.step}
            className={classNames(
              'text-[10px] text-center lg:text-sm font-normal whitespace-nowrap',
              sts.fulfilled ? 'text-primary' : 'text-default',
              sts.step === 2 && 'ml-5 lg:ml-9',
            )}
          >
            {sts.label}
          </p>
        );
      })}
    </div>
  );
};

export default StepperText;
