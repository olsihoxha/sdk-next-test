import React, { FC } from 'preact/compat';
import Element, { CategoryIconProps } from './CategoryIcon';
import register from '../../../../register';

const CategoryIcon: FC<CategoryIconProps> = ({ category, iconColor, iconSize }) => {
  return <Element category={category} iconColor={iconColor} iconSize={iconSize} />;
};

register(CategoryIcon, 'liquid-category-icon', ['category', 'iconColor', 'iconSize'], {
  shadow: true,
});

export default CategoryIcon;
