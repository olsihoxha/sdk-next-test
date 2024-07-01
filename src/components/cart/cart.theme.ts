import { CartTheme } from './cart';

export const cartTheme: CartTheme = {
  root: {
    base: 'fixed right-0 bottom-0 h-dvh sm:h-screen sm:p-4 z-50',
    sub: 'flex flex-col items-start h-dvh sm:h-full w-screen sm:w-[480px] shadow-2xl border-none sm:rounded-[32px] bg-white min-h-[211px]',
  },
  footer: {
    wrapper: {
      main: 'flex items-center self-stretch p-4 sm:py-4 sm:px-8 sm:gap-6',
      sub: 'flex gap-6 items-start flex-1',
      wrapperWithoutTopPadding: 'pt-0 sm:pt-0',
      poweredByWrapper: 'flex flex-col justify-end items-start min-w-[56px]',
    },
    text: {
      powered: 'text-[10px] font-normal whitespace-nowrap',
      liquid: {
        text: 'font-["Poppins"] text-base font-semibold',
        dot: 'font-["Poppins"] text-base font-semibold text-[#0EA5E9]',
      },
      information: {
        text: 'text-[10px] font-normal text-right',
        color: 'text-primary',
      },
    },
  },
  checkout: {
    wrapper: {
      main: 'w-full',
      apply: 'w-full flex flex-row justify-between',
      input: 'pr-2 w-full text-black',
      subtotal: 'w-full py-2 flex justify-between items-center',
      promoCode: 'w-full py-2 flex justify-between items-center',
      logo: 'cursor-default inline-flex items-center bg-green-100 text-xs text-green-800 p-promo-badge ml-3 rounded-md',
    },
    price: {
      animation: 'custom-transition-opacity',
      text: 'flex flex-col justify-between items-center overflow-hidden',
      maxOppacity: 'opacity-100 h-auto',
      minOppacity: 'opacity-0 h-0',
    },
    form: {
      animation: 'custom-transition-opacity',
      text: 'w-full px-0 flex flex-row justify-between items-start overflow-hidden',
      maxOppacity: 'opacity-100 h-auto',
      minOppacity: 'opacity-0 h-0',
    },
    text: {
      havePromo: {
        animation: 'custom-transition-opacity',
        text: 'flex cursor-pointer mt-auto overflow-hidden color-primary text-xs sm:text-sm',
        maxOppacity: 'opacity-100',
        minOppacity: 'opacity-0 h-0 p-0',
      },
      base: 'md:text-sm sm:text-xs mr-1',
      promoCode: 'font-bold',
    },
    logo: {
      tag: 'mr-1',
      xmark: 'cursor-pointer ml-1 text-green-500',
    },
    button: {
      apply: 'color-primary mx-2 my-4',
    },
  },
  body: {
    wrapper: {
      main: 'flex flex-col py-4 px-6 gap-6 overflow-auto max-h-[calc(100dvh-133px)] sm:max-h-[calc(100dvh-175px)]',
      sub: 'flex flex-row items-center self-stretch gap-4 cursor-pointer',
      retailWrapper: 'flex flex-col items-start gap-1 flex-grow',
      textWrapper: 'flex flex-row justify-between items-center self-stretch',
    },
    text: {
      retailerName: 'font-bold text-sm sm:text-base',
      items: 'font-normal text-xs sm:text-sm',
      price: 'font-normal text-xs sm:text-sm',
    },
    logo: {
      chevronRightIcon: 'stroke-black w-6 h-6 stroke-2 min-w-[24px]',
      retailIcon: 'w-8 h-auto sm:w-12 sm:h-auto min-w-[32px]',
    },
  },
  header: {
    wrapper: {
      main: 'flex items-center px-4 sm:px-6 pt-4 pb-2 sm:pb-4 gap-2 sm:gap-4 py-4 self-stretch',
      sub: 'flex items-center gap-4 flex-1',
      retailIcon: {
        main: 'hidden sm:block',
        sub: 'w-10 h-10  min-w-[40px]',
      },
    },
    text: {
      retailerName: 'font-bold text-base sm:text-lg flex-1 sm:truncate sm:max-w-[296px]',
      title: 'font-bold text-xl sm:text-2xl flex-1',
    },
    logo: {
      heroIcon: 'stroke-black w-6 h-6 stroke-2 min-w-[24px]',
      shoppingIcon: 'w-8 h-auto sm:w-10 sm:h-auto min-w-[32px]',
    },
    button: {
      base: 'border-none bg-none p-0',
    },
  },
  cartWrapper: {
    wrapper: {
      main: 'flex flex-col h-[120px] py-4 px-6 justify-center items-center gap-2 self-stretch',
      height: 'mobile-height sm:min-h-[calc(100dvh-112px)]',
      sticky: 'sticky top-[100dvh]',
    },
    text: {
      shopping: 'font-normal text-xs sm:text-sm text-center text-primary',
      empty: 'font-bold text-sm sm:text-base self-stretch text-center',
    },
  },
  singleRetailer: {
    wrapper: {
      main: 'flex flex-col items-start gap-4 sm:gap-6 self-stretch p-4 sm:py-0 sm:px-6',
      sub: 'flex flex-row self-stretch pt-3 items-start gap-2 min-w-[312px] rounded-lg sm:rounded-2xl bg-secondary',
      height: 'mobile-height sm:min-h-[calc(100dvh-112px)]',
      sticky: 'sticky top-[100dvh]',
      scroll:
        'overflow-y-auto h-[calc(100dvh-187px)] sm:h-[calc(100dvh-323px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',
      image: 'flex flex-col max-w-16 sm:max-w-24 justify-center items-center rounded',
      productInfo: 'flex flex-col items-start gap-1 flex-1',
      size: 'flex items-start self-stretch',
      badge: {
        main: 'flex items-center self-stretch',
        sub: 'flex justify-center py-1 px-[6px] items-center gap-1 rounded-md border border-solid border-primary',
        image: 'w-4 h-auto min-w-[16px]',
      },
      controls: {
        main: 'flex justify-between items-center self-stretch sm:h-8',
        inputs: 'flex justify-center items-center',
      },
      icon: 'w-4 h-4 sm:w-5 sm:h-5 min-w-[16px]',
      price: 'flex flex-col items-end',
    },
    heroIcons: {
      trash:
        'stroke-primary w-4 h-4 sm:h-5 stroke-2 min-w-[16px] min-h-[16px] sm:min-w-[20px] sm:min-h-[20px]',
      minus:
        'stroke-primary w-4 h-4 sm:h-5 stroke-2 min-w-[16px] min-h-[16px] sm:min-w-[20px] sm:min-h-[20px]',
      plus: 'stroke-primary w-4 h-4 sm:h-5 stroke-2 min-w-[16px] min-h-[16px] sm:min-w-[20px] sm:min-h-[20px]',
    },
    image: 'w-16 sm:w-24',
    text: {
      name: 'font-bold text-xs sm:text-base',
      size: 'text-xs font-normal sm:text-sm text-default',
      fulfillment: 'font-["Montserrat"] font-bold text-center text-[10px] sm:text-xs text-primary',
      quantity: 'w-8 sm:w-12 font-normal text-xs sm:text-sm text-center text-default',
      productPrice: 'font-bold text-xs sm:text-base',
      engraving: {
        text: 'font-["Poppins"] text-[10px] sm:text-[11px]',
        personalization: 'font-normal',
        fee: 'font-bold',
      },
    },
    button: {
      base: 'flex w-6 h-6 sm:w-8 sm:h-8 justify-center items-center rounded-full bg-[#FFF]',
    },
    readonly: {
      readonlyWrapper: 'flex gap-1 justify-between self-strech w-full',
      readonlyTrue: 'flex-row',
      readonlyFalse: 'flex-col',
    },
  },
  subtotal: {
    wrapper: {
      main: 'flex flex-col p-4 pt-6 sm:p-6 sm:pb-4 items-center sm:items-start',
      sub: 'flex flex-col items-start self-stretch gap-2 sm:gap-4 max-w-[473px]',
    },
  },
};
