import { FC } from 'preact/compat';
import Element, { RadioProps } from './RadioGroup';
import ThemeProvider from '../../../components/common/context/ThemeContext/ThemeProvider';

const RadioGroup: FC<RadioProps> = ({ options, value, onChange, styles, title }) => {
  return (
    <ThemeProvider styles={styles}>
      <Element options={options} value={value} onChange={onChange} title={title} />
    </ThemeProvider>
  );
};


export default RadioGroup;
