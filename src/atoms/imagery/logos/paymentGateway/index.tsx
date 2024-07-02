import { FC } from 'preact/compat';
import Element from './PaymentGateway';
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


export default PaymentGatewayCard;
