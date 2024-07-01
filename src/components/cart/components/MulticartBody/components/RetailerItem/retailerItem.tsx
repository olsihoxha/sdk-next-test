import { FC } from 'preact/compat';
import RetailLogo from '../../../../../../assets/icons/RetailLogo';
import { ChevronRightOutline } from '@liquidcommerceteam/preact-heroicons';
import { IRetailer } from '@liquidcommercedev/sdk';
import currencyFormat from '../../../../../common/util/currencyFormat';
import { useCart } from '@/components/common/context/CartContext/hooks/useCart';
import { getTheme } from '@/signals';

interface Props {
  retailer: IRetailer;
  productCount: number;
}

const RetailerItem: FC<Props> = ({ retailer, productCount }) => {
  const { body } = getTheme().cart;
  const { handleSingleRetailerClick } = useCart();

  return (
    <div className={body.wrapper.sub} onClick={() => handleSingleRetailerClick?.(retailer.id)}>
      <div className={body.logo.retailIcon}>
        <RetailLogo />
      </div>
      <div className={body.wrapper.retailWrapper}>
        <p className={body.text.retailerName}>{retailer?.name}</p>
        <div className={body.wrapper.textWrapper}>
          <p className={body.text.items}>
            {productCount} {productCount === 1 ? 'item' : 'items'}
          </p>
          <p className={body.text.price}>{currencyFormat(retailer.subtotal)}</p>
        </div>
      </div>
      <ChevronRightOutline className={body.logo.chevronRightIcon} />
    </div>
  );
};

export default RetailerItem;
