import { signal } from '@preact/signals';

export const engravingActive = signal<boolean>(false);
export const engravingMessage = signal<string[]>([]);

export function setEngravingActive(value: boolean) {
  engravingActive.value = value;
}

export function setEngravingMessage(value: string[]) {
  engravingMessage.value = value;
  engravingActive.value = false;
}
