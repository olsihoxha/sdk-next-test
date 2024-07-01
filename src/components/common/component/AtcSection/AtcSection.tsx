import Atc from '../../ui/Atc';
import QtyCounter from '../../../shared/QtyCounter';
import { IProduct } from '@liquidcommercedev/sdk';

export interface AtcSectionProps {
  availableQuantity: number;
  label: string;
  product: IProduct;
  quantity: number;
  setQuantity: (val: number) => void;
  openDialogCartClick?: () => void;
}

function AtcSection({
  product,
  quantity,
  availableQuantity,
  setQuantity,
  label,
  openDialogCartClick,
}: AtcSectionProps) {
  return (
    <div className="flex flex-row items-center w-full mt-6 justify-between">
      {availableQuantity > 1 ? (
        <div className="max-w-[120px] lg:max-w-[150px] mr-4">
          <QtyCounter value={quantity} maxValue={availableQuantity} onChange={setQuantity} />
        </div>
      ) : null}
      <Atc
        disabled={!availableQuantity || product.sizes?.length === 0}
        label={!availableQuantity || product.sizes?.length === 0 ? 'Out Of Stock' : label}
        quantity={quantity}
        onAdd={() => {
          setQuantity(1);
          openDialogCartClick?.();
        }}
      />
    </div>
  );
}

export default AtcSection;
