import Element from './PlaceYourOrder';
import { useStyles } from '../../../common/context/ThemeContext/ThemeContext';
import { isLoading, readyToPlaceOrder } from '@/signals/checkout.signals';
import { useCheckout } from '@/components/common/context/CheckoutContext/hooks/useCheckout';
import { useCallback } from 'preact/compat';

interface PlaceYourOrderProps {
  onPlaceOrder: () => void;
}

function PlaceYourOrder({ onPlaceOrder }: PlaceYourOrderProps) {
  const styles = useStyles();
  const { completeCheckout } = useCheckout();

  const placeOrder = useCallback(async () => {
    if (readyToPlaceOrder.value) {
      await completeCheckout();
      onPlaceOrder();
    }
  }, [completeCheckout, onPlaceOrder]);

  return (
    <Element
      fontFamily={styles.fonts.family}
      disabled={!readyToPlaceOrder.value}
      label={isLoading.value ? 'Loading' : 'Place Your Order'}
      onClick={placeOrder}
    />
  );
}

export default PlaceYourOrder;
