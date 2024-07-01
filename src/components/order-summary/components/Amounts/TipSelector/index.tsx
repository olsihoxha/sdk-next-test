
import Element, { TipSelectorProps } from './TipSelector';
import { FC } from 'preact/compat';

const TipSelector: FC<TipSelectorProps> = ({ tipsList, subtotal, onChange }) => {
  return <Element tipsList={tipsList} subtotal={subtotal} onChange={onChange} />;
};



export default TipSelector;
