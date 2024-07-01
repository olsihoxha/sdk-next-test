import Element from './PromoLoader';
import { useState } from 'preact/compat';
import { useCheckout } from '@/components/common/context/CheckoutContext/hooks/useCheckout';
import { cart, loadedCodes } from '@/signals';

function PromoLoader() {
  const [promoCode, setPromoCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { updateCart } = useCheckout();

  const applyPromoCode = async () => {
    setErrorMessage('');
    setLoading(true);
    try {
      if (cart.value.attributes.promoCode.value === promoCode) {
        setErrorMessage('This code has already been applied');
        return;
      }

      await updateCart({ promoCode });
      setPromoCode(null);
    } catch (e) {
      setErrorMessage(e);
    } finally {
      setLoading(false);
    }
  };

  const removePromoCode = async (value: string) => {
    if (cart.value.attributes.promoCode.value === value) {
      await updateCart({ promoCode: null });
    } else {
      await updateCart({
        giftCards: cart.value.attributes.giftCards
          .map(({ code }) => code)
          .filter((card) => card !== value),
      });
    }
  };

  return (
    <Element
      promoCode={promoCode}
      setPromoCode={setPromoCode}
      errorMessage={errorMessage}
      loading={loading}
      applyPromoCode={applyPromoCode}
      removePromoCode={removePromoCode}
      loadedCodes={loadedCodes.value}
    />
  );
}

export default PromoLoader;
