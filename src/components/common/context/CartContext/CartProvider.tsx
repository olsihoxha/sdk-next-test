import type { ComponentChildren } from 'preact';
import { useCallback } from 'preact/compat';
import { carts, loc, setCart, setSelectedRetailerId, useClient } from '@/signals';
import { openCart, setCartLoad } from '@/signals/cart.signals';
import { CartContext, UpdateCartParams } from './CartContext';
import { useEffect } from 'preact/hooks';
import { loadCarts } from '@/functions/storage';

function CartProvider({
  children,
  cartMode,
  header,
  footer,
  onClickContinueShopping,
  onCheckout,
  allowBackDrop,
  emptyCartText,
  openDialogCartClick,
}: {
  children: ComponentChildren;
  cartMode?: 'standard' | 'dialog';
  header?: boolean;
  footer?: boolean;
  onClickContinueShopping?: () => void;
  onCheckout?: () => void;
  allowBackDrop?: boolean;
  emptyCartText?: string;
  openDialogCartClick?: () => void;
}) {
  const { client: liquid } = useClient();

  useEffect(() => {
    if (!liquid || !loc.value) return;

    const cartIds = loadCarts();
    Object.keys(cartIds).forEach((retailerId) => {
      if (carts.value[retailerId]) return;

      liquid.cart({ id: cartIds[retailerId], loc: loc.value }).then((cart) => {
        setCart(retailerId, cart);
      });
    });
  }, [liquid]);

  const addToCart = useCallback(
    async ({ retailerId, item }: UpdateCartParams) => {
      openCart();
      setCartLoad(true);

      if (!carts.value[retailerId]) {
        const updatedCart = await liquid.cart({
          items: [item],
          loc: loc.value,
        });
        setCart(retailerId, updatedCart);
        setCartLoad(false);
        openDialogCartClick?.();
        return;
      }

      const currentItem = carts.value[retailerId].items.find(
        ({ partNumber }) => partNumber === item.partNumber,
      );
      const updatedCart = await liquid.cart({
        id: carts.value[retailerId].id,
        items: [
          currentItem
            ? {
                id: currentItem.id,
                fulfillmentId: currentItem.fulfillmentId,
                partNumber: currentItem.partNumber,
                quantity: currentItem.quantity + item.quantity,
              }
            : item,
        ],
        loc: loc.value,
      });

      setCart(retailerId, updatedCart);
      setCartLoad(false);
      openDialogCartClick?.();
    },
    [liquid, openDialogCartClick],
  );

  const updateCart = useCallback(
    async ({ retailerId, item }: UpdateCartParams) => {
      openCart();
      setCartLoad(true);

      const updatedCart = await liquid.cart({
        id: carts.value[retailerId].id,
        items: [item],
        loc: loc.value,
      });

      if (updatedCart.quantity === 0) {
        setSelectedRetailerId(null);
      }

      setCart(retailerId, updatedCart);
      setCartLoad(false);
      openDialogCartClick?.();
    },
    [liquid, openDialogCartClick],
  );

  const handleSingleRetailerClick = useCallback((retailerId: string): void => {
    setSelectedRetailerId(retailerId);
  }, []);

  const handleCartBackButton = useCallback(() => {
    setSelectedRetailerId(null);
  }, []);

  return (
    <CartContext.Provider
      value={{
        handleCartBackButton,
        handleSingleRetailerClick,
        header,
        footer,
        addToCart,
        updateCart,
        cartMode,
        onClickContinueShopping,
        onCheckout,
        allowBackDrop,
        emptyCartText,
        openDialogCartClick,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
