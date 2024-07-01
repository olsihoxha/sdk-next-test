import { FC } from 'preact/compat';

export interface CounterProps {
  count: number;
  bgColor?: string;
  textColor?: string;
}

const CounterDisplay: FC<CounterProps> = ({ count, textColor = 'white', bgColor = 'red-500' }) => {
  return (
    <div
      className={`bg-${bgColor} bg-[${bgColor}]  rounded-full w-2 h-2 p-2.5 text-center flex items-center justify-center`}
    >
      <p className={`text-${textColor} text-[${textColor}] text-center text-xs font-bold`}>
        {count}
      </p>
    </div>
  );
};

export default CounterDisplay;
