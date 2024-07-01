import Element from './BannerSwiper';
import register from '../../../register';
import ThemeProvider from '../../../components/common/context/ThemeContext/ThemeProvider';
import { BannerItem } from '@/build-types';
import { FunctionalComponent } from 'preact';

interface BannerSwiperProps {
  style?: any;
  bannerItems: BannerItem[];
}

const BannerSwiper: FunctionalComponent<BannerSwiperProps> = ({ style, bannerItems }) => {
  return (
    <ThemeProvider styles={style}>
      <Element bannerItems={bannerItems} />
    </ThemeProvider>
  );
};
register(BannerSwiper, 'liquid-banner-swiper', ['bannerItems'], { shadow: true });

export default BannerSwiper;
