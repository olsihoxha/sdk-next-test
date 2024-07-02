import { useMemo, useState } from 'react';
import ScrollButton from '../../common/component/ImageCarousel/ScrollButton';
import { useStyles } from '../../common/context/ThemeContext/ThemeContext';
import { useResponsive } from '../../../hooks';
import CardCarousel, {
  CardCarouselWrapper,
} from '../../common/component/CardCarousel/CardCarousel';
import ProductCard from '../../../atoms/cards/ProductCard';
import { useAppContext } from '../../common/context/AppContext/hooks/useAppContext';
import { IProduct } from '@liquidcommercedev/sdk';
import { useEffect } from 'preact/hooks';
import { loc } from '@/signals';
import type { ProductCarouselProps } from '@/build-types';
import RetailerHeader from '@/components/product-carousel/components/RetailerHeader';
import { mapCategoryName } from '@/functions/categoryName';
import { backgrounds, colors, icons, labels } from '../../product-list-page/components/Cards';

function ProductCarousel({ category, retailer, onSeeAllClick, onCardClick }: ProductCarouselProps) {
  const styles = useStyles();
  const [title, setTitle] = useState('');
  const [supportText] = useState('0.3 mi - 10 min - $0 delivery fee');
  const [carousel, setCarousel] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { larger, windowWidth } = useResponsive();
  const [products, setProducts] = useState([]);

  const { getCatalog } = useAppContext();

  const categoryName = useMemo(() => {
    if (!category || category === 'undefined') return;

    return mapCategoryName(category);
  }, [category]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const result = await getCatalog({
          loc: loc.value,
          filters:
            category && category !== 'undefined' ? [{ key: 'categories', values: [category] }] : [],
        });

        setProducts(result.products);

        const retailerName = result.retailers.find((retailer) => {
          return retailer.name;
        });
        setTitle(retailerName.name);
      } catch (error) {
        console.error(error);
        setProducts([]);
      }
    };

    fetchProductsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, retailer]);

  const getSlidesPerView = () => {
    switch (true) {
      case windowWidth < 640:
        return 2;
      case windowWidth < 768:
        return 3;
      case windowWidth < 1024:
        return 4;
      case windowWidth < 1280:
        return 5;
      case windowWidth < 1536:
        return 6;
      default:
        return 6;
    }
  };

  const carouselOptions = {
    allowTouchMove: true,
    grabCursor: true,
    breakpointsBase: 'window',
    spaceBetween: 16,
    slidesPerView: 1,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        spaceBetween: 24,
        slidesPerView: 5,
      },
      1280: {
        spaceBetween: 24,
        slidesPerView: 6,
      },
      1536: {
        spaceBetween: 24,
        slidesPerView: 6,
      },
    },
  };

  const productCardsWrapped = useMemo(
    () =>
      products.map((each: IProduct, index: number) => (
        <CardCarouselWrapper key={`product-card-${index}`}>
          <ProductCard
            product={each}
            onClick={onCardClick}
            badge={{
              label: labels[Math.ceil(Math.random() * labels.length - 1)],
              background: backgrounds[Math.ceil(Math.random() * backgrounds.length - 1)],
              color: colors[Math.ceil(Math.random() * colors.length - 1)],
              icon:
                icons[Math.ceil(Math.random() * icons.length - 1)] !== null
                  ? icons[Math.ceil(Math.random() * icons.length - 1)]
                  : null,
            }}
          />
        </CardCarouselWrapper>
      )),
    [onCardClick, products],
  );

  return (
    <div className="max-w-[1488px] flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        {retailer && <RetailerHeader title={title} supportText={supportText} />}
        {products.length > 0 && (
          <>
            {category && category !== 'undefined' && (
              <h3 className="text-lg font-bold md:text-2xl">{categoryName}</h3>
            )}
            <div className="flex flex-row items-center gap-4">
              <div
                className={`text-xs lg:text-sm font-semibold cursor-pointer text-[${styles.colors.primary}]`}
              >
                <button onClick={() => onSeeAllClick?.(retailer, category)}>See all</button>
              </div>
              {larger.md && (
                <div className="flex flex-row items-center gap-4">
                  <ScrollButton
                    icon="Prev"
                    disabled={activeIndex === 0}
                    className={`w-6 h-6 border-1 border-[${styles.colors.primary}] text-[${styles.colors.primary}]`}
                    onClick={() => carousel.slidePrev()}
                  />
                  <ScrollButton
                    icon="Next"
                    disabled={
                      activeIndex === products.length - 1 || products.length <= getSlidesPerView()
                    }
                    className={`w-6 h-6 border-1 border-[${styles.colors.primary}] text-[${styles.colors.primary}]`}
                    onClick={() => carousel.slideNext()}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <CardCarousel
        carousel={carousel}
        setCarousel={setCarousel}
        options={carouselOptions}
        setActiveIndex={setActiveIndex}
      >
        {productCardsWrapped}
      </CardCarousel>
    </div>
  );
}

export default ProductCarousel;
