import Element from './Item';
import { useStyles } from '../../../../../common/context/ThemeContext/ThemeContext';
import { useCallback, useEffect, useState } from 'preact/compat';
import { IProductSize, IProductVariant, IRetailerFulfillment } from '@liquidcommercedev/sdk';
import { retailers, selectedProduct, setSelectedProduct } from '@/signals';

interface Props {
  item: IProductSize;
}

function SizeItem({ item }: Props) {
  const styles = useStyles();
  const sizeSelected = selectedProduct.value.size;
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const onClick = useCallback(() => {
    const filteredRetailersIds = item.variants.map((variant) => variant.retailerId);
    const filteredRetailers = retailers.value.filter(
      (retailer) => filteredRetailersIds.indexOf(retailer.id) >= 0,
    );
    const retailer = filteredRetailers[0];
    const variant = item.variants.find(
      (variant) => variant.retailerId === retailer.id,
    ) as IProductVariant;
    const fulfillmentId = variant.fulfillments[0];
    const fulfillment = retailer.fulfillments.find(
      (fulfillment) => fulfillment.id === fulfillmentId,
    ) as IRetailerFulfillment;

    setSelectedProduct({
      ...selectedProduct.value,
      variant,
      fulfillment,
      retailer,
      size: item,
    });
  }, [item]);

  useEffect(() => {
    if (sizeSelected) {
      setIsSelected(item?.size === sizeSelected?.size);
    }
  }, [item?.size, sizeSelected]);

  return (
    <Element
      size={item.size}
      type={item.container}
      onClick={onClick}
      active={isSelected}
      disabled={false}
      rounded={styles.rounded}
      borderColor={styles.colors.primary}
      color={isSelected ? styles.colors.primary : styles.text.body.color}
      primaryBackground={styles.colors.bg.primary}
      secondaryBackground={styles.colors.bg.secondary}
    />
  );
}

export default SizeItem;
