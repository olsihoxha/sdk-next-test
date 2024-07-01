import Element, { TextFieldProps } from './InputTextfield';
import { FC } from 'preact/compat';
import register from '../../../register';

export const InputTextField: FC<TextFieldProps> = ({
  label,
  formData,
  id,
  value,
  placeholder,
  required,
  disabled,
  errorMessage,
  handleChange,
  handleFocus,
}) => {
  return (
    <Element
      id={id}
      label={label}
      value={value}
      disabled={disabled}
      formData={formData}
      placeholder={placeholder}
      required={required}
      errorMessage={errorMessage}
      handleFocus={handleFocus}
      handleChange={handleChange}
    />
  );
};

register(
  InputTextField,
  'liquid-input-textfield',
  [
    'label',
    'value',
    'placeholder',
    'id',
    'formData',
    'required',
    'handleFocus',
    'handleChange',
    'errorMessage',
    'disabled',
  ],
  { shadow: true },
);

export default InputTextField;
