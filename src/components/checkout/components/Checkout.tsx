import LockIcon from '../../../assets/icons/LockIcon';
import ArrowLeft from '../../../assets/icons/ArrowLeft';
import { DeliveryInfo, DeliveryTime, Payment } from '../../../index';
import { StateUpdater } from 'preact/hooks';
import OrderSummary from '../../order-summary/components';

interface Props {
  setCheckout: StateUpdater<boolean>;
  setIsClosed: StateUpdater<boolean>;
  onPlaceOrder: () => void;
  onContinueShopping?: () => void;
}

const Checkout = (props: Props) => {
  const { setIsClosed, onPlaceOrder, onContinueShopping } = props;
  return (
    <div>
      <div className="flex gap-1 p-4 md:px-8">
        <div
          className="flex bg-white items-center cursor-pointer"
          onClick={() => {
            onContinueShopping?.();
            setIsClosed(true);
          }}
        >
          <ArrowLeft />
          <div className="text-sm text-blue-500">Continue Shopping</div>
        </div>
      </div>
      <div className={'flex flex-col items-center '}>
        <div class="flex flex-col md:flex-row items-start gap-12 z-0 w-full max-w-[1488px] p-4 md:p-8">
          <div class="w-full md:w-3/5">
            <div className="flex md:py-6">
              <LockIcon />
              <h3 className="ml-2 font-bold text-2xl w-fit">Checkout</h3>
            </div>
            <DeliveryTime />
            <div class="pt-6" />
            <DeliveryInfo />
            <div class="pt-6" />
            <Payment />
          </div>
          <div class="w-full md:w-2/5">
            <OrderSummary onPlaceOrder={onPlaceOrder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
