import { FunctionalComponent } from 'preact';
import Element from './components/ItemsCount';
import type { ItemsCountProps } from '@/build-types';

import CartProvider from '@/components/common/context/CartContext/CartProvider';
import ThemeProvider from '@/components/common/context/ThemeContext/ThemeProvider';

const LiquidItemsCount: FunctionalComponent<ItemsCountProps> = ({
  styles,
  count,
  bgColor,
  openDialogCartClick,
}) => {
  return (
    <CartProvider>
      <ThemeProvider styles={styles}>
        <Element count={count} bgColor={bgColor} openDialogCartClick={openDialogCartClick} />
      </ThemeProvider>
    </CartProvider>
  );
};



export default LiquidItemsCount;
