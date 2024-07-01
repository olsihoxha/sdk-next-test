import { FC } from 'preact/compat';
import Element, { CheckboxProps } from './Checkbox';
import register from '../../../register';
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

register(
  Checkbox,
  'liquid-checkbox',
  [
    'styles',
    'id',
    'checked',
    'label',
    'labelColor',
    'labelWeight',
    'checkboxSize',
    'labelTextSize',
    'required',
    'error',
    // 'onChange',
  ],
  { shadow: true },
);

export default Checkbox;
