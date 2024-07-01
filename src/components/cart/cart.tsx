import { Loading } from '../shared';
import { FunctionalComponent } from 'preact';
import MulticartWraper from './components/MulticartWraper';
import SingleRetailer from './components/SingleRetailer';
import { cartLoad, selectedRetailerId } from '@/signals';
import { useEffect, useRef } from 'react';
import { useCart } from '../common/context/CartContext/hooks/useCart';
import { ILocInterface } from '@liquidcommercedev/sdk';
import { CartFooterTheme } from './components/CartFooter/theme';
import { GoToCheckoutTheme } from './components/GoToCheckout/theme';
import { MultiCartBodyTheme } from './components/MulticartBody/theme';
import { CartHeaderTheme } from './components/MultiCartHeader/theme';
import { MultiCartWrapperTheme } from './components/MulticartWraper/theme';
import { SingleRetailerTheme } from './components/SingleRetailer/theme';
import { SubtotalTheme } from './components/Subtotal/theme';

export interface CartTheme {
  root: {
    base: string;
    sub: string;
  };
  footer: CartFooterTheme;
  checkout: GoToCheckoutTheme;
  body: MultiCartBodyTheme;
  header: CartHeaderTheme;
  cartWrapper: MultiCartWrapperTheme;
  singleRetailer: SingleRetailerTheme;
  subtotal: SubtotalTheme;
}

export interface CartProps {
  theme?: Partial<CartTheme>;
  loc?: ILocInterface;
  mode: 'standard' | 'dialog';
  onCheckout?: () => void;
  header?: boolean;
  footer?: boolean;
  onClickContinueShopping?: () => void;
  useWidthFromWindow?: boolean;
  allowBackDrop?: boolean;
  emptyCartText?: string;
  closeDialogCart?: () => void;
  openDialogCartClick?: () => void;
}

export interface MultiCartProps {
  theme?: Partial<CartTheme>;
  closeDialogCart?: () => void;
}

const Multicart: FunctionalComponent<MultiCartProps> = ({ theme, closeDialogCart }) => {
  const cartRef = useRef<HTMLDivElement>(null);

  const { allowBackDrop } = useCart();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;

      if (!targetElement) {
        return;
      }
    };

    if (allowBackDrop) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      if (allowBackDrop) {
        document.removeEventListener('mousedown', handleOutsideClick);
      }
    };
  }, [cartRef, allowBackDrop]);

  return (
    <div ref={cartRef} className={theme?.root?.base}>
      <div className={theme?.root?.sub}>
        <Loading
          loading={cartLoad.value}
          asElement="div"
          type="cover"
          className="w-full"
          containerClass="border-none sm:rounded-[32px]"
        >
          {selectedRetailerId.value ? (
            <SingleRetailer closeDialogCart={closeDialogCart} />
          ) : (
            <MulticartWraper closeDialogCart={closeDialogCart} />
          )}
        </Loading>
      </div>
    </div>
  );
};

export default Multicart;
