import { memo, useEffect, useRef, useState } from 'preact/compat';
import Swiper from 'swiper';
import { Thumbs } from 'swiper/modules';
import ScrollButton from '../../../../common/component/ImageCarousel/ScrollButton';
import classNames from 'classnames';

interface Props {
  images: string[];
  isMobile: boolean;
  name: string;
  isProductImage?: boolean;
}

function ImageCarousel(props: Props) {
  const { images, isProductImage, name } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  // Used to reset selection when images change
  useEffect(() => {
    setCurrentIndex(0);
  }, [...images]);

  // Note: i do not want to reinitialise the swiper on breakpoint changes (screen size) since swiper is heavy
  useEffect(() => {
    const thumbsSwiper = new Swiper(thumbsSwiperRef.current, {
      spaceBetween: 10,
      slidesPerView: images.length > 4 ? 4 : images.length,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
    });

    const mainSwiper = new Swiper(mainSwiperRef.current, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      modules: [Thumbs],
      thumbs: images.length > 1 ? { swiper: thumbsSwiper } : null,
      spaceBetween: 10,
      on: {
        slideChange: (swiper) => {
          setCurrentIndex(swiper.realIndex);
        },
      },
    });

    return () => {
      mainSwiper.destroy();
      thumbsSwiper.destroy();
    };
  }, [...images]);

  const slideToMain = (index) => {
    mainSwiperRef.current.swiper.slideTo(index);
  };

  const slideNext = () => {
    mainSwiperRef.current.swiper.slideNext();
  };

  const slidePrev = () => {
    mainSwiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="flex flex-col gap-2 items-center max-w-[330px] md:max-w-[395px] max-h-[488px] self-center">
      <div
        className="swiper mySwiper2 w-full max-w-[330px] md:max-w-[395px] h-[400px] mx-auto"
        ref={mainSwiperRef}
      >
        <div className="swiper-wrapper">
          {images.map((imageUrl, index) => (
            <div key={index} className="swiper-slide">
              <img
                onError={(e) => {
                  (e.target as HTMLImageElement).referrerPolicy = 'no-referrer';
                }}
                src={imageUrl}
                alt={`${name} Image ${index}`}
                className="w-full h-full object-contain"
                onClick={() => slideToMain(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`hidden md:flex w-[395px] flex-row justify-between m-0 ${
          isProductImage ? 'pt-0' : 'pt-2'
        }`}
      >
        <ScrollButton
          icon="Prev"
          className={`w-6 h-6 text-primary`}
          disabled={currentIndex === 0}
          onClick={() => slidePrev()}
        />
        <div className="swiper max-w-[280px]" ref={thumbsSwiperRef}>
          <div className={classNames('swiper-wrapper', images.length < 4 && 'justify-center')}>
            {images.map((each: string, index: number) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    'swiper-slide cursor-pointer',
                    images.length < 4 && 'max-h-[80px] max-w-[60px]',
                  )}
                  onClick={() => slideToMain(index)}
                >
                  <img
                    onError={(e) => {
                      (e.target as HTMLImageElement).referrerPolicy = 'no-referrer';
                    }}
                    src={each}
                    alt={`${name} Thumb Image ${index}`}
                    className={`h-full max-h-[80px] max-w-[60px] object-cover rounded-md border
                        ${index === currentIndex ? ' border-primary' : ' border-secondary'}
                        `}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <ScrollButton
          icon="Next"
          className={`w-6 h-6 text-primary`}
          disabled={currentIndex === images.length - 1}
          onClick={() => slideNext()}
        />
      </div>
      <div
        className={classNames(
          'flex md:hidden w-[330px] flex-row justify-between m-0',
          isProductImage ? 'pt-0' : 'pt-2',
          images.length === 1 && 'hidden',
        )}
      >
        <div className="swiper w-[230px]">
          <div
            className={classNames(
              'swiper-wrapper items-center',
              images.length < 6 ? 'justify-center gap-4' : 'justify-evenly',
            )}
          >
            {images.map((each: string, index: number) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    'transition duration-250 cursor-pointer rounded-full',
                    index === currentIndex ? 'bg-primary w-4 h-4' : 'bg-gray-300 w-2 h-2',
                  )}
                  onClick={() => slideToMain(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ImageCarousel);
