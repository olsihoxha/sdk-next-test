import type { BannerProps } from '../../build-types';

import AppProvider from '../common/context/AppContext/AppProvider';
import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';
import Button from '../common/ui/Button/Button';
import Element from './components/Banner';

function Banner({ styles, bannerItems, onShopNow }: BannerProps) {
  //TODO: For now we use hardcoded data, until the API is developed
  // The structure of the data may change in the future.
  const staticBannerItems = [
    {
      imageSrc: 'https://storage.googleapis.com/liquid-platform/assets/liquid_ui/drink1.png',
      imageAlt: 'Description for Image 1',
      component: (
        <Button shape="round" variant="solid" onClick={() => onShopNow?.('sutter%20home')}>
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
          }}
          onClick={() => onShopNow?.('buchanan%27s')}
          className="hover:opacity-60"
        >
          Shop Now
        </Button>
      ),
    },
  ];

  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        <Element bannerItems={bannerItems ? bannerItems : staticBannerItems} />
      </ThemeProvider>
    </AppProvider>
  );
}



export default Banner;
