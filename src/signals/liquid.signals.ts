import { signal } from '@preact/signals';
import { IClient } from '@liquidcommercedev/sdk';

export const client = signal<IClient>(null);

export function setLiquid(value: IClient) {
  client.value = value;
}

export function useClient() {
  return {
    client: client.value,
    setClient: (value: IClient) => {
      client.value = value;
    },
  };
}
