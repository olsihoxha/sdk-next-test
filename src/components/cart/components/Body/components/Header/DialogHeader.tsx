import { FunctionComponent } from 'preact';
import { Styles } from '../../../../../../types';
import { ShoppingBagOutline, XMarkSolid } from '@liquidcommerceteam/preact-heroicons';
import { useCallback } from 'preact/compat';
import ShoppingBag from '../../../../../../assets/icons/ShoppingBag';
import classNames from 'classnames';
import CloseIcon from '../../../../../../assets/icons/CloseIcon';
import { closeCart } from '@/signals/cart.signals';

interface Props {
  styles: Styles;
  variant?: 'multicart' | 'cart';
}

const DialogHeader: FunctionComponent<Props> = (props: Props) => {
  const {
    styles: { general },
    variant = 'cart',
  } = props;

  const isMulticart = variant === 'multicart';

  const onClose = useCallback(() => {
    closeCart();
  }, []);

  return (
    <header
      className={classNames(
        'flex items-center px-6 rounded-none md:rounded-t-[32px]',
        variant === 'cart'
          ? 'header w-full py-3.5 z-100 text-lg text-black'
          : 'gap-2 py-4 self-stretch bg-white',
      )}
      style={
        variant === 'cart' && {
          background: general.header.bg,
          border: general.header.border,
        }
      }
    >
      {variant === 'cart' ? (
        <ShoppingBagOutline
          height={'1.5em'}
          width={'1.5em'}
          style={{
            color: general.header.btnText,
          }}
          className="mr-1 text-base stroke-2"
        />
      ) : (
        <ShoppingBag />
      )}
      <span className={classNames('font-bold', isMulticart ? 'text-xl md:text-2xl' : '')}>
        {isMulticart ? 'Your Carts' : 'Your cart'}
      </span>
      <div className="flex-grow" />
      {variant === 'cart' ? (
        <XMarkSolid
          height={'1.4em'}
          width={'1.4em'}
          style={{ strokeWidth: '0.14em' }}
          className="cursor-pointer rounded-full"
          onClick={onClose}
        />
      ) : (
        <button onClick={onClose} style={{ border: 'none', background: 'none', padding: 0 }}>
          <CloseIcon />
        </button>
      )}
    </header>
  );
};

export default DialogHeader;
