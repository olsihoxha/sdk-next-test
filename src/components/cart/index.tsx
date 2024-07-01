import { FunctionalComponent } from 'preact';
import DialogWrapper from '../common/ui/DialogWrapper';

import Element, { CartProps } from './cart';
import { parseBoolean } from '@/functions/parseBoolean';
import CartProvider from '../common/context/CartContext/CartProvider';
import { getTheme, isCartDialogOpen } from '@/signals';
import { mergeDeep } from '@/functions';
import { cartTheme } from './cart.theme';

const Cart: FunctionalComponent<CartProps> = ({
  theme: customTheme,
  header = true,
  footer = true,
  mode,
  onClickContinueShopping,
  onCheckout,
  allowBackDrop = true,
  emptyCartText,
  closeDialogCart,
  openDialogCartClick,
}) => {
  if (!isCartDialogOpen.value) return;

  const theme = mergeDeep(mergeDeep(cartTheme, getTheme().cart), customTheme);

  return (
    <CartProvider
      cartMode={mode}
      header={parseBoolean(header)}
      footer={parseBoolean(footer)}
      onClickContinueShopping={onClickContinueShopping}
      onCheckout={onCheckout}
      allowBackDrop={parseBoolean(allowBackDrop)}
      emptyCartText={emptyCartText}
      openDialogCartClick={openDialogCartClick}
    >
      {mode === 'dialog' ? (
        <DialogWrapper>
          <Element theme={theme} closeDialogCart={closeDialogCart} />
        </DialogWrapper>
      ) : (
        <Element theme={theme} closeDialogCart={closeDialogCart} />
      )}
    </CartProvider>
  );
};



export type { CartTheme, CartProps } from './cart';

export default Cart;
