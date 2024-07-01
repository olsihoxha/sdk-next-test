import React, { useEffect, useRef, useState } from 'preact/compat';
import Swiper from 'swiper';
import { useResponsive } from '../../../../hooks';
import { SwiperOptions } from 'swiper/types/swiper-options';

export interface CardCarouselProps {
  carousel: Swiper;
  setCarousel: (value: Swiper) => void;
  children: React.ReactNode;
  options: SwiperOptions;
  setActiveIndex?: (value: number) => void;
  //  optional, because it is added later to not break existing implementation.
  // TODO: The 'previous' and 'next' button listen to the same/one value "activeIndex". Hard to distinguish if 'swiper.isBeginning' and 'swiper.isEnd' are both true.
  setIsLast?: (value: boolean) => void;
}

export function CardCarouselWrapper({ children, hasBadges = false }) {
  return (
    <div className={`swiper-slide text-left !h-auto ${hasBadges ? 'pt-3' : ''}`}>{children}</div>
  );
}

function CardCarousel({ setCarousel, setActiveIndex, children, options }: CardCarouselProps) {
  const swiperElRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useResponsive();
  const [currentSwiper, setCurrentSwiper] = useState<Swiper | null>(null);

  useEffect(() => {
    const swiper: Swiper = new Swiper(swiperElRef.current, options);
    setCurrentSwiper(swiper);
    // on first render of carousel, if all items are rendered.

    swiper.on('slideChange', () => {
      if (swiper?.isBeginning) {
        setActiveIndex && setActiveIndex(0);
      } else if (swiper?.isEnd) {
        setActiveIndex && setActiveIndex(swiper.slides.length - 1);
      } else {
        setActiveIndex && setActiveIndex(swiper.activeIndex);
      }
    });

    setCarousel(swiper);
    // cleanup
    return () => {
      swiper.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => {
    // Commented because it's causing an infinite rerender loop on demo app
    // if (currentSwiper?.slides) {
    //   if (currentSwiper?.slides.length === 0) {
    //     window.dispatchEvent(new Event('resize'));
    //   }
    // }
    //
    // if (currentSwiper?.isEnd) {
    //   setIsLast?.(true);
    // } else {
    //   setIsLast?.(false);
    // }
  }, [currentSwiper]);

  return (
    <div>
      <div className="swiper overflow-hidden p-0.5" ref={swiperElRef}>
        <div className="swiper-wrapper items-stretch">{children}</div>
      </div>
    </div>
  );
}

export default CardCarousel;
