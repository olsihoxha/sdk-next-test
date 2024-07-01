import { FunctionComponent } from 'preact';
import { ChevronLeftOutline, XMarkOutline } from '@liquidcommerceteam/preact-heroicons';
import ShoppingBag from '../../../../assets/icons/ShoppingBag';
import RetailLogo from '../../../../assets/icons/RetailLogo';
import { useCart } from '../../../common/context/CartContext/hooks/useCart';
import { cart, selectedRetailerId, closeCart, getTheme } from '@/signals';

interface MulticartHeaderProps {
  closeDialogCart?: () => void;
}

const MulticartHeader: FunctionComponent<MulticartHeaderProps> = ({ closeDialogCart }) => {
  const { handleCartBackButton } = useCart();
  const { header } = getTheme().cart;

  const retailerName = cart.value?.retailers.find((el) => el.id === selectedRetailerId.value)?.name;

  const handleClose = () => {
    closeDialogCart && closeDialogCart();
    closeCart();
  };

  return (
    <div className={header.wrapper.main}>
      <div className={header.wrapper.sub}>
        {selectedRetailerId.value &&
        cart.value?.items.find((el) => el.retailerId === selectedRetailerId.value) ? (
          <>
            <button onClick={() => handleCartBackButton?.()} className={header.button.base}>
              <ChevronLeftOutline className={header.logo.heroIcon} />
            </button>
            <div className={header.wrapper.retailIcon.main}>
              <div className={header.wrapper.retailIcon.sub}>
                <RetailLogo />
              </div>
            </div>
            <p className={header.text.retailerName}>{retailerName}</p>
          </>
        ) : (
          <>
            <div className={header.logo.shoppingIcon}>
              <ShoppingBag />
            </div>
            <p className={header.text.title}>Your carts</p>
          </>
        )}
        <button onClick={handleClose} className={header.button.base}>
          <XMarkOutline className={header.logo.heroIcon} />
        </button>
      </div>
    </div>
  );
};

export default MulticartHeader;
