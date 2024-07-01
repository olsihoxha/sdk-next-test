import { FC, ChangeEvent } from 'preact/compat';

export interface SelectProps {
  options: string[];
  label: string;
  onChange: (value: string) => void;
}

const SelectInput: FC<SelectProps> = ({ options, label, onChange }: SelectProps) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <>
      <style>
        {`
        select {
          apparence: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        .custom-select::after {
          position: absolute;
          content: "";
          width: 0.6rem;
          height: 0.6rem;
          border-right: 0.1em solid #6B7280;
          border-top: 0.1em solid #6B7280;
          transform: rotate(135deg);
          right: 0.9rem;
          pointer-events: none;
          top: 60%;        
        }

        select > option {
          background-color: red;
        }
      `}
      </style>
      <div className="custom-select text-xs md:text-sm flex flex-col gap-2 relative">
        <label className="text-light-font-color"> {label} </label>
        <select
          className="flex flex-row rounded-lg gap-[10px] p-3 text-gray-500 border border-gray-300 focus:outline-none cursor-pointer"
          onChange={handleSelectChange}
        >
          {options.map((option, index) => (
            <option className="p-10" key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectInput;
