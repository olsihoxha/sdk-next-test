import Element from './components/Delivery';
import AppProvider from '../common/context/AppContext/AppProvider';
import { useCheckout } from '@/components/common/context/CheckoutContext/hooks/useCheckout';
import { useCallback, useState } from 'preact/compat';
import { deliveryInformation, setDeliveryInformation } from '@/signals';
import CartProvider from '@/components/common/context/CartContext/CartProvider';

function DeliveryInfo() {
  const { updateCheckout } = useCheckout();

  const deliveryInfo = { ...deliveryInformation.value };
  const optionalFields = ['two'];
  optionalFields.forEach((optionalField) => {
    delete deliveryInfo[optionalField];
  });
  const isInfoSet = Object.values(deliveryInfo).indexOf('') > -1;

  const [showCollapse, setShowCollapse] = useState(!isInfoSet);

  const onSubmit = useCallback(
    async (formData) => {
      const checkout = await updateCheckout({
        recipient: formData,
        marketingPreferences: {
          canEmail: !!formData.canEmail,
          canSms: false,
        },
      });
      setDeliveryInformation({
        ...checkout.shippingAddress,
        ...formData,
        ...checkout.marketingPreferences,
      });
      setShowCollapse(true);
    },
    [updateCheckout],
  );

  return (
    <AppProvider>
      <CartProvider>
        <Element
          onSubmit={onSubmit}
          showCollapse={showCollapse}
          setShowCollapse={setShowCollapse}
        />
      </CartProvider>
    </AppProvider>
  );
}

export default DeliveryInfo;
