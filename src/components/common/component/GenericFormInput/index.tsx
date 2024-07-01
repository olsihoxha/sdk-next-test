import { JSX } from 'preact/compat';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface GenericFormInputProps {
  id: string;
  className?: string;
  disabled?: boolean;
  error: string;
  formData: Record<string, any>;
  handleFocus?: (fieldName: string) => void;
  handleChange: (fieldName: string, value: any) => void;
  label: string;
  placeholder?: string;
  required?: boolean;
  placeholderColor?: string;
  inputFieldPadding?: string;
  icon?: JSX.Element;
}

function GenericFormInput({
  id,
  className,
  formData,
  handleFocus,
  handleChange,
  error,
  label,
  placeholder,
  required = false,
  disabled = false,
  placeholderColor,
  inputFieldPadding,
  icon,
}: GenericFormInputProps) {
  return (
    <div className={classNames(className, 'flex flex-col gap-2 self-start text-xs')}>
      <label className="font-bold flex flex-row gap-1 items-center">
        <span>{label}</span>
        {required && <span className="text-red-500">*</span>}
        {icon}
      </label>
      <div
        className={twMerge(
          classNames(
            `border border-${error ? 'red' : disabled ? 'bg-gray-300' : 'gray'}-300 rounded-[10px] py-3 px-4 ${disabled ? 'bg-gray-100' : 'bg-white'}`,
            inputFieldPadding,
          ),
        )}
      >
        <input
          placeholder={placeholder}
          className={classNames(
            placeholderColor,
            `text-sm w-full focus:outline-none ${disabled ? 'bg-gray-100' : 'bg-white'}`,
          )}
          type="text"
          value={formData[id] || ''}
          onfocusout={() => {
            if (!disabled && handleFocus) {
              handleFocus(id);
            }
          }}
          onInput={(event) => {
            if (!disabled) {
              handleChange(id, event.currentTarget.value);
            }
          }}
          readonly={disabled}
        />
      </div>
      <div
        className={classNames(
          'text-red-500',
          'custom-transition-opacity',
          error ? 'opacity-100 h-auto' : 'opacity-0 h-0 ',
        )}
      >
        {error}
      </div>
    </div>
  );
}
export default GenericFormInput;
