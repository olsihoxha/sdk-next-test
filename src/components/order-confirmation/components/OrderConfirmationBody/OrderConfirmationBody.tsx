import GeneralButton from '../../../shared/GeneralButton';
import OrderConfirmationStyles from '../../style';
import { TruckSolid } from '@liquidcommerceteam/preact-heroicons';
import { OrderConfirmationIcon } from '../../temp/orderConfirmationIcon';

interface OrderConfirmationBodyProps {
  orderNo: number | string;
  userEmail: string;
  onClickCheckDeliveryStatus: () => void;
}

const orderConfirmationStyle = OrderConfirmationStyles();

const OrderConfirmationBody = ({
  orderNo,
  userEmail,
  onClickCheckDeliveryStatus,
}: OrderConfirmationBodyProps) => {
  return (
    <div className={orderConfirmationStyle.body.wrapper}>
      <OrderConfirmationIcon />
      <h3 className={orderConfirmationStyle.body.title}>Thank You For Your Order</h3>
      <p className={orderConfirmationStyle.body.subTitle}>
        Order Number: <span className={orderConfirmationStyle.textHighlight}>{orderNo}</span>
      </p>
      <p className={orderConfirmationStyle.body.paragraph}>
        Shortly, you will receive an email to&nbsp;
        <span className={orderConfirmationStyle.textHighlight}>{userEmail}</span>
        &nbsp;with information about the status of your order below:
      </p>
      <GeneralButton
        className={orderConfirmationStyle.body.button}
        btnText="Check Your Delivery Status"
        onClick={onClickCheckDeliveryStatus}
        icon={<TruckSolid />}
      />
    </div>
  );
};

export default OrderConfirmationBody;
