import { useStyles } from '../../context/ThemeContext/ThemeContext';
import { useCallback, useState } from 'preact/compat';
import Element from './Atc';
import { selectedProduct } from '@/signals';
import { openCart } from '@/signals/cart.signals';
import { useCart } from '../../context/CartContext/hooks/useCart';

interface AtcElementProps {
  disabled: boolean;
  label: string;
  onAdd: () => void;
  quantity: number;
}

function Atc({ disabled, quantity, onAdd, label }: AtcElementProps) {
  const styles = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCart();

  const variantSelected = selectedProduct.value.variant;

  const onClick = useCallback(async () => {
    try {
      setIsLoading(true);
      await addToCart({
        retailerId: variantSelected.retailerId,
        item: {
          partNumber: variantSelected.partNumber,
          quantity,
          fulfillmentId: variantSelected.fulfillments[0] as string,
        },
      });
      onAdd();
      openCart();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [
    addToCart,
    variantSelected.retailerId,
    variantSelected.partNumber,
    variantSelected.fulfillments,
    quantity,
    onAdd,
  ]);

  return (
    <Element
      disabled={isLoading || disabled}
      label={isLoading ? 'Loading' : label}
      background={styles.colors.primary}
      rounded={styles.rounded}
      color={styles.colors.bg.primary}
      onClick={onClick}
      isLoading={isLoading}
    />
  );
}

export default Atc;
