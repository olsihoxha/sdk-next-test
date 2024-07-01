import { useCallback, useEffect, useState } from 'preact/compat';
import Element from './AtcSection';
import currencyFormat from '../../../common/util/currencyFormat';
import { carts, product, selectedProduct } from '@/signals';
import { useComputed } from '@preact/signals';

interface AtcSectionPageProps {
  openDialogCartClick?: () => void;
}

function AtcSection({ openDialogCartClick }: AtcSectionPageProps) {
  const variantSelected = selectedProduct.value.variant;
  const sizeSelected = selectedProduct.value.size.variants[0];
  const [atcLabel, setAtcLabel] = useState<string>('Add to Cart');

  const [quantity, setQuantity] = useState(1);

  const isItemInCart = useComputed<{
    isInCart: boolean;
    availableQuantity: number;
  } | null>(() => {
    const { retailerId, partNumber } = selectedProduct.value.size.variants[0];
    const foundItem = carts.value[retailerId]?.items.find((item) => item.partNumber === partNumber);
    if (!foundItem) {
      return null;
    }

    return {
      isInCart: true,
      availableQuantity: foundItem.maxQuantity - foundItem.quantity,
    };
  });

  const onSetQuantity = useCallback(
    (val: number) => setQuantity(val < sizeSelected.stock ? val : val),
    [sizeSelected?.stock],
  );

  useEffect(() => {
    const selectedPrice = selectedProduct.value?.variant?.price || 0;
    const atcPrice: string = currencyFormat(quantity * selectedPrice);
    setAtcLabel(`Add to Cart - ${atcPrice}`);
  }, [quantity, variantSelected, sizeSelected]);

  return (
    <Element
      availableQuantity={
        isItemInCart.value ? isItemInCart.value.availableQuantity : variantSelected?.stock
      }
      label={atcLabel}
      product={product.value}
      quantity={quantity}
      setQuantity={onSetQuantity}
      openDialogCartClick={openDialogCartClick}
    />
  );
}

export default AtcSection;
