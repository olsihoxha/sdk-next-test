import { FC, useEffect, useState } from 'preact/compat';
import * as PaymentGatewayCards from './components/index';
import { CardProps } from '../cards/Cards';
import { IllustrationProps } from '../../icons/illustrations/components/TrackOrderIllustration';

const PaymentGatewayCard: FC<CardProps> = ({ cardType, cardSize, cardColor, cardOutlineColor }) => {
  const [PaymentGatewayCardComponent, setPaymentGatewayCardComponent] =
    useState<FC<IllustrationProps> | null>(null);

  useEffect(() => {
    if (cardType !== null) {
      const SelectedCard = PaymentGatewayCards.default[cardType] as FC;
      setPaymentGatewayCardComponent(() => SelectedCard);
    } else {
      console.error(`Invalid component: ${cardType}`);
      setPaymentGatewayCardComponent(() => null);
    }
  }, [cardType]);

  return (
    <div key={cardType}>
      {PaymentGatewayCardComponent ? (
        <PaymentGatewayCardComponent
          color={cardColor}
          size={cardSize}
          highlightColor={cardOutlineColor}
        />
      ) : null}
    </div>
  );
};

export default PaymentGatewayCard;
