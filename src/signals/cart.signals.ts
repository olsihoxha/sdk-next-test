import { computed, signal } from '@preact/signals';
import { ICart } from '@liquidcommercedev/sdk';
import { saveCarts } from '@/functions/storage';

export const carts = signal<Record<string, ICart>>({});

export const cartItemCount = computed<number>(
  () =>
    (Object.keys(carts.value).length > 0 &&
      Object.values(carts.value)
        .map((cart) => cart.quantity)
        .reduce((acc, val) => acc + val, 0)) ||
    0,
);

export const hasCart = computed<boolean>(
  () =>
    Object.keys(carts.value).length > 0 &&
    Object.values(carts.value).some((cart) => cart.quantity > 0),
);

export const selectedRetailerId = signal<string | null>(null);

export const cart = computed<ICart | null>(() => carts.value[selectedRetailerId.value] || null);

export const cartLoad = signal<boolean>(false);

export const isCartDialogOpen = signal<boolean>(false);

export const loadedCodes = computed(() => {
  const codes = [];
  if (cart.value.attributes?.promoCode?.value) {
    codes.push({ type: 'promocode', value: cart.value.attributes.promoCode.value });
  }

  if (cart.value.attributes?.giftCards?.length) {
    codes.push(...cart.value.attributes.giftCards.map((value) => ({ type: 'giftcard', value })));
  }

  return codes;
});

export function setCart(retailerId: string, cart: ICart) {
  const newValue = { ...carts.value, [retailerId]: cart };

  carts.value = newValue;
  saveCarts(Object.keys(newValue).reduce((acc, key) => ({ ...acc, [key]: newValue[key].id }), {}));
}

export function setSelectedRetailerId(value: string) {
  selectedRetailerId.value = value;
}

export function setCartLoad(value: boolean) {
  cartLoad.value = value;
}

export function setIsCartDialogOpen(value: boolean) {
  isCartDialogOpen.value = value;
}

export function closeCart(): void {
  isCartDialogOpen.value = false;
}

export function openCart(): void {
  isCartDialogOpen.value = true;
}
