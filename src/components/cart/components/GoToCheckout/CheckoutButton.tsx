import { CSSProperties, FC } from 'preact/compat';
import Button from '../../../common/ui/Button';
import currencyFormat from '../../../common/util/currencyFormat';
import { cart } from '@/signals';

interface Props {
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
  style: string | CSSProperties | undefined;
  shape: 'round' | 'circle' | 'none';
}

const GoToCheckout: FC<Props> = (props) => {
  const { style, shape, onClick, disabled, isLoading } = props;

  if (!cart.value) return null;

  return (
    <Button
      className="w-full text-sm sm:text-base font-bold"
      disabled={disabled}
      style={style}
      variant="solid"
      shape={shape}
      size={'md'}
      block={false}
      loading={isLoading}
      onClick={onClick}
    >
      Checkout {currencyFormat(cart.value.subtotal)}
    </Button>
  );
};

export default GoToCheckout;
