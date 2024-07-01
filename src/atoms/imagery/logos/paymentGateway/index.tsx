import { FC } from 'preact/compat';
import Element from './PaymentGateway';
import register from '@/register';
import { CardProps } from '../cards/Cards';

const PaymentGatewayCard: FC<CardProps> = ({ cardType, cardSize, cardColor, cardOutlineColor }) => {
  return (
    <Element
      cardType={cardType}
      cardSize={cardSize}
      cardColor={cardColor}
      cardOutlineColor={cardOutlineColor}
    />
  );
};

register(
  PaymentGatewayCard,
  'liquid-payment-gateway-card',
  ['cardType', 'cardSize', 'cardColor', 'cardOutlineColor'],
  { shadow: true },
);

export default PaymentGatewayCard;
