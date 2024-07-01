import TaxAndFees from './TaxAndFees';
import ShippingAndDelivery from './ShippingAndDelivery';
import TipSelector from './TipSelector/TipSelector';
import {
  deliveryTips as checkoutDeliveryTips,
  cart,
  setDeliveryTips as setCheckoutDeliveryTips,
} from '@/signals';
import { useCheckout } from '../../../common/context/CheckoutContext/hooks/useCheckout';
import { ICheckoutDeliveryTipDto, ICheckoutTotalAmounts } from '@liquidcommercedev/sdk';
import currencyFormat from '../../../common/util/currencyFormat';

type AmountsProps = ICheckoutTotalAmounts & {
  itemQuantity: number;
};

const ON_DEMAND = 'onDemand';

function Amounts({
  itemQuantity,
  delivery,
  shipping,
  subtotal,
  discounts,
  giftCards,
  total,
  tax,
  details,
  platform,
  service,
}: AmountsProps) {
  const { updateCheckout } = useCheckout();

  const fulfillmentId = cart.value?.retailers?.map(
    (retailer) => retailer?.fulfillments.find((fulfillment) => fulfillment?.type === ON_DEMAND)?.id,
  )?.[0];

  const handleTipUpdate = async (tip: number) => {
    const deliveryTips = Object.values(checkoutDeliveryTips.value) || [];

    const updatedDeliveryTips = [
      ...deliveryTips.filter((tip: ICheckoutDeliveryTipDto) => tip.fulfillmentId !== fulfillmentId),
      {
        fulfillmentId,
        tip,
      },
    ];

    setCheckoutDeliveryTips({
      ...Object.values(checkoutDeliveryTips.value),
      ...updatedDeliveryTips,
    });

    try {
      const tipsHaveUpdated =
        JSON.stringify(updatedDeliveryTips.sort()) !== JSON.stringify(deliveryTips.sort());
      if (tipsHaveUpdated) {
        updateCheckout({
          deliveryTips: updatedDeliveryTips,
        });
      }
    } catch (error) {
      console.error('Failed to prepare checkout:', error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 text-sm">
      <div>{`Subtotal (${itemQuantity} item${itemQuantity > 1 ? 's' : ''})`}</div>
      <div className="flex justify-end">{currencyFormat(subtotal)}</div>

      <div className="col-span-2">
        <TaxAndFees
          {...details.taxes}
          taxes={details.taxes.products + details.taxes.shipping}
          platformAndService={platform + service}
          total={tax + platform + service}
        />
      </div>

      <div className="col-span-2">
        <ShippingAndDelivery delivery={delivery} shipping={shipping} />
      </div>

      {discounts > 0 && (
        <>
          <div>Promo Code</div>
          <div className="flex justify-end">{currencyFormat(discounts)}</div>
        </>
      )}

      {giftCards > 0 && (
        <>
          <div>Gift Card</div>
          <div className="flex justify-end">{currencyFormat(giftCards)}</div>
        </>
      )}

      {fulfillmentId && (
        <div className="col-span-2">
          <TipSelector subtotal={subtotal} onChange={handleTipUpdate} />
        </div>
      )}

      <div className="text-lg font-bold">Order Total</div>
      <div className="flex justify-end text-lg font-bold">{currencyFormat(total)}</div>
    </div>
  );
}

export default Amounts;
