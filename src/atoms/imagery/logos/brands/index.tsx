import { FC } from 'preact/compat';
import Element, { BrandProps } from './Brand';
import register from '@/register';

const Brand: FC<BrandProps> = ({ brandName, brandLogoBorderColor, brandLogoSize }) => {
  return (
    <Element
      brandName={brandName}
      brandLogoSize={brandLogoSize}
      brandLogoBorderColor={brandLogoBorderColor}
    />
  );
};

register(Brand, 'liquid-brand-logo', ['brandName', 'brandLogoBorderColor', 'brandLogoSize'], {
  shadow: true,
});

export default Brand;
