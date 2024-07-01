import { useCallback, useMemo, useState } from 'preact/compat';
import ScrollButton from '../../common/component/ImageCarousel/ScrollButton';
import { useStyles } from '../../common/context/ThemeContext/ThemeContext';
import { useResponsive } from '../../../hooks';
import CardCarousel, {
  CardCarouselWrapper,
} from '../../common/component/CardCarousel/CardCarousel';
import CategoryCard from '../../../atoms/cards/CategoryCard';
import { categoryIcons } from '../../../atoms/cards/CategoryCard/CategoryCard';
import Dropdown from '../../common/component/Dropdown';
import { useAppContext } from '../../common/context/AppContext/hooks/useAppContext';
import { ICatalog, IFilterValue } from '@liquidcommercedev/sdk';
import { useEffect } from 'preact/hooks';
import { loc } from '@/signals';
import { CategoryCarouselProps } from '@/build-types';
import { SEE_ALL_CATEGORY } from '@/components/common/type/constants';

function CategoryCarousel({ onCardClick }: CategoryCarouselProps) {
  const styles = useStyles();
  const [categories, setCategories] = useState([]);
  const [title] = useState('Select a category');
  const [carousel, setCarousel] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLast, setIsLast] = useState<boolean>(false);
  const { larger } = useResponsive();

  const { getCatalog } = useAppContext();

  const extractCategories = (data: ICatalog, targetBucket: string) => {
    const catalogFilters = data.navigation.filters;
    let categories: IFilterValue[] = [];
    if (catalogFilters) {
      categories = catalogFilters.find((item) => item.bucket === targetBucket)?.values;
    }
    return categories;
  };

  const fetchCategoriesData = useCallback(async () => {
    try {
      const result = await getCatalog({ loc: loc.value });
      const catgs = extractCategories(result, 'categories');
      const catNames = getCategoryNames(catgs);
      const catNamesUnique = filterUniqueByProperty(catNames, 'value');
      setCategories(catNamesUnique);
    } catch (error) {
      setCategories([]);
    }
  }, [getCatalog]);

  const filterUniqueByProperty = (array: any[], property: string) => {
    return array.filter((item, index, arr) => {
      return arr.findIndex((i) => i[property] === item[property]) === index;
    });
  };

  const getCategoryNames = (categories: IFilterValue[]) => {
    return categories.map((item) => {
      const parts = item.value.split(' > ');
      const lastPart = parts[0];
      const formattedValue = lastPart.charAt(0).toUpperCase() + lastPart.slice(1).toLowerCase();
      return { value: formattedValue.trim() };
    });
  };

  const getCategoryIconByLabel = (targetLabel: string) => {
    let matchingEntry = Object.entries(categoryIcons).find(
      ([label]) => label.toLowerCase() === targetLabel.replace(/\s/g, '').toLowerCase(),
    );
    if (!matchingEntry) {
      matchingEntry = ['Others', categoryIcons.Other];
    }
    const [label, { icon: IconComponent }] = matchingEntry;
    return { label, IconComponent };
  };

  useEffect(() => {
    fetchCategoriesData();
  }, [fetchCategoriesData]);

  const carouselOptions = {
    allowTouchMove: true,
    grabCursor: true,
    breakpointsBase: 'window',
    spaceBetween: 12,
    slidesPerView: 4,
    touchStartPreventDefault: false,
    breakpoints: {
      640: {
        slidesPerView: 7.25,
      },
      768: {
        slidesPerView: 9,
      },
      1024: {
        spaceBetween: 24,
        slidesPerView: 9,
      },
      1280: {
        spaceBetween: 24,
        slidesPerView: 9,
      },
      1536: {
        spaceBetween: 24,
        slidesPerView: 9,
      },
    },
  };

  const categoryCardsSorted = useMemo(
    () =>
      categories.map((category) => ({
        label: category.value,
        icon: getCategoryIconByLabel(category.value).IconComponent,
      })),
    [categories],
  );

  return (
    <div className="max-w-[1488px] flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-left" style={{ color: '#333333' }}>
            <div className="font-bold text-lg lg:text-2xl">{title}</div>
          </div>
        </div>
        {/* 2 ways to not show arrow buttons if all items feet the screen.
          either use condition: larger.md && carouselOptions[windowWidth]?.slidesPerView > categories.length
          or the implementation below.
        */}
        {/* {larger.md && !isLast ? ( */}
        {larger.md ? (
          <div className="flex flex-row gap-4 items-center">
            <Dropdown
              filterEnabled
              items={categoryCardsSorted.map((icon) => icon.label)}
              onSelect={(option) => {
                onCardClick(option);
              }}
              sx="w-32 cursor-pointer"
            >
              <div className={`text-sm font-semibold text-[${styles.colors.primary}]`}>See all</div>
            </Dropdown>
            <div className="flex flex-row gap-4 items-center">
              <ScrollButton
                icon="Prev"
                disabled={activeIndex === 0}
                className={`w-5 h-5 border-1 border-[${styles.colors.primary}] text-[${styles.colors.primary}]`}
                onClick={() => carousel?.slidePrev()}
              />
              <ScrollButton
                icon="Next"
                disabled={isLast || activeIndex === categories.length - 1}
                className={`w-5 h-5 border-1 border-[${styles.colors.primary}] text-[${styles.colors.primary}]`}
                onClick={() => carousel?.slideNext()}
              />
            </div>
          </div>
        ) : (
          <div className={`text-xs font-semibold cursor-pointer text-[${styles.colors.primary}]`}>
            <a onClick={() => onCardClick(SEE_ALL_CATEGORY)}>See all</a>
          </div>
        )}
      </div>
      <CardCarousel
        carousel={carousel}
        setCarousel={setCarousel}
        options={carouselOptions}
        setActiveIndex={setActiveIndex}
        setIsLast={setIsLast}
      >
        {categoryCardsSorted.map((each: any, index: number) => {
          return (
            <CardCarouselWrapper key={`brand-card-${index}`}>
              <CategoryCard label={each} onClick={onCardClick} />
            </CardCarouselWrapper>
          );
        })}
      </CardCarousel>
    </div>
  );
}

export default CategoryCarousel;
