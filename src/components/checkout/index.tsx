
import type { CheckoutProps, LiquidCheckout, LiquidPayment, PaymentProps } from '@/build-types';
import { Component, createElement, createRef, FunctionalComponent, RefObject } from 'preact';
import { ForwardedRef, forwardRef } from 'preact/compat';
import { useRef } from 'preact/hooks';

class CheckoutContainerElement extends Component<CheckoutProps> {
  private elementRef: RefObject<LiquidCheckout>;

  constructor(props: CheckoutProps) {
    super(props);
    this.elementRef = createRef();
  }

  componentDidUpdate(prevProps: CheckoutProps) {
    const { styles, mode, onPlaceOrder, onContinueShopping, closeDialogCart } = this.props;
    if (this.elementRef.current) {
      if (styles !== prevProps.styles) {
        this.elementRef.current.styles = styles;
      }
      if (mode !== prevProps.mode) {
        this.elementRef.current.mode = mode;
      }
      if (onPlaceOrder !== prevProps.onPlaceOrder) {
        this.elementRef.current.onPlaceOrder = onPlaceOrder;
      }
      if (onContinueShopping !== prevProps.onContinueShopping) {
        this.elementRef.current.onContinueShopping = onContinueShopping;
      }
      if (closeDialogCart !== prevProps.closeDialogCart) {
        this.elementRef.current.closeDialogCart = closeDialogCart;
      }
    }
  }

  componentDidMount() {
    Object.assign(this.elementRef.current, {
      onPlaceOrder: this.props.onPlaceOrder,
    });
    Object.assign(this.elementRef.current, {
      onContinueShopping: this.props.onContinueShopping,
    });
    Object.assign(this.elementRef.current, {
      closeDialogCart: this.props.closeDialogCart,
    });
  }

  render() {
    const { mode, onPlaceOrder, onContinueShopping, closeDialogCart } = this.props;
    return (
      <Element
        ref={this.elementRef}
        mode={mode}
        onPlaceOrder={onPlaceOrder}
        onContinueShopping={onContinueShopping}
        closeDialogCart={closeDialogCart}
      />
    );
  }
}

const Element = forwardRef((props: CheckoutProps, ref: ForwardedRef<LiquidCheckout>) =>
  createElement('liquid-checkout-container' as any, { ref, ...props }),
);

const PaymentElement = forwardRef((props: PaymentProps & { slot: string }, ref) =>
  createElement('liquid-payment' as any, { ref, ...props }),
);

const Checkout: FunctionalComponent<CheckoutProps> = ({
  styles,
  mode,
  onPlaceOrder,
  onContinueShopping,
  closeDialogCart,
}) => {
  const paymentFormRef = useRef<LiquidPayment>(null);
  const elementRef = useRef<LiquidCheckout>(null);

  return (
    <CheckoutContainerElement
      ref={elementRef}
      styles={styles}
      mode={mode}
      onPlaceOrder={onPlaceOrder}
      onContinueShopping={onContinueShopping}
      closeDialogCart={closeDialogCart}
    >
      <PaymentElement ref={paymentFormRef} slot="liquid-payment" disabled={false} />
    </CheckoutContainerElement>
  );
};



export default Checkout;
