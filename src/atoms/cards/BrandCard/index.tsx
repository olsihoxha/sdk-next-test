import { FC } from 'preact/compat';
import Element, { BrandCardProps } from './BrandCard';
import register from '../../../register';

const BrandCard: FC<BrandCardProps> = ({ iconUrl, label, onClick }) => {
  return <Element iconUrl={iconUrl} label={label} onClick={onClick} />;
};

register(BrandCard, 'liquid-brand-card', ['label', 'iconUrl', 'onClick'], {
  shadow: true,
});

export default BrandCard;
