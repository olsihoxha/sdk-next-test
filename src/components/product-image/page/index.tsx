import { useResponsive, useBounds } from '../../../hooks';
import ImageCarousel from '../../product-detail/page/components/ImageCarousel';

function ProductImage() {
  const { width } = useBounds();
  const { isMobile: isMobileFn } = useResponsive();

  const isMobile = isMobileFn(width);

  return <ImageCarousel isMobile={isMobile} isProductImage={true} />;
}

export default ProductImage;
