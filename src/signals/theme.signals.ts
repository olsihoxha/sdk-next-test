import { computed, signal } from '@preact/signals';
import { defaultTheme, LiquidUITheme } from '@/components/liquid-ui';
import { mergeDeep } from '@/functions';

const themeSignal = signal<LiquidUITheme>(null);
const globalTheme = computed(() => mergeDeep(defaultTheme, themeSignal.value));

export function setTheme(value: LiquidUITheme) {
  themeSignal.value = value;
}

export function getTheme() {
  return globalTheme.value;
}
