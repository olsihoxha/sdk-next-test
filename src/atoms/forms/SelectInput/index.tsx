import Element, { SelectProps } from './SelectInput';
import { FC } from 'preact/compat';
import register from '../../../register';

export const SelectInput: FC<SelectProps> = ({ options, label, onChange }) => {
  return <Element options={options} label={label} onChange={onChange} />;
};

register(SelectInput, 'liquid-select', ['options', 'label', 'onChange'], { shadow: true });

export default SelectInput;
