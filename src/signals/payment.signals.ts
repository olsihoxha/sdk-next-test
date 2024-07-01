import { signal } from '@preact/signals';
import { IPaymentInterface } from '@/build-types';

type TokenType = { token: IPaymentInterface; forceValidation: () => void };

export const token = signal<TokenType>(null);

export const setToken = (value: TokenType) => {
  token.value = value;
};
