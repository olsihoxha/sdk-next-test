import { FunctionalComponent } from 'preact';
import classNames from 'classnames';
import MulticartClockIcon from '../../../../../assets/icons/MulticartClockIcon';
import { useMemo } from 'preact/hooks';
import { ICartItem, ICartItemRequest } from '@liquidcommercedev/sdk';
import { MinusOutline, PlusOutline, TrashOutline } from '@liquidcommerceteam/preact-heroicons';
import currencyFormat from '../../../../common/util/currencyFormat';
import { useCart } from '../../../../common/context/CartContext/hooks/useCart';
import { cart, getTheme } from '@/signals';

interface Props {
  item: ICartItem;
  readOnly?: boolean;
  retailerId: string;
}

const RetailCartItem: FunctionalComponent<Props> = ({ item, readOnly, retailerId }) => {
  const { updateCart } = useCart();
  const { singleRetailer } = getTheme().cart;

  const retailer = cart.value.retailers.find((el) => el.id === retailerId);

  const fulfillmentDetail = useMemo(() => {
    const fulfillment = retailer.fulfillments.find((f) => f.id === item.fulfillmentId);
    return fulfillment ? fulfillment.expectation.detail : null;
  }, [item.fulfillmentId, retailer.fulfillments]);

  const updateCartHandler = (updatedQuantity: number) => {
    const updatedItem: ICartItemRequest = {
      id: item.id,
      partNumber: item.partNumber,
      fulfillmentId: item.fulfillmentId,
      quantity: updatedQuantity,
    };
    updateCart({ retailerId, item: updatedItem });
  };

  const handleIncrease = () => {
    if (item.quantity < item.maxQuantity) {
      updateCartHandler(item.quantity + 1);
    }
  };

  const handleDecrease = () => {
    updateCartHandler(item.quantity - 1);
  };

  return (
    <div
      className={classNames(singleRetailer.wrapper.sub, readOnly ? 'p-0 sm:p-0' : 'p-2 sm:p-4 ')}
    >
      {/* Product Image */}
      <div className={singleRetailer.wrapper.image}>
        <img
          src={item.images[0]}
          alt="Product Image"
          className={singleRetailer.image}
          onError={(e) => {
            (e.target as HTMLImageElement).referrerPolicy = 'no-referrer';
          }}
        />
      </div>
      {/* Product info */}
      <div className={singleRetailer.wrapper.productInfo}>
        <p className={singleRetailer.text.name}>{item.name}</p>
        <div className={singleRetailer.wrapper.size}>
          {readOnly && <p className={singleRetailer.text.size}>qty: {item.quantity} - &nbsp;</p>}
          <p className={singleRetailer.text.size}>{item.size},&nbsp;</p>
          <p className={singleRetailer.text.size}>{item.container}</p>
        </div>

        <div
          className={classNames(
            singleRetailer.readonly.readonlyWrapper,
            readOnly ? singleRetailer.readonly.readonlyTrue : singleRetailer.readonly.readonlyFalse,
          )}
        >
          {/* Arrival time badge*/}
          <div className={singleRetailer.wrapper.badge.main}>
            <div className={singleRetailer.wrapper.badge.sub}>
              <div className={singleRetailer.wrapper.badge.image}>
                <MulticartClockIcon />
              </div>
              <p className={singleRetailer.text.fulfillment}>{fulfillmentDetail}</p>
            </div>
          </div>
          {/* Controls */}
          <div className={singleRetailer.wrapper.controls.main}>
            {/* Inputst */}
            {!readOnly && (
              <div className={singleRetailer.wrapper.controls.inputs}>
                {/* Minus button */}
                <button onClick={handleDecrease} className={singleRetailer.button.base}>
                  <div className={singleRetailer.wrapper.icon}>
                    {item.quantity === 1 ? (
                      <TrashOutline className={singleRetailer.heroIcons.trash} />
                    ) : (
                      <MinusOutline className={singleRetailer.heroIcons.minus} />
                    )}
                  </div>
                </button>
                {/* Quantity */}
                <p className={singleRetailer.text.quantity}>{item.quantity}</p>
                {/* Plus button*/}
                <button onClick={handleIncrease} className={singleRetailer.button.base}>
                  <div className={singleRetailer.wrapper.icon}>
                    <PlusOutline className={singleRetailer.heroIcons.plus} />
                  </div>
                </button>
              </div>
            )}
            {/* Price */}
            <div className={singleRetailer.wrapper.price}>
              <p className={singleRetailer.text.productPrice}>{currencyFormat(item.price)}</p>
              {item.attributes.engraving.hasEngraving && (
                <p className={singleRetailer.text.engraving.text}>
                  <span className={singleRetailer.text.engraving.personalization}>
                    Personalization Fee:{' '}
                  </span>
                  <span className={singleRetailer.text.engraving.fee}>
                    +{currencyFormat(item.attributes.engraving.fee)}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailCartItem;
