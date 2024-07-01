import { useEffect, useRef, FC, useState, ChangeEvent, useMemo } from 'preact/compat';
import Title from '../../../components/common/component/Title';
import { Styles } from '../../../types';
import currencyFormat from '@/components/common/util/currencyFormat';

export interface DoubleRangeSliderProps {
  title?: string;
  min?: number;
  max?: number;
  styles?: Styles;
  current?: string;
  onChange?: (name: string, value: number) => void;
  value?: { min: number; max: number };
  key?: any;
}

const DoubleRangeSlider: FC<DoubleRangeSliderProps> = ({
  title,
  min,
  max,
  onChange,
  value = { min, max },
}) => {
  const fromSliderRef = useRef<HTMLInputElement>(null);
  const toSliderRef = useRef<HTMLInputElement>(null);
  const [fromValue, setFromValue] = useState(value.min);
  const [toValue, setToValue] = useState(value.max);

  useEffect(() => {
    setFromValue(value.min);
    setToValue(value.max);
  }, [value.min, value.max]);

  const handleFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = Math.min(Number(target.value), toValue);
    setFromValue(value);
    onChange && onChange('from', value);
  };

  const handleToChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = Math.max(Number(target.value), fromValue);
    setToValue(value);
    onChange && onChange('to', value);
  };

  //as props?
  const sliderColor = '#C6C6C6';
  const rangeColor = '#1C64F2';

  //sets the background of the slider to a linear gradient that visually represents the selected range.
  const sliderBackgroundGradient = useMemo(() => {
    return `linear-gradient(to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromValue / (max - min)) * 100}%,
      ${rangeColor} ${(fromValue / (max - min)) * 100}%,
      ${rangeColor} ${(toValue / (max - min)) * 100}%,
      ${sliderColor} ${(toValue / (max - min)) * 100}%,
      ${sliderColor} 100%
    )`;
  }, [fromValue, toValue, min, max]);

  return (
    <>
      <style>
        {`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          pointer-events: all;
          width: 1.375rem;
          height: 1.375rem;
          background-color: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 50%;
          box-shadow: 0px 1px 2px 0px #00000014;
          cursor: pointer;
          transition: all 0.15s ease-in-out;
        }
        
        input[type=range]::-moz-range-thumb {
          -webkit-appearance: none;
          pointer-events: all;
          width: 22px;
          height: 22px;
          background-color: #fff;
          border: 1px solid #E5E7EB;
          box-shadow: 0px 1px 2px 0px #00000014;
          cursor: pointer; 
          transition: all 0.15s ease-in-out;
        }
        
        input[type=range]::-webkit-slider-thumb:hover {
          background-color: #fffbfb;
          box-shadow: 0px 2px 3px 0px #00000020;
        }
        
        input[type="range"] {
          -webkit-appearance: none; 
          appearance: none;
          height: 0.5rem;
          width: 100%;
          position: absolute;
          background-color: #E5E7EB;
          pointer-events: none;
        }
        
        #fromSlider {
          height: 0;
          z-index: 1;
        }

        #toSlider {
          border-radius: 50px !important;
        }
  `}
      </style>
      <div className="flex flex-col gap-3">
        <Title
          textClassName="text-light-font-color font-['Open Sans'] !text-sm !font-bold leading-5"
          title={`${title}: ${currencyFormat(fromValue)} - ${currencyFormat(toValue)}`}
        />
        <div className={'flex flex-col w-full justify-center mx-auto relative'}>
          <input
            id="fromSlider"
            type="range"
            value={fromValue}
            min="0"
            max="500000"
            ref={fromSliderRef}
            onChange={handleFromChange}
            defaultValue={min?.toString()}
          />
          <input
            id="toSlider"
            type="range"
            value={toValue}
            min="0"
            max="500000"
            ref={toSliderRef}
            onChange={handleToChange}
            style={{ background: sliderBackgroundGradient }}
            defaultValue={max?.toString()}
          />
        </div>
      </div>
    </>
  );
};

export default DoubleRangeSlider;
