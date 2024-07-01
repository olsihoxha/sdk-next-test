import React from 'preact/compat';
import Title from '../../common/component/Title';
import { IPaymentInterface } from '@/build-types';
import { PaymentDetails } from '@/signals';
import Card from '@/atoms/imagery/logos/cards';

interface PaymentSummaryProps {
  paymentDetails?: PaymentDetails;
  showTitle?: boolean;
  token?: IPaymentInterface;
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  paymentDetails,
  showTitle,
  token,
}: PaymentSummaryProps) => {
  return (
    <>
      {showTitle && <Title title="Pay with" className="text-base md:text-lg" />}
      {token && (
        <p className="flex items-center gap-2 text-xs md:text-sm">
          <Card cardType={token?.brandCode} cardSize="64" cardColor="white" />
          {`${token.brandCode} ending in ${token.last4}`}
        </p>
      )}
      <div className="text-xs md:text-sm">
        <p className="font-bold">Billing Address</p>
        <p>{paymentDetails?.one}</p>
        <p>{paymentDetails?.firstName}</p>
      </div>
    </>
  );
};

export default PaymentSummary;
