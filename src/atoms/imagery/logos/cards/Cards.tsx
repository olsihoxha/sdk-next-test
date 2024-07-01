import { FC, useState, useEffect } from 'preact/compat';
import * as Cards from './components/index';
import { IllustrationProps } from '../../icons/illustrations/components/TrackOrderIllustration';

export interface CardProps {
  cardType: string;
  cardSize?: string;
  cardColor?: string;
  cardOutlineColor?: string;
}

const Card: FC<CardProps> = ({ cardType, cardSize, cardColor, cardOutlineColor }) => {
  const [CardComponent, setCardComponent] = useState<FC<IllustrationProps> | null>(null);

  useEffect(() => {
    if (cardType !== null) {
      const SelectedCardComponent = Cards.default[cardType] as FC;
      setCardComponent(() => SelectedCardComponent);
    } else {
      console.error(`Invalid component: ${cardType}`);
      setCardComponent(() => null);
    }
  }, [cardType]);

  return (
    <div key={cardType}>
      {CardComponent ? (
        <CardComponent color={cardColor} size={cardSize} highlightColor={cardOutlineColor} />
      ) : null}
    </div>
  );
};

export default Card;
