import { FunctionalComponent } from 'preact';
import ThemeProvider from '@/components/common/context/ThemeContext/ThemeProvider';
import Element from '@/components/checkout/components/index';
import AppProvider from '@/components/common/context/AppContext/AppProvider';

import type { CheckoutProps } from '@/build-types';
import CartProvider from '@/components/common/context/CartContext/CartProvider';

const CheckoutContainer: FunctionalComponent<CheckoutProps> = ({
  styles,
  mode,
  onPlaceOrder,
  onContinueShopping,
  closeDialogCart,
}) => {
  return (
    <AppProvider>
      <CartProvider>
        <ThemeProvider styles={styles}>
          <Element
            mode={mode}
            onPlaceOrder={onPlaceOrder}
            onContinueShopping={onContinueShopping}
            closeDialogCart={closeDialogCart}
          />
        </ThemeProvider>
      </CartProvider>
    </AppProvider>
  );
};



export default CheckoutContainer;
