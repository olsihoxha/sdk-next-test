import Element from './components/ProductCarousel';
import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';
import AppProvider from '../common/context/AppContext/AppProvider';

import type { ProductCarouselProps } from '@/build-types';

function ProductCarousel({
  styles,
  category,
  retailer,
  onSeeAllClick,
  onCardClick,
}: ProductCarouselProps) {
  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        <Element
          category={category}
          retailer={retailer}
          onSeeAllClick={onSeeAllClick}
          onCardClick={onCardClick}
        />
      </ThemeProvider>
    </AppProvider>
  );
}



export default ProductCarousel;
