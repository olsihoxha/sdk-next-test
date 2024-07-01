import { ChangeEvent, FC, ReactNode } from 'preact/compat';
import { Styles } from '../../../types';

export interface CheckboxProps {
  current?: string;
  id: string;
  checked: boolean;
  label?: string | ReactNode;
  labelColor?: string;
  labelWeight?: string; // 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
  checkboxSize?: string; // '[14px]' | 1 | 2 | 3 ...
  labelTextSize?: string; // 'sm | base | lg | xl | 2xl'
  required?: boolean;
  error?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  styles?: Styles;
}

const CheckBox: FC<CheckboxProps> = ({
  id,
  checked,
  label,
  labelColor,
  labelWeight,
  checkboxSize,
  labelTextSize,
  required,
  onChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  ...props
}) => {
  const inputClass = `text-primary-font bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer`;

  return (
    <div className="flex flex-row gap-2 items-start">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        required={required}
        onChange={onChange}
        className={`w-${checkboxSize} h-${checkboxSize} ${inputClass} `}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className={`text-${labelTextSize} font-${labelWeight} text-${labelColor} cursor-pointer`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
