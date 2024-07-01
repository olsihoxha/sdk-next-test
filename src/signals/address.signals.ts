import { signal } from '@preact/signals';
import { ILocInterface } from '@liquidcommercedev/sdk';

export const loc = signal<ILocInterface>(null);

export function setLoc(value: ILocInterface) {
  loc.value = value;
}
