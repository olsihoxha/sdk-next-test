import Element from './components/CategoryCarousel';
import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';
import AppProvider from '../common/context/AppContext/AppProvider';

import type { CategoryCarouselProps } from '../../build-types';

function CategoryCarousel({ styles, onCardClick }: CategoryCarouselProps) {
  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        <Element onCardClick={onCardClick} />
      </ThemeProvider>
    </AppProvider>
  );
}


export default CategoryCarousel;
