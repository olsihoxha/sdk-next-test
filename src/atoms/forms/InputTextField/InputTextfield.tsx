import React, { FC, TargetedEvent } from 'preact/compat';
import classNames from 'classnames';

export interface TextFieldProps {
  label?: string;
  id?: string;
  value?: string;
  required?: boolean;
  formData: Record<string, any>;
  disabled?: boolean;
  placeholder?: string;
  errorMessage?: string;
  handleFocus?: (e?: FocusEvent) => void;
  handleChange: (e?: TargetedEvent<HTMLInputElement, Event>) => void;
}

const InputTextField: FC<TextFieldProps> = ({
  id,
  label,
  value,
  required,
  handleChange,
  handleFocus,
  disabled,
  placeholder,
  errorMessage,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {(label || required) && (
        <label className="text-xs md:text-sm font-bold text-light-font-color" htmlFor={id}>
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        name={id}
        type="text"
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={!!errorMessage}
        className={classNames(
          'text-xs md:text-sm font-normal text-gray-900 focus:outline-none py-2 md:py-3 px-4 gap-[10px] border border-gray-300 rounded-md',
          { 'border-red-500': errorMessage },
        )}
        onFocus={(e) => handleFocus?.(e)}
        onChange={(e) => handleChange?.(e)}
      />
      {errorMessage && (
        <div
          className={classNames(
            'text-red-500 text-xs md:text-sm font-normal',
            'custom-transition-opacity opacity-100 h-auto',
          )}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default InputTextField;
