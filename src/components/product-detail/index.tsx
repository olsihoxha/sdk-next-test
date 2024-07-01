import Element from './page';
import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';
import AppProvider from '../common/context/AppContext/AppProvider';

import type { ProductDetailProps } from '@/build-types';
import { parseBoolean } from '@/functions/parseBoolean';
import CartProvider from '@/components/common/context/CartContext/CartProvider';

function ProductDetail({
  upc,
  styles,
  useWidthFromWindow,
  openDialogCartClick,
}: ProductDetailProps) {
  return (
    <AppProvider upc={upc} config={{ useWidthFromWindow: parseBoolean(useWidthFromWindow) }}>
      <ThemeProvider styles={styles}>
        <CartProvider cartMode="standard">
          <Element openDialogCartClick={openDialogCartClick} />
        </CartProvider>
      </ThemeProvider>
    </AppProvider>
  );
}



export default ProductDetail;
