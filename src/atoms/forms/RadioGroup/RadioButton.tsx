import { ChangeEvent, FC } from 'preact/compat';

interface RadioProps {
  label: string;
  checked: boolean;
  onChange: ChangeEvent<HTMLInputElement>;
  value: string;
}

const Radio: FC<RadioProps> = ({ label, checked, onChange, value }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        checked={checked}
        // @ts-ignore
        onChange={onChange}
        value={value}
        className="w-4 h-4 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-200 focus:ring-1 cursor-pointer"
      />
      <label className="text-light-font-color text-xs font-normal font-['Open Sans']">
        {label}
      </label>
    </div>
  );
};

export default Radio;
