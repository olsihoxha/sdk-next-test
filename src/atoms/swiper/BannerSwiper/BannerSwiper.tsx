import { BannerItem } from '@/build-types';
import Swiper from './Swiper';
import { FunctionalComponent } from 'preact';
import Button from '@/components/common/ui/Button/Button';

interface BannerSwiperProps {
  bannerItems: BannerItem[];
}

//TODO: For now we use hardcoded data, until the API is developed
// The structure of the data may change in the future.
export const items = [
  {
    imageSrc: 'https://storage.googleapis.com/liquid-platform/assets/liquid_ui/drink1.png',
    imageAlt: 'Description for Image 1',
    component: (
      <Button shape="round" variant="solid">
        Shop Now
      </Button>
    ),
  },
  {
    imageSrc: 'https://storage.googleapis.com/liquid-platform/assets/liquid_ui/drink2.png',
    imageAlt: 'Description for Image 2',
    component: (
      <Button
        shape="round"
        variant="solid"
        style={{
          background: '#ff5a1f',
          color: '#fff',
        }}
      >
        Shop Now
      </Button>
    ),
  },
];

const BannerSwiper: FunctionalComponent<BannerSwiperProps> = ({ bannerItems }) => {
  return (
    <div className="w-full h-[244px] sm:h-[327px]" data-testid="banner-swiper">
      <Swiper items={bannerItems} />
    </div>
  );
};

export default BannerSwiper;
