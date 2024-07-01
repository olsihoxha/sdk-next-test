import { FunctionalComponent } from 'preact';
import MulticartHeader from '../MultiCartHeader';
import MulticartBody from '../MulticartBody';
import CartFooter from '../CartFooter';
import { MulticartProps } from '@/build-types';
import { cartLoad, hasCart, closeCart, getTheme } from '@/signals';
import { useCart } from '@/components/common/context/CartContext/hooks/useCart';
import Button from '@/components/common/ui/Button';

const MulticartWraper: FunctionalComponent<MulticartProps> = ({ closeDialogCart }) => {
  const { cartWrapper } = getTheme().cart;
  const { header = true, footer = true, onClickContinueShopping, emptyCartText } = useCart();

  const handleClick = (e: MouseEvent) => {
    if (!onClickContinueShopping) {
      e.preventDefault();
      return;
    }
    onClickContinueShopping?.();
    closeCart();
    closeDialogCart?.();
  };

  return (
    // Had to add this div because the loader adds a div without classess
    <div className={cartWrapper.wrapper.height}>
      {header && <MulticartHeader closeDialogCart={closeDialogCart} />}

      {hasCart.value ? (
        <MulticartBody />
      ) : !cartLoad.value ? (
        <div className={cartWrapper.wrapper.main}>
          <p className={cartWrapper.text.empty}>There are no items in your cart</p>
          {/* TODO: change this when it is decided */}
          <Button
            variant="plain"
            disabled={!onClickContinueShopping}
            className="border-0 hover:bg-inherit"
            onClick={handleClick}
            style={{ padding: 0, textWrap: 'wrap' }}
          >
            <p className={cartWrapper.text.shopping}>{emptyCartText || 'Continue shopping'}</p>
          </Button>
        </div>
      ) : null}

      {footer && (
        <div className={cartWrapper.wrapper.sticky}>
          <CartFooter />
        </div>
      )}
    </div>
  );
};

export default MulticartWraper;
