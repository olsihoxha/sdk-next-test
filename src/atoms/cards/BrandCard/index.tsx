import { FC } from 'preact/compat';
import Element, { BrandCardProps } from './BrandCard';

const BrandCard: FC<BrandCardProps> = ({ iconUrl, label, onClick }) => {
  return <Element iconUrl={iconUrl} label={label} onClick={onClick} />;
};



export default BrandCard;
