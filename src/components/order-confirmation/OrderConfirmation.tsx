import React from 'preact/compat';
import GeneralHeader from '../shared/Header';
import { CheckCircleOutline } from '@liquidcommerceteam/preact-heroicons';
import TYStyles from './style';
import OrderConfirmationBody from './components/OrderConfirmationBody/OrderConfirmationBody';
import Footer from '../cart/components/CartFooter';
import OrderSummary from '../order-summary';
import PaymentSummary from '../payment/components/PaymentSummary';
import DeliveryInfo from '../delivery-info/components/DeliveryInfo';
import orderconfirmationMock from './orderMockApi/orderconfirmation.mock';
import { order, checkout } from '@/signals';

//TODO: move interface to build-types
interface OrderConfirmationProps {
  mode?: 'standard' | 'dialog';
  onClickCheckDeliveryStatus: () => void;
  paymentDetails?: {
    one: string;
    firstName?: string;
    lastName?: string;
    cardName: string;
  };
  shippingDetails?: {
    one?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
  };
}

const tyStyle = TYStyles();
const orderMock = orderconfirmationMock;

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  paymentDetails,
  mode = 'standard',
  onClickCheckDeliveryStatus,
}: OrderConfirmationProps) => {
  paymentDetails = {
    one: checkout.value.billingAddress.one,
    cardName: orderMock.paymentMethods[0].holder,
  };

  return (
    <div className={tyStyle.wrapperTemp}>
      <div className={mode === 'standard' ? tyStyle.standardWrapper : tyStyle.dialogWrapper}>
        <GeneralHeader
          className={tyStyle.header.title}
          title="Order Confirmation"
          showCloseIcon={mode === 'dialog'}
          icon={<CheckCircleOutline className={'w-10 h-10'} />}
        />
        <OrderConfirmationBody
          orderNo={order.value?.number || orderMock.number}
          userEmail={checkout.value.shippingAddress.email}
          onClickCheckDeliveryStatus={onClickCheckDeliveryStatus}
        />

        <OrderSummary readOnly={true} />

        <div className={tyStyle.bgHighlight}>
          <DeliveryInfo showTitle={true} shippingDetails={checkout.value.shippingAddress} />
        </div>
        <div className={tyStyle.gapSixWrapper}>
          <div className={tyStyle.bgHighlight}>
            <PaymentSummary showTitle={true} paymentDetails={paymentDetails} /*showVisa={true}*/ />
          </div>
          <Footer className="sm:px-2-0 sm:py-0 md:px-2 md:py-0 px-2" />
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
