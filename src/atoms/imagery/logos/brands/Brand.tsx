import { FC, useState, useEffect } from 'preact/compat';
import * as Brands from './components/index';
import { IconProps } from '@/atoms/cards/CategoryCard/CategoryCard';

export interface BrandProps {
  brandName: string;
  brandLogoBorderColor?: string;
  brandLogoSize?: string;
}

const Brand: FC<BrandProps> = ({ brandName, brandLogoBorderColor, brandLogoSize }) => {
  const [BrandLogo, setBrandLogo] = useState<FC<IconProps> | null>(null);

  useEffect(() => {
    if (brandName !== null) {
      const Logo = Brands.default[brandName] as FC;
      setBrandLogo(() => Logo);
    } else {
      console.error(`Invalid component: ${brandName}`);
      setBrandLogo(() => null);
    }
  }, [brandName]);

  return (
    <div key={brandName}>
      {BrandLogo ? <BrandLogo color={brandLogoBorderColor} size={brandLogoSize} /> : null}
    </div>
  );
};

export default Brand;
