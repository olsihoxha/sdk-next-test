import { FC } from 'preact/compat';
import Element, { DoubleRangeSliderProps } from './DoubleRangeSlider';
import register from '../../../register';
import ThemeProvider from '../../../components/common/context/ThemeContext/ThemeProvider';

const DoubleRangeSlider: FC<DoubleRangeSliderProps> = ({
  title = 'Double Range Slider',
  min,
  max,
  value,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  key,
  styles,
  onChange,
}) => {
  return (
    <ThemeProvider styles={styles}>
      <Element title={title} min={min} max={max} onChange={onChange} value={value} />
    </ThemeProvider>
  );
};

register(
  DoubleRangeSlider,
  'liquid-double-range-slider',
  ['styles', 'title', 'min', 'max', 'value', 'onChange'],
  { shadow: true },
);

export default DoubleRangeSlider;