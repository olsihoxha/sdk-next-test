import { FC, useState, useEffect } from 'preact/compat';
import * as SubcategoryIcons from './components/index';
import { IconProps } from '@/atoms/cards/CategoryCard/CategoryCard';

export interface SubcategoryIconProps {
  subcategory: string;
  iconColor?: string;
  iconSize?: string;
}

const SubcategoryIcon: FC<SubcategoryIconProps> = ({ subcategory, iconColor, iconSize }) => {
  const [Icon, setIcon] = useState<FC<IconProps> | null>(null);

  useEffect(() => {
    if (subcategory !== null) {
      const IconComponent = SubcategoryIcons.default[subcategory] as FC;
      setIcon(() => IconComponent);
    } else {
      console.error(`Invalid component: ${subcategory}`);
      setIcon(() => null);
    }
  }, [subcategory]);

  return <div>{Icon ? <Icon color={iconColor} size={iconSize} /> : null}</div>;
};

export default SubcategoryIcon;
