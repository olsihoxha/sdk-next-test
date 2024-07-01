import { FC, useCallback } from 'preact/compat';
import PromoCode from '../GoToCheckout/PromoCodeInput';
import GoToCheckout from '../GoToCheckout/CheckoutButton';
import { cart, getTheme, setCartLoad, setIsCheckout } from '@/signals';
import { useCheckout } from '@/components/common/context/CheckoutContext/hooks/useCheckout';
import { useCart } from '@/components/common/context/CartContext/hooks/useCart';
import { closeCart } from '@/signals/cart.signals';

interface Props {
  showPromo?: boolean;
  closeDialogCart?: () => void;
}

const Subtotal: FC<Props> = ({ showPromo = false, closeDialogCart }) => {
  const { subtotal } = getTheme().cart;
  const { startCheckout } = useCheckout();
  const { onCheckout } = useCart();

  const internalOnCheckout = useCallback(async () => {
    try {
      setCartLoad(true);
      await startCheckout(cart.value.id);
      setIsCheckout();
      onCheckout();
      closeCart();
      closeDialogCart?.();
    } catch (e) {
      console.error(e);
      closeDialogCart?.();
    }
    setCartLoad(false);
  }, [closeDialogCart, onCheckout, startCheckout]);

  return (
    <div className={subtotal.wrapper.main}>
      <div className={subtotal.wrapper.sub}>
        {showPromo && <PromoCode />}
        <GoToCheckout
          onClick={internalOnCheckout}
          disabled={false}
          isLoading={false}
          style={{
            borderRadius: '6rem',
            background: '#1F5EA9',
          }}
          shape="round"
        />
      </div>
    </div>
  );
};

export default Subtotal;
