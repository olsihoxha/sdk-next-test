import Element from './Item';
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks';
import classNames from 'classnames';
import { FunctionalComponent } from 'preact';
import PersonalizedForm from '../Personalized/PersonalizedForm';
import { useStyles } from '../../../../../common/context/ThemeContext/ThemeContext';
import { ICartItem } from '@liquidcommercedev/sdk';

interface Props {
  item: ICartItem;
  items: ICartItem[];
  index: number;
  cartLoad: boolean;
  deliveryExpectation: string;
  onQtyChange: ({ quantity, item }: { quantity: number; item: ICartItem }) => void;
  onEngravingChange: ({
    engravingMessage,
    item,
  }: {
    engravingMessage: string[];
    item: ICartItem;
  }) => void;
}

const Item: FunctionalComponent<Props> = (props) => {
  const { item, items, index, onQtyChange, onEngravingChange } = props;

  const [internalQuantity, setInternalQuantity] = useState(item.quantity);
  const [engravingActive, setEngravingActive] = useState(false);
  const [engravingMessage, setEngravingMessage] = useState<string[]>(
    item?.attributes.engraving.lines,
  );

  const retailerNameExists = useMemo(() => {
    const sameItems = items
      .map((i, index) => {
        return i.retailerId === item.retailerId
          ? {
              index,
              item: i,
            }
          : undefined;
      })
      .filter(Boolean);
    return sameItems.length > 1 && index !== sameItems?.[0]?.index;
  }, [index, item.retailerId, items]);

  useEffect(() => {
    if (item.quantity !== internalQuantity) {
      setInternalQuantity(item.quantity);
    }
  }, [item.quantity, internalQuantity]);

  const engraving = useMemo(() => {
    return item?.attributes.engraving.maxLines > 0;
  }, [item?.attributes.engraving]);

  const styles = useStyles();

  const updateQuantity = useCallback(
    (type: string) => {
      const quantity =
        internalQuantity === (type === 'increase' ? item.maxQuantity : 0)
          ? internalQuantity
          : type === 'increase'
            ? internalQuantity + 1
            : internalQuantity - 1;
      if (quantity > 0) {
        setInternalQuantity(quantity);
      }
      onQtyChange({ quantity, item });
    },
    [internalQuantity, onQtyChange, item],
  );

  return (
    <>
      {retailerNameExists && (
        <div
          className={classNames('flex justify-start items-center font-bold text-base mb-4', {
            'mt-1': index === 0,
          })}
          style={{
            fontFamily: styles.text.headings.font,
            color: styles.text.headings.color,
          }}
        >
          <span className="flex justify-start font-normal items-center mr-2 text-sm">
            Fulfilled by
          </span>
          <span>{item?.retailerId}</span>
        </div>
      )}
      <div
        className={`
          w-full flex p-5 
          ${styles.general.element.corners === 'rounded' ? 'rounded-4xl' : 'rounded-none'}
        `}
        style={{
          background: styles.components.cartItem.bg,
          borderRadius: styles.general.element.corners === 'rounded' ? '' : 'unset',
          borderColor: styles.components.cartItem.border,
        }}
      >
        {!engravingActive ? (
          <Element
            hasEngraving={engravingMessage[0] !== ''}
            setEngravingActive={setEngravingActive}
            personalize={engravingActive}
            engraving={engraving}
            name={item?.name}
            volume={item?.size}
            price={item?.price}
            imageUrl={item?.images[0]}
            quantity={internalQuantity}
            deliveryExpectation={item.scheduledFor as string}
            onChange={updateQuantity}
            styles={styles}
            maxQty={item?.maxQuantity}
          />
        ) : (
          <PersonalizedForm
            className="w-full"
            linesNumber={item?.attributes.engraving.maxLines || 3}
            onCancel={() => setEngravingActive(false)}
            engravingMessage={engravingMessage}
            maxLineLength={item?.attributes.engraving.maxCharsPerLine || 16}
            setEngravingMessage={setEngravingMessage}
            onSave={(engravingMessage: string[]) => {
              onEngravingChange({ engravingMessage, item });
              setEngravingActive(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Item;
