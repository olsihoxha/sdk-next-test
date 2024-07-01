import { ICheckout, ICheckoutAddressInfo, ICheckoutDeliveryTipDto } from '@liquidcommercedev/sdk';
import { computed, signal } from '@preact/signals';
import { cart } from '@/signals/cart.signals';
import { saveCheckouts } from '@/functions/storage';
import { token } from '@/signals/payment.signals';

export interface DeliveryInformation {
  email: string;
  canEmail: boolean;
  canSms: boolean;
  one: string;
  two?: string;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
}

export type PaymentDetails = ICheckoutAddressInfo & { cardName: string };

export const checkouts = signal<Record<string, ICheckout>>({});

export const checkout = computed<ICheckout | null>(() => checkouts.value[cart.value?.id] || null);
export const paymentDetails = signal<PaymentDetails>(null);
export const isLoading = signal<boolean>(false);
export const policyAgreed = signal<boolean>(false);
export const birthDate = signal<string | null>(null);
export const deliveryInformation = signal<Partial<DeliveryInformation> | null>(null);
export const isCheckout = signal<boolean>(false);
export const deliveryTips = signal<ICheckoutDeliveryTipDto[]>([]);

export const readyToPay = computed(() => {
  return (
    checkout.value &&
    !!checkout.value.shippingAddress?.email &&
    !!checkout.value.shippingAddress?.one
  );
});

export const readyToPlaceOrder = computed(() => {
  return (
    !isLoading.value &&
    policyAgreed.value &&
    checkout.value &&
    !!checkout.value.shippingAddress?.email &&
    !!checkout.value.shippingAddress?.birthDate &&
    token.value?.token &&
    token.value.token.token
  );
});

export function setCheckout(cartId: string, checkout: ICheckout) {
  const newValue = { ...checkouts.value, [cartId]: checkout };

  checkouts.value = newValue;
  saveCheckouts(
    Object.keys(newValue).reduce((acc, key) => ({ ...acc, [key]: newValue[key].token }), {}),
  );
}

export const setDeliveryTips = (value: ICheckoutDeliveryTipDto[]) => {
  deliveryTips.value = value;
};

export const setIsLoading = (value: boolean) => {
  isLoading.value = value;
};

export const setPolicyAgreed = (value: boolean) => {
  policyAgreed.value = value;
};

export const setBirthDate = (value: string) => {
  birthDate.value = value;
};

export const setDeliveryInformation = (value: Partial<DeliveryInformation>) => {
  deliveryInformation.value = value;
};

export const setIsCheckout = () => {
  isCheckout.value = !isCheckout.value;
};

export const setPaymentDetails = (value: PaymentDetails) => {
  paymentDetails.value = value;
};
