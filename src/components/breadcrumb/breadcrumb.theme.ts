import { BreadcrumbTheme } from '@/components/breadcrumb/breadcrumb';

export const breadcrumbTheme: BreadcrumbTheme = {
  root: {
    base: 'flex flex-row gap-2.5 text-sm font-semibold leading-[21px] items-center',
    mobileBase: 'flex flex-row gap-2.5 text-sm leading-[21px] items-center',
  },
  item: {
    base: 'flex flex-row gap-2.5 items-center text-primary',
    chevron: 'w-4 h-4 stroke-[3px]',
    current: 'text-gray-500',
  },
};
