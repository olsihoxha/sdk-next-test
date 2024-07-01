import { useEffect, useState, FC, ChangeEvent } from 'preact/compat';
import RadioButton from './RadioButton';
import { Styles } from '../../../types';
import Title from '../../../components/common/component/Title';

export interface RadioProps {
  options: RadioPropItem[];
  value?: string | undefined;
  onChange?: (value: string) => void;
  sx?: string | undefined;
  styles?: Styles;
  title?: string;
}

export interface RadioPropItem {
  label: string;
  value: string;
}

const RadioGroup: FC<RadioProps> = ({ options, value, onChange, title }: RadioProps) => {
  const [selectedValue, setSelectedValue] = useState(value);

  // Update the internal state when the prop changes
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement).value || '';
    setSelectedValue(newValue);

    // Callback for parent components
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <Title
          textClassName="text-light-font-color font-['Open Sans'] !text-sm !font-bold leading-5"
          title={title}
        />
        <div className="flex flex-col gap-5">
          {options.map((option: RadioPropItem) => (
            <RadioButton
              key={option.value}
              label={option.label}
              value={option.value}
              checked={selectedValue === option.value}
              // @ts-ignore
              onChange={handleRadioChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RadioGroup;
