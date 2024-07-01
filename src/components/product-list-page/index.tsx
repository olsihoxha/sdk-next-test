import Element from './components/ProductListPage';
import { FC } from 'preact/compat';

import { LiquidPLPProps } from '../../build-types';
import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';
import AppProvider from '../common/context/AppContext/AppProvider';

const ProductListPage: FC<LiquidPLPProps> = ({
  styles,
  catalogParams,
  onCardClick,
  breadcrumbCurrent,
  breadcrumbCatPaths,
}: LiquidPLPProps) => {
  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        <Element
          catalogParams={catalogParams}
          onCardClick={onCardClick}
          breadcrumbCurrent={breadcrumbCurrent}
          breadcrumbCatPaths={breadcrumbCatPaths}
        />
      </ThemeProvider>
    </AppProvider>
  );
};


export default ProductListPage;
