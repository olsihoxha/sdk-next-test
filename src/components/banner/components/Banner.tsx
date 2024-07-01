import BannerSwiper from '../../../atoms/swiper/BannerSwiper';
import AdBadge from './AdBadge';
import { BannerItem } from '@/build-types';
import { FunctionalComponent } from 'preact';

interface BannerProps {
  bannerItems: BannerItem[];
}

const Banner: FunctionalComponent<BannerProps> = ({ bannerItems }) => {
  return (
    <>
      <div className="flex flex-col h-[311px] items-end gap-2 w-full" data-testid="liquid-banner">
        <div className="flex justify-end items-center self-stretch gap-[10px]">
          <AdBadge label="Ad" />
        </div>
        <BannerSwiper bannerItems={bannerItems} />
      </div>
    </>
  );
};

export default Banner;
