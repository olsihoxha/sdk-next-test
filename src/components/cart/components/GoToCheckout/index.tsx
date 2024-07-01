import { FunctionalComponent } from 'preact';
import { useCallback, useMemo, useState } from 'preact/hooks';
import Element from './CheckoutButton';
import { useStyles } from '../../../common/context/ThemeContext/ThemeContext';
import { cart, setIsCartDialogOpen } from '@/signals/cart.signals';

const GoToCheckout: FunctionalComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const styles = useStyles();
  const onClick = useCallback(async () => {
    try {
      setIsLoading(true);
      const checkout = null; // await liquid?.checkout({ cartId: cart.id, loc }); TODO: Implet once Client SDK is ready
      if (checkout?.url && typeof window !== 'undefined') window.location.href = checkout?.url;
      setIsCartDialogOpen(false);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const style = useMemo(() => {
    const { text, general } = styles;
    return {
      fontFamily: text.body.font,
      borderRadius: general.element.corners === 'rounded' ? '' : 'unset',
      borderWidth: '1px',
      borderColor: general.footer.btnBorder,
      background: general.footer.btnBg,
      color: general.footer.btnText,
    };
  }, [styles]);

  const shape = useMemo(() => {
    const { general } = styles;
    return general.element.corners === 'rounded' ? 'circle' : 'none';
  }, [styles]);

  return (
    <Element
      disabled={cart.value.items.length === 0 || isLoading}
      style={style}
      shape={shape}
      isLoading={isLoading}
      onClick={onClick}
    />
  );
};

export default GoToCheckout;
