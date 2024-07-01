import React, { FC } from 'preact/compat';
import Element, { SubcategoryIconProps } from './SubcategoryIcon';
import register from '../../../../register';

const SubcategoryIcon: FC<SubcategoryIconProps> = ({ subcategory, iconColor, iconSize }) => {
  return <Element subcategory={subcategory} iconColor={iconColor} iconSize={iconSize} />;
};

register(SubcategoryIcon, 'liquid-subcategory-icon', ['subcategory', 'iconColor', 'iconSize'], {
  shadow: true,
});

export default SubcategoryIcon;
