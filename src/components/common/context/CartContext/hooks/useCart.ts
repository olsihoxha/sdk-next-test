import { useContext } from 'preact/compat';
import { CartContext } from '@/components/common/context/CartContext/CartContext';

export function useCart() {
  const {
    handleCartBackButton,
    handleSingleRetailerClick,
    addToCart,
    updateCart,
    onClickContinueShopping,
    onCheckout,
    cartMode,
    header,
    footer,
    allowBackDrop,
    emptyCartText,
  } = useContext(CartContext);
  return {
    handleCartBackButton,
    handleSingleRetailerClick,
    addToCart,
    updateCart,
    onClickContinueShopping,
    onCheckout,
    cartMode,
    header,
    footer,
    allowBackDrop,
    emptyCartText,
  };
}
