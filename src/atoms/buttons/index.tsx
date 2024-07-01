import Element, { ButtonProps } from './Button';
import register from '../../register';
import { FC } from 'preact/compat';

const Button: FC<ButtonProps> = ({
  id,
  label,
  disabled,
  type,
  onClick,
  onSubmit,
  customClassName,
  buttonType,
}: ButtonProps) => {
  return (
    <Element
      id={id}
      label={label}
      disabled={disabled}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      customClassName={customClassName}
      buttonType={buttonType}
    />
  );
};

register(
  Button,
  'liquid-button',
  ['id', 'type', 'label', 'disabled', 'onClick', 'onSubmit', 'customClassName', 'buttonType'],
  { shadow: true },
);

export default Button;
