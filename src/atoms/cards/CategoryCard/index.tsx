import { FC } from 'preact/compat';
import Element from './CategoryCard';
import register from '../../../register';
import { LiquidTaxonomy } from '@liquidcommercedev/sdk';

export interface CategoryCardProps {
  label: {
    label: LiquidTaxonomy;
    icon: any;
  };
  onClick: (clickedItem: string) => void;
}

const CategoryCard: FC<CategoryCardProps> = ({ label, onClick }) => {
  return <Element label={label} onClick={onClick} />;
};

register(CategoryCard, 'liquid-category-card', ['label', 'onClick'], {
  shadow: true,
});

export default CategoryCard;
