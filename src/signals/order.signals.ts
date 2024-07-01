import { IOrderConfirmation } from '@liquidcommercedev/sdk';
import { signal } from '@preact/signals';

export const order = signal<IOrderConfirmation>(null);
export function setOrder(value: IOrderConfirmation) {
  order.value = value;
}
