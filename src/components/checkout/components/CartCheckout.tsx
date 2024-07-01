import Checkout from './Checkout';
import { useState } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import { CheckoutProps } from '@/build-types';
import Multicart from '../../cart/cart';
import { isCheckout, setIsCheckout } from '@/signals';

const CartCheckout: FunctionalComponent<CheckoutProps> = ({
  onPlaceOrder,
  onContinueShopping,
  closeDialogCart,
}) => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div className={`bg-white border border-white rounded-2xl w-full ${isClosed ? 'hidden' : ''}`}>
      <div
        className={`custom-transition transition-opacity duration-500 ease-in-out delay-300 ${
          isCheckout.value ? 'h-auto opacity-100 visible' : 'invisible h-0 opacity-0'
        }`}
      >
        <Checkout
          setCheckout={setIsCheckout}
          setIsClosed={setIsClosed}
          onPlaceOrder={onPlaceOrder}
          onContinueShopping={onContinueShopping}
        />
      </div>
      <div
        className={`custom-transition px-6 transition-opacity duration-500 ease-in-out delay-300 ${
          isCheckout.value
            ? 'h-0 opacity-0 invisible overflow-hidden'
            : 'visible h-auto opacity-100'
        }`}
      >
        <Multicart closeDialogCart={closeDialogCart} />
      </div>
    </div>
  );
};

export default CartCheckout;
