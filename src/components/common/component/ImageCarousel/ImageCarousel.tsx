import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'preact/compat';
import { Swiper as SwiperClass } from 'swiper/types';
import ScrollButton from './ScrollButton';
import { useStyles } from '../../context/ThemeContext/ThemeContext';
import { Controller } from 'swiper/modules';
import Swiper from 'swiper';
import { useResponsive } from '../../../../hooks';

interface Props {
  navWidthScroll: number;
  itemsCount: number;
  children: ReactNode;
}

function ImageCarousel(props: Props) {
  const styles = useStyles();
  const { itemsCount, children } = props;

  const { larger, windowWidth } = useResponsive();

  const ITEM_COUNT_LIMIT_MOBILE = 3;
  const ITEM_COUNT_LIMIT_DESKTOP = 4;
  const ITEM_COUNT_LIMIT = larger.xs ? ITEM_COUNT_LIMIT_DESKTOP : ITEM_COUNT_LIMIT_MOBILE;

  const [itemCountLimit, setItemCountLimit] = useState<number>(ITEM_COUNT_LIMIT);

  useEffect(() => {
    const newItemCountLimit = larger.md ? ITEM_COUNT_LIMIT_DESKTOP : ITEM_COUNT_LIMIT_MOBILE;
    setItemCountLimit(newItemCountLimit);
  }, [larger.md, windowWidth]);

  const [swiperController, setSwiperController] = useState<SwiperClass | null>(null);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(true);
  const swiperElRef = useRef<HTMLDivElement>(null);

  const slideNext = useCallback(() => {
    if (swiperController) {
      swiperController?.slideNext();
      setIsFirst(swiperController.isBeginning);
      setIsLast(swiperController.isEnd);
    }
  }, [swiperController]);

  const slidePrev = useCallback(() => {
    if (swiperController) {
      swiperController?.slidePrev();
      setIsFirst(swiperController.isBeginning);
      setIsLast(swiperController.isEnd);
    }
  }, [swiperController]);

  useEffect(() => {
    const swiper = new Swiper(swiperElRef.current, {
      modules: [Controller],
      slidesPerView: itemsCount < itemCountLimit ? itemsCount : itemCountLimit,
    });
    setSwiperController(swiper);
    if (itemsCount > itemCountLimit) {
      setIsFirst(swiper.isBeginning);
      setIsLast(swiper.isEnd);
    }
  }, [itemsCount, styles.colors.primary, itemCountLimit]);

  useEffect(() => {
    if (swiperController?.slides) {
      if (swiperController?.slides.length === 0) {
        window.dispatchEvent(new Event('resize'));
      }
    }

    if (swiperController?.isEnd) {
      setIsLast?.(true);
    } else {
      setIsLast?.(false);
    }
  }, [swiperController]);

  if (!itemsCount || itemsCount === 0) {
    return null;
  }

  return (
    <div className="flex flex-row items-center content-center justify-center w-full h-full">
      {itemsCount > itemCountLimit && (
        <ScrollButton
          icon="Prev"
          onClick={slidePrev}
          disabled={isFirst}
          className={`!inline-block text-[${styles.colors.primary}]`}
        />
      )}
      <div class="swiper !ml-0 !overflow-hidden" ref={swiperElRef}>
        <div class="swiper-wrapper max-h-[22em]">{children}</div>
        <div class="swiper-pagination" />
      </div>
      {itemsCount > itemCountLimit && (
        <ScrollButton
          icon="Next"
          onClick={slideNext}
          disabled={isLast}
          className={`text-[${styles.colors.primary}]`}
        />
      )}
    </div>
  );
}
export default ImageCarousel;
