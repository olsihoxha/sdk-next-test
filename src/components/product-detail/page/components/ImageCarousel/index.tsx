import { computed } from '@preact/signals';
import Element from './ImageCarousel';
import { product, selectedProduct } from '@/signals';
import { mergeUnique } from '@/functions/mergeUniqueArray';
import { useMemo } from 'preact/compat';

type ImageCarouselProps = {
  isMobile: boolean;
  isProductImage?: boolean;
};

function ImageCarousel(props: ImageCarouselProps) {
  const { isMobile, isProductImage = false } = props;
  const selectedImage = computed<string | null>(
    () =>
      product.value?.sizes.find((el) => el.upc === selectedProduct.value?.size.upc)?.image || null,
  );

  const images = useMemo(() => {
    if (!selectedImage.value) {
      return (product.value.images || []) as string[];
    }
    return mergeUnique([selectedImage.value], product.value.images as string[]) || [];
  }, [selectedImage.value]);

  return (
    <Element
      images={images}
      name={product.value.name}
      isMobile={isMobile}
      isProductImage={isProductImage}
    />
  );
}

export default ImageCarousel;
