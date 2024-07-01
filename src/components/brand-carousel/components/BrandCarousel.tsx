import { useCallback, useMemo, useState } from 'preact/compat';
import ScrollButton from '../../common/component/ImageCarousel/ScrollButton';
import { useStyles } from '../../common/context/ThemeContext/ThemeContext';
import { useResponsive } from '../../../hooks';
import CardCarousel, {
  CardCarouselWrapper,
} from '../../common/component/CardCarousel/CardCarousel';
import BrandCard from '../../../atoms/cards/BrandCard';
import { useAppContext } from '../../common/context/AppContext/hooks/useAppContext';
import { useEffect } from 'preact/hooks';
import { ICatalog } from '@liquidcommercedev/sdk';
import { loc } from '@/signals';
import { BrandCarouselProps } from '@/build-types';
import { SEE_ALL_BRAND } from '@/components/common/type/constants';

const brandIcons = {
  Absolut: {
    label: 'Absolut',
    iconUrl: 'https://storage.googleapis.com/liquid-platform/assets/brands/absolut.png',
  },
  JohnnieWalker: {
    label: 'Johnnie Walker',
    iconUrl: 'https://storage.googleapis.com/liquid-platform/assets/brands/johnie-walker.png',
  },
  DonJulio: {
    label: 'Don Julio',
    iconUrl: 'https://storage.googleapis.com/liquid-platform/assets/brands/don-julio.png',
  },
  GreyGoose: {
    label: 'Grey Goose',
    iconUrl: 'https://storage.googleapis.com/liquid-platform/assets/brands/grey-goose.png',
  },
  BuchananScotland: {
    label: "Buchanan's Scotland",
    iconUrl: 'https://storage.googleapis.com/liquid-platform/assets/brands/buchanans.png',
  },
  Heineken: {
    label: 'Heineken',
    iconUrl: 'https://storage.googleapis.com/liquid-platform/assets/brands/heineken.png',
  },
};

function BrandCarousel({ onCardClick }: BrandCarouselProps) {
  const styles = useStyles();

  const [title] = useState('Featured Brands');
  const [carousel, setCarousel] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { larger } = useResponsive();

  const [labels, setLabels] = useState([]);

  const { getCatalog } = useAppContext();

  const fetchCatalogData = useCallback(async () => {
    try {
      const result = await getCatalog({ loc: loc.value });
      const labs = extractLabels(result, 'brands');
      setLabels(labs);
    } catch (error) {
      setLabels([]);
    }
  }, [getCatalog]);

  const extractLabels = (data: ICatalog, targetBucket: string) => {
    const catalogFilters = data.navigation.filters;
    let labels = [];
    if (catalogFilters) {
      labels = catalogFilters.find((item) => item.bucket === targetBucket)?.values;
    }
    return labels;
  };

  useEffect(() => {
    fetchCatalogData();
  }, [fetchCatalogData]);

  const carouselOptions = {
    allowTouchMove: true,
    grabCursor: true,
    breakpointsBase: 'window',
    spaceBetween: 16,
    slidesPerView: 2.5,
    breakpoints: {
      640: {
        slidesPerView: 4.5,
      },
      768: {
        slidesPerView: 5.5,
      },
      1024: {
        spaceBetween: 24,
        slidesPerView: 6,
      },
      1280: {
        spaceBetween: 24,
        slidesPerView: 6,
      },
      1536: {
        spaceBetween: 24,
        slidesPerView: 8,
      },
    },
  };

  const brandCardsWrapped = useMemo(
    () =>
      labels.map((each: any, index: number) => {
        const randomImage =
          brandIcons[
            Object.keys(brandIcons)[Math.ceil(Math.random() * Object.keys(brandIcons).length - 1)]
          ].iconUrl;
        return (
          <CardCarouselWrapper key={`brand-card-${index}`}>
            <BrandCard
              label={each.value}
              iconUrl={each?.iconUrl ?? randomImage}
              onClick={onCardClick}
            />
          </CardCarouselWrapper>
        );
      }),
    [labels, onCardClick],
  );

  return (
    <div className="max-w-[1488px] flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-left" style={{ color: '#333333' }}>
            <div className="font-bold text-lg lg:text-2xl">{title}</div>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div
            className={`text-xs lg:text-sm font-semibold cursor-pointer text-[${styles.colors.primary}]`}
          >
            <a onClick={() => onCardClick(SEE_ALL_BRAND)}>See all</a>
          </div>
          {larger.md && (
            <div className="flex flex-row gap-4 items-center">
              <ScrollButton
                icon="Prev"
                disabled={activeIndex === 0}
                className={`w-5 h-5 border-1 border-[${styles.colors.primary}] text-[${styles.colors.primary}]`}
                onClick={() => carousel?.slidePrev()}
              />
              <ScrollButton
                icon="Next"
                disabled={activeIndex === labels.length - 1}
                className={`w-5 h-5 border-1 border-[${styles.colors.primary}] text-[${styles.colors.primary}]`}
                onClick={() => carousel?.slideNext()}
              />
            </div>
          )}
        </div>
      </div>
      <CardCarousel
        carousel={carousel}
        setCarousel={setCarousel}
        options={carouselOptions}
        setActiveIndex={setActiveIndex}
      >
        {brandCardsWrapped}
      </CardCarousel>
    </div>
  );
}

export default BrandCarousel;
