import { useCallback, useState } from 'preact/compat';
import Element from './StoreSelector';
import { IProductVariant } from '@liquidcommercedev/sdk';
import { retailers, selectedProduct, setSelectedProduct } from '@/signals';

type StoreSelectorProps = {
  height?: string;
};

function StoreSelector({ height }: StoreSelectorProps) {
  const retailerSelected = selectedProduct.value.retailer.id;
  const [isMobileSelectorOpen, setIsMobileSelectorOpen] = useState<boolean>(false);
  const onSelectRetailer = useCallback((id: string) => {
    const selectedRetailer = retailers.value.find((retailer) => retailer.id === id);
    const variant = selectedProduct.value.size.variants.find(
      (variant) => variant.retailerId === selectedRetailer.id,
    ) as IProductVariant;

    setSelectedProduct({
      ...selectedProduct.value,
      variant,
      retailer: selectedRetailer,
    });
  }, []);

  const filteredRetailersIds = selectedProduct.value.size.variants.map(
    (variant) => variant.retailerId,
  );
  const filteredRetailers = retailers.value.filter(
    (retailer) => filteredRetailersIds.indexOf(retailer.id) >= 0,
  );

  // In case the selected retailer does not exist for that size, it selects the first one by default
  const selectedRetailerIndex = filteredRetailers
    .map((retailer) => retailer.id)
    .indexOf(retailerSelected);
  if (selectedRetailerIndex === -1) {
    setSelectedProduct({
      ...selectedProduct.value,
      retailer: filteredRetailers[0],
    });
  }

  return (
    <Element
      height={height}
      retailers={filteredRetailers}
      sizeSelected={selectedProduct.value.size}
      selectedRetailerId={retailerSelected}
      setSelectedRetailerId={onSelectRetailer}
      isMobileSelectorOpen={isMobileSelectorOpen}
      setIsMobileSelectorOpen={setIsMobileSelectorOpen}
    />
  );
}

export default StoreSelector;
