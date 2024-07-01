import { render } from '@testing-library/preact';
import BannerSwiper, { items } from './BannerSwiper';

describe('Banner Swipper Component is rendered', () => {
  it('banner swipper component props contain an array of objects', () => {
    const { getByTestId } = render(<BannerSwiper bannerItems={items} />);
    const bannerSwiperElement = getByTestId('banner-swiper');

    expect(bannerSwiperElement).toBeInTheDocument();
  });
});
