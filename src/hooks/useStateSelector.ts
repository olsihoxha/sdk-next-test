import { ICart, LiquidCommerceClient } from '@liquidcommercedev/sdk';
import { ShopStyles } from '../types';

export default function useStateSelector(): {
  cart: ICart;
  cartLoad: boolean;
  cartQuantity: number;
  address: {
    name?: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zipCode: string;
  };
  liquid: LiquidCommerceClient;
  cartToggle: boolean;
} & ShopStyles {
  return {
    cartLoad: false,
    cartQuantity: 1,
    styles: {
      colors: { primary: '#1F5EA9', bg: { primary: '#FFFFFF', secondary: '#F4F9FD' } },
      fonts: { color: '#1E293B', family: 'Poppins' },
      rounded: true,
      text: {
        headings: {
          font: 'Oswald',
          color: '#000',
        },
        body: {
          font: 'Oswald',
          color: '#000',
        },
        hyperlink: {
          font: 'Oswald',
          color: '#1B574D',
        },
      },
      components: {
        qtyElement: {
          type: '-/+',
          active: true,
          text: '#FFF',
          bg: '#1B574D',
          border: '#1B574D',
          btnText: '#FFF',
          btnBg: '#1B574D',
          btnBorder: '#1B574D',
        },
        cartItem: {
          imgBorder: {
            active: true,
            border: '#1B574D',
          },
          bg: '#1B574D11',
          border: '#f1f5f9',
        },
        overlay: {
          btnSave: {
            text: '#FFF',
            bg: '#1B574D',
            border: '#1B574D',
          },
          btnCancel: {
            text: '#1B574D',
            bg: '#EF444400',
            border: '#1B574D',
          },
        },
        alerts: {
          text: '#60A5FA',
          bg: '#F0F9FF',
          border: '#F0F9FF',
        },
      },
      general: {
        header: {
          text: '#FFF',
          bg: '#1B574D',
          border: '#1B574D',
          btnText: '#1B574D',
          btnBg: '#FFF',
          btnBorder: '#1B574D',
        },
        footer: {
          text: '#FFF',
          bg: '#1B574D',
          border: '#1B574D',
          btnText: '#1B574D',
          btnBg: '#FFF',
          btnBorder: '#1B574D',
        },
        element: {
          corners: 'sharp',
          bg: '#FFFFFF',
          border: '#D1D',
          liquidLegal: true,
        },
        engraving: {
          active: false,
        },
      },
    },
  } as any;
}
