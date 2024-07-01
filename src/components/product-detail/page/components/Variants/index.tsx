import Item from './Item';
import OutOfStockBanner from '../../../../common/component/OutOfStockBanner';
import ImageCarousel from '../../../../common/component/ImageCarousel/ImageCarousel';
import { IProductSize } from '@liquidcommercedev/sdk';
import { product, selectedProduct } from '@/signals';

function VariantsCarousel() {
  const sizes = product.value.sizes;
  const inStock = selectedProduct.value.variant?.stock;

  if (!inStock) {
    return <OutOfStockBanner className="mt-8" />;
  }

  return (
    <div className="max-w-[calc(100vw-2rem)] md:w-full mt-2">
      <ImageCarousel itemsCount={sizes.length} navWidthScroll={80}>
        {sizes.map((item: IProductSize, index: number) => (
          <div class="swiper-slide" key={index}>
            <Item item={item} />
          </div>
        ))}
      </ImageCarousel>
    </div>
  );
}

export default VariantsCarousel;
