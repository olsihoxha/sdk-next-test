import Element from './Amounts';
import { cart, checkout, selectedRetailerId } from '@/signals';
import { ICartItem } from '@liquidcommercedev/sdk';

function Amounts() {
  const amounts = checkout.value?.amounts;

  if (!amounts) {
    return null;
  }

  const itemsPerRetailer: ICartItem[] = cart.value.items.filter(
    (el) => el.retailerId === selectedRetailerId.value,
  );
  const totalItems: number = itemsPerRetailer.reduce((total, item) => total + item.quantity, 0);

  return <Element itemQuantity={totalItems} {...amounts} />;
}

export default Amounts;
