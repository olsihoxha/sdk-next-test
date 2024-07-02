import Element, { SelectProps } from './SelectInput';
import { FC } from 'preact/compat';


export const SelectInput: FC<SelectProps> = ({ options, label, onChange }) => {
  return <Element options={options} label={label} onChange={onChange} />;
};


export default SelectInput;
