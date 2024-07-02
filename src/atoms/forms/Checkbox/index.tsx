import { FC } from 'preact/compat';
import Element, { CheckboxProps } from './Checkbox';

import ThemeProvider from '../../../components/common/context/ThemeContext/ThemeProvider';

const Checkbox: FC<CheckboxProps> = ({
  id,
  checked,
  label,
  labelColor,
  labelWeight,
  checkboxSize,
  labelTextSize,
  required,
  error,
  onChange,
  styles,
}) => {
  return (
    <ThemeProvider styles={styles}>
      <Element
        id={id}
        checked={checked}
        label={label}
        labelColor={labelColor}
        labelWeight={labelWeight}
        checkboxSize={checkboxSize}
        labelTextSize={labelTextSize}
        required={required}
        error={error}
        onChange={onChange}
      />
    </ThemeProvider>
  );
};


export default Checkbox;
