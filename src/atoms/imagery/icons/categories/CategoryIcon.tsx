import { FC, useState, useEffect } from 'preact/compat';
import * as CategoryIcons from './components/index';
import { IconProps } from '@/atoms/cards/CategoryCard/CategoryCard';

export interface CategoryIconProps {
  category: string;
  iconColor?: string;
  iconSize?: string;
}

const CategoryIcon: FC<CategoryIconProps> = ({ category, iconColor, iconSize }) => {
  const [Icon, setIcon] = useState<FC<IconProps> | null>(null);

  useEffect(() => {
    if (category !== null) {
      const IconComponent = CategoryIcons.default[category] as FC;
      setIcon(() => IconComponent);
    } else {
      console.error(`Invalid component: ${category}`);
      setIcon(() => null);
    }
  }, [category]);

  return <div>{Icon ? <Icon color={iconColor} size={iconSize} /> : null}</div>;
};

export default CategoryIcon;
