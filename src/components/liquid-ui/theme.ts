import { BreadcrumbTheme } from '../breadcrumb';
import { breadcrumbTheme } from '@/components/breadcrumb/breadcrumb.theme';
import { CartTheme } from '../cart';
import { cartTheme } from '@/components/cart/cart.theme';

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export type ThemeRgbColor = [IntRange<0, 256>, IntRange<0, 256>, IntRange<0, 256>];

export interface LiquidUIColors {
  primary: ThemeRgbColor;
  secondary: ThemeRgbColor;
  main: ThemeRgbColor;
  default: ThemeRgbColor;
}

export interface LiquidUITheme {
  colors: LiquidUIColors;
  breadcrumbs?: BreadcrumbTheme;
  cart?: CartTheme;
}

export const defaultColors: LiquidUIColors = {
  primary: [31, 94, 169] as ThemeRgbColor,
  secondary: [240, 246, 252] as ThemeRgbColor,
  main: [255, 255, 255] as ThemeRgbColor,
  default: [51, 51, 51] as ThemeRgbColor,
};

export const defaultTheme: LiquidUITheme = {
  colors: defaultColors,
  breadcrumbs: breadcrumbTheme,
  cart: cartTheme,
};
