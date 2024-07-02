import { FC } from 'preact/compat';
import Element, { BrandProps } from './Brand';


const Brand: FC<BrandProps> = ({ brandName, brandLogoBorderColor, brandLogoSize }) => {
  return (
    <Element
      brandName={brandName}
      brandLogoSize={brandLogoSize}
      brandLogoBorderColor={brandLogoBorderColor}
    />
  );
};



export default Brand;
