import { createContext, useContext } from 'preact/compat';
import { SIZES } from '../../type/constants';
import { Styles } from '../../../../types';

export interface IThemeContext {
  styles: Styles;
  config: {
    themeColor: string;
    direction: string;
    mode: string;
    locale: string;
    primaryColorLevel: number;
    cardBordered: boolean;
    controlSize: string;
    navMode: string;
    layoutType: string;
  };
}

export const defaultValue: IThemeContext = {
  styles: {
    colors: { primary: '#1F5EA9', bg: { primary: '#FFFFFF', secondary: '#F4F9FD' } }, // remove
    fonts: { color: '#1E293B', family: 'Poppins' }, // remove
    rounded: true, // remove
    text: {
      headings: {
        font: 'Poppins',
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
  config: {
    themeColor: 'indigo',
    direction: 'ltr',
    mode: 'light',
    locale: 'en',
    primaryColorLevel: 600,
    cardBordered: false,
    controlSize: SIZES.MD,
    navMode: 'light',
    layoutType: 'simple',
  },
};
export const ThemeContext = createContext<IThemeContext>(defaultValue);

export function useStyles() {
  const context = useContext(ThemeContext);
  return context.styles;
}

export function useConfig() {
  const context = useContext(ThemeContext);
  return context.config;
}
