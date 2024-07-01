import { FunctionalComponent } from 'preact';
import { useMemo } from 'preact/hooks';
import { FulfillmentHeader, Item } from './components';
import { ICartItem, ICartItemRequest } from '@liquidcommercedev/sdk';
import { cart, cartLoad } from '@/signals/cart.signals';
import { useCart } from '@/components/common/context/CartContext/hooks/useCart';

const Body: FunctionalComponent = () => {
  const { updateCart } = useCart();

  const deliveryTypes = useMemo(() => {
    if (!cart.value.items) return [];

    const groupedItems = cart.value.items.reduce(
      (acc, item) => {
        const { retailerId, fulfillmentId, customerPlacement, scheduledFor } = item;
        const key = `${scheduledFor}-${customerPlacement}`;

        if (!acc[key]) {
          acc[key] = {
            key,
            fulfillmentId,
            customerPlacement,
            retailerId: retailerId as string,
            items: [],
          };
        }

        acc[key].items.push(item as ICartItem);

        return acc;
      },
      {} as { [key: string]: any },
    );

    return Object.values(groupedItems).sort((a) =>
      a.deliveryMethod === 'on_demand' ? -1 : a.deliveryMethod === 'engraved' ? 1 : 0,
    );
  }, []);

  const onChange = ({
    item,
    quantity,
  }: {
    item: ICartItem;
    quantity?: number;
    engravingMessage?: string[];
  }) => {
    const updatedQuantity = quantity !== undefined ? quantity : item.quantity;
    const updatedItem: ICartItemRequest = {
      partNumber: item.partNumber,
      fulfillmentId: item.fulfillmentId,
      quantity: updatedQuantity,
    };
    updateCart({ retailerId: item.retailerId, item: updatedItem });
  };

  return (
    <div className="py-5 px-5 mb-3 overflow-auto">
      {deliveryTypes.map((deliveryType) => (
        <div key={deliveryType.key} className={'mb-7'}>
          <FulfillmentHeader type={deliveryType.deliveryMethod} />
          {deliveryType.items.map((item, index) => (
            <Item
              index={index}
              item={item}
              items={deliveryType.items}
              cartLoad={cartLoad.value}
              key={item.identifier}
              deliveryExpectation={deliveryType.deliveryExpectation}
              onQtyChange={({ quantity, item }: { quantity: number; item: ICartItem }) =>
                onChange({ quantity, item })
              }
              onEngravingChange={({
                engravingMessage,
                item,
              }: {
                engravingMessage: string[];
                item: ICartItem;
              }) => onChange({ engravingMessage, item })}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Body;
