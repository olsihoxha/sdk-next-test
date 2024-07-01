import type { LiquidBraintree, LiquidPayment, PaymentProps } from '@/build-types';

import { createElement } from 'preact';
import { useRef } from 'preact/hooks';
import { forwardRef } from 'preact/compat';
import { checkout } from '@/signals';

const BraintreeElement = forwardRef((props: { slot: string }, ref) =>
  createElement('liquid-braintree-form' as any, { ref, ...props }),
);
const PaymentElement = forwardRef((props: PaymentProps, ref) =>
  createElement('liquid-payment-form' as any, { ref, ...props }),
);

function Payment({ styles, disabled }: PaymentProps) {
  const elementRef = useRef<LiquidPayment & { token: string }>(null);
  const paymentFormRef = useRef<LiquidBraintree>(null);

  return (
    <PaymentElement
      ref={elementRef}
      styles={styles}
      disabled={disabled === false || !checkout.value || !checkout.value.shippingAddress.email}
    >
      <BraintreeElement ref={paymentFormRef} slot="payment-form" />
    </PaymentElement>
  );
}


export default Payment;
