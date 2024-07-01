import { FC } from 'preact/compat';
import Element, { CardProps } from './Cards';
import register from '../../../../register';

const Card: FC<CardProps> = ({ cardType, cardSize, cardColor, cardOutlineColor }) => {
  return (
    <Element
      cardType={cardType}
      cardSize={cardSize}
      cardColor={cardColor}
      cardOutlineColor={cardOutlineColor}
    />
  );
};

register(Card, 'liquid-card', ['cardType', 'cardSize', 'cardColor', 'cardOutlineColor'], {
  shadow: true,
});

export default Card;
