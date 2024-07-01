import { defineConfig } from '@twind/core';
import presetAutoPrefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetExt from '@twind/preset-ext';

import presetTypography from '@twind/preset-typography';
import presetLineClamp from '@twind/preset-line-clamp';

//https://github.com/tw-in-js/twind/issues/437#issue-1532077112
const presetRemToPx = ({ baseValue = 16 } = {}) => {
  return {
    finalize(rule) {
      return {
        ...rule,
        d: rule.d?.replace(/"[^"]+"|'[^']+'|url\([^)]+\)|(-?\d*\.?\d+)rem/g, (match, p1) => {
          if (p1 === undefined) return match;
          return `${p1 * baseValue}${p1 == 0 ? '' : 'px'}`;
        }),
      };
    },
  };
};
export default defineConfig({
  presets: [
    presetAutoPrefix(),
    presetTailwind(),
    presetTypography(),
    presetLineClamp(),
    presetRemToPx(),
    presetExt(),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        xxs: '0.625rem',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        sans: [
          'Poppins',
          'Inter',
          'Lato',
          '"Open Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Merriweather',
          'Times',
          'serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      colors: {
        primary: 'rgb(var(--liquid-ui-color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--liquid-ui-color-secondary) / <alpha-value>)',
        main: 'rgb(var(--liquid-ui-color-main) / <alpha-value>)',
        default: 'rgb(var(--liquid-ui-color-default) / <alpha-value>)',
      },
      screens: {
        xs: '360px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  rules: [
    ['avatar-rounded', 'rounded-md'],
    ['avatar-square', 'rounded-none'],
    ['avatar-circle', 'rounded-full'],
    ['avatar-inner-sm', 'h-8'],
    ['avatar-inner-md', 'h-10'],
    ['avatar-inner-lg', 'h-12'],
    ['avatar', 'inline-block relative bg-gray-400 dark:bg-gray-600 text-gray-100'],
    ['avatar-xs', 'w-5 h-5 leading-5'],
    ['avatar-sm', 'w-8 h-8 leading-8'],
    ['avatar-md', 'w-10 h-10 leading-10'],
    ['avatar-lg', 'w-12 h-12 leading-10'],
    ['avatar-icon-sm', 'text-lg'],
    ['avatar-icon-md', 'text-xl'],
    ['avatar-icon-lg', 'text-2xl'],
    ['avatar-string', 'absolute origin-center left-2/4 flex items-center'],
    ['avatar-img', 'block w-full h-full object-cover'],
    ['avatar-icon', 'flex items-center justify-center h-full'],
    ['button', 'font-semibold focus:outline-none whitespace-nowrap'],
    [
      'input',
      'border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:outline-none focus:ring-1 focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out',
    ],
    ['input::placeholder', 'text-gray-400'],
    ['input-invalid', 'ring-1 ring-red-500 border-red-500'],
    ['input-lg', 'text-lg'],
    [
      'input-addon',
      'flex items-center px-4 rounded-md border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700',
    ],
    [
      'input-textarea',
      {
        minHeight: '7rem',
      },
    ],
    ['input-wrapper', 'relative w-full flex'],
    ['input-disabled', 'bg-gray-100 dark:bg-gray-700  text-gray-400 cursor-not-allowed'],
    ['input-disabled::placeholder', 'opacity-70'],
    [
      'input-suffix-start',
      'absolute top-2/4 transform -translate-y-2/4 ltr:left-2.5 rtl:right-2.5',
    ],
    [
      'input-suffix-end',
      'absolute top-2/4 transform -translate-y-2/4 ltr:right-2.5 rtl:left-2.5 flex',
    ],
    ['h5', 'text-lg font-semibold text-gray-900 dark:text-gray-100'],
    ['h6', 'text-base font-semibold text-gray-900 dark:text-gray-100'],
    [
      'preserve-3d',
      {
        transformStyle: 'preserve-3d',
      },
    ],
    [
      'perspective',
      {
        perspective: '1000px',
      },
    ],
    [
      'opacity-0',
      {
        opacity: '0',
      },
    ],
    [
      'custom-transition-opacity',
      {
        transition: 'all 0.3s ease-in-out',
      },
    ],
    [
      'color-primary', //TODO remove this
      {
        color: '#1F5EA9',
      },
    ],
    [
      'p-promo-badge',
      {
        padding: '2px 10px',
      },
    ],
    [
      'rounded-4xl', //TODO fix this, it doesn't work! Maybe one way to do it is to add ['4xl': '2rem'] as a class and use it on the project as rounded-4xl
      {
        borderRadius: '2rem',
      },
    ],
    [
      'rounded-b-4xl',
      {
        borderBottomLeftRadius: '2rem',
        borderBottomRightRadius: '2rem',
      },
    ],
    [
      'rounded-t-4xl',
      {
        borderTopLeftRadius: '2rem',
        borderTopRightRadius: '2rem',
      },
    ],
  ],
});
