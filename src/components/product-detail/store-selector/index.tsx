import Element from './../page/components/StoreSelector';
import ThemeProvider from '../../common/context/ThemeContext/ThemeProvider';
import AppProvider from '../../common/context/AppContext/AppProvider';

import type { ProductDetailProps } from '../../../build-types';
import { parseBoolean } from '../../../functions/parseBoolean';

function StoreSelector({ upc, styles, useWidthFromWindow }: ProductDetailProps) {
  return (
    <AppProvider upc={upc} config={{ useWidthFromWindow: parseBoolean(useWidthFromWindow) }}>
      <ThemeProvider styles={styles}>
        <Element />
      </ThemeProvider>
    </AppProvider>
  );
}



export default StoreSelector;
