import { FC } from 'preact/compat';
import Element, { RadioProps } from './RadioGroup';
import register from '../../../register';
import ThemeProvider from '../../../components/common/context/ThemeContext/ThemeProvider';

const RadioGroup: FC<RadioProps> = ({ options, value, onChange, styles, title }) => {
  return (
    <ThemeProvider styles={styles}>
      <Element options={options} value={value} onChange={onChange} title={title} />
    </ThemeProvider>
  );
};

register(RadioGroup, 'liquid-radio-group', ['styles', 'options', 'value', 'onChange', 'title'], {
  shadow: true,
});

export default RadioGroup;
