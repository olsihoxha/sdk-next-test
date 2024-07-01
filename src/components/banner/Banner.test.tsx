import { render } from '@testing-library/preact';
import Banner from './components/Banner';
import { items } from '@/atoms/swiper/BannerSwiper/BannerSwiper';

describe('Banner Component is rendered', () => {
  it('renders the banner component', () => {
    const { getByText } = render(<Banner bannerItems={items} />);
    const bannerText = getByText('Ad');

    expect(bannerText).toBeInTheDocument();
  });

  it('renders at least one button', () => {
    const { container } = render(<Banner bannerItems={items} />);
    const buttons = container.querySelectorAll('button');

    expect(buttons.length).toBeGreaterThan(0);
  });

  it('banner component props contain an array of objects', () => {
    const { getByTestId } = render(<Banner bannerItems={items} />);
    const bannerSwiperElement = getByTestId('liquid-banner');

    expect(bannerSwiperElement).toBeInTheDocument();
  });
});
