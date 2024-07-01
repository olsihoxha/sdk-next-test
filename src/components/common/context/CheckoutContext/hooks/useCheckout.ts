
import {
  cart,
  checkout,
  checkouts,
  selectedRetailerId,
  setCart,
  setCheckout,
  setDeliveryInformation,
  setIsLoading,
  setOrder,
  token,
  useClient,
} from '@/signals';
import { useCallback } from 'preact/compat';
import { ICartRequest, ICheckoutParams } from '@liquidcommercedev/sdk';
import { useEffect } from 'preact/compat';
import { loadCheckouts } from '@/functions';

export function useCheckout() {
  const { client } = useClient();


  useEffect(() => {
    if (!client) return;

    const checkoutIds = loadCheckouts();
    Object.keys(checkoutIds).forEach((cartId) => {
      if (checkouts.value[cartId]) return;

      client.checkout.prepare({ cartId: checkoutIds[cartId] }).then((checkout) => {
        setCheckout(cartId, checkout);
      });
    });
  }, [client]);

  const startCheckout = useCallback(
    async (cartId: string) => {
      if (!client) return null;

      const checkout = await client.checkout.prepare({ cartId });
      setCheckout(cartId, checkout);
      setDeliveryInformation({
        ...checkout.shippingAddress,
        ...checkout.marketingPreferences,
      });

      return checkout;
    },
    [client],
  );

  const updateCheckout = useCallback(
    async (update: Omit<ICheckoutParams, 'token' | 'cartId'>) => {
      if (!client) return null;

      try {
        setIsLoading(true);
        const updatedCheckout = await client.checkout.prepare({
          ...checkout.value,
          ...update,
        });

        setCheckout(checkout.value.cartId, updatedCheckout);
        setIsLoading(false);

        return updatedCheckout;
      } catch (e) {
        console.error(e);
        setIsLoading(false);
        return null;
      }
    },
    [client],
  );

  const completeCheckout = useCallback(async () => {
    if (!client) return null;

    const confirmedCheckout = await client.checkout.complete({
      token: checkout.value.token,
      payment: token.value.token as any,
    });

    setOrder(confirmedCheckout);

    return confirmedCheckout;
  }, [client]);

  const updateCart = useCallback(
    async (update: ICartRequest) => {
      if (!client) return null;

      try {
        setIsLoading(true);

        const updatedCart = await client.cart({
          id: checkout.value.cartId,
          loc: cart.value.loc,
          ...update,
        });

        setCart(selectedRetailerId.value, updatedCart);
        await updateCheckout({});

        setIsLoading(false);
        return updatedCart;
      } catch (e) {
        console.error(e);
        setIsLoading(false);
        return null;
      }
    },
    [client, updateCheckout],
  );

  return {
    startCheckout,
    updateCheckout,
    completeCheckout,
    updateCart,
  };
}
