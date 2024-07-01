import ShopBag from '@/assets/icons/ShopBag';
import Counter from '../../counter';
import { cartItemCount } from '@/signals';
import { openCart } from '@/signals/cart.signals';
import { useCallback } from 'preact/compat';

export interface ItemsCountProps {
  count?: number;
  bgColor?: string;
  textColor?: string;
  openDialogCartClick?: () => void;
}

const ItemsCount = ({ count, bgColor, textColor, openDialogCartClick }: ItemsCountProps) => {
  const itemCount = count || cartItemCount.value;

  const openCartClick = useCallback(() => {
    openDialogCartClick?.();
    openCart();
  }, [openDialogCartClick]);

  return (
    <div className="relative" onClick={openCartClick}>
      <div className="w-8 h-8">
        <ShopBag />
      </div>
      <div className="absolute top-0 right-0 transform translate-x-[45%] -translate-y-[45%]">
        <Counter count={itemCount} bgColor={bgColor} textColor={textColor} />
      </div>
    </div>
  );
};

export default ItemsCount;
