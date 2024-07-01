import Element from './components/BrandCarousel';
import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';
import AppProvider from '../common/context/AppContext/AppProvider';

import type { BrandCarouselProps } from '../../build-types';

function BrandCarousel({ styles, onCardClick }: BrandCarouselProps) {
  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        <Element onCardClick={onCardClick} />
      </ThemeProvider>
    </AppProvider>
  );
}



export default BrandCarousel;
