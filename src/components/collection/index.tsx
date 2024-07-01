import Element from './Collection';
import AppProvider from '../common/context/AppContext/AppProvider';

import type { CollectionProps } from '@/build-types';

function Collection({ styles, category, onSeeAllClick, onCardClick }: CollectionProps) {
  return (
    <AppProvider>
      <Element
        category={category}
        styles={styles}
        onSeeAllClick={onSeeAllClick}
        onCardClick={onCardClick}
      />
    </AppProvider>
  );
}


export default Collection;
