import currencyFormat from '@/components/common/util/currencyFormat';
import ExpansiveRow from '../ExpansiveRow';
import { useMemo } from 'preact/hooks';
import { FunctionalComponent } from 'preact';
import { ICheckoutTotalAmounts } from '@liquidcommercedev/sdk';

export type ShippingAndDeliveryProps = Pick<ICheckoutTotalAmounts, 'delivery' | 'shipping'>;

const ShippingAndDelivery: FunctionalComponent<ShippingAndDeliveryProps> = ({
  delivery,
  shipping,
}) => {
  const total = useMemo(() => currencyFormat(delivery + shipping), [delivery, shipping]);

  if (!delivery && !shipping) {
    return null;
  }

  return (
    <ExpansiveRow title="Shipping and Delivery" titleValue={total}>
      {shipping > 0 && (
        <div className="text-xs flex justify-between">
          <div>Shipping</div>
          <div className="flex justify-end">{currencyFormat(shipping)}</div>
        </div>
      )}
      {delivery > 0 && (
        <div className="text-xs flex justify-between">
          <div>Delivery</div>
          <div className="flex justify-end">{currencyFormat(delivery)}</div>
        </div>
      )}
    </ExpansiveRow>
  );
};

export default ShippingAndDelivery;
