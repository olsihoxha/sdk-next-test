import { FunctionComponent } from 'preact';
import { ShoppingCartOutline } from '@liquidcommerceteam/preact-heroicons';
import Button from '../../../../../common/ui/Button';
import { Styles } from '../../../../../../types';

interface Props {
  styles: Styles;
  onClose: () => unknown;
}

const StandardHeader: FunctionComponent<Props> = (props: Props) => {
  const {
    styles: { general, text },
    onClose,
  } = props;

  return (
    <header
      className="flex items-center justify-between header w-full z-100 py-3.5 px-6 z-100 rounded-t-2xl"
      style={{
        background: general.header.bg,
        border: general.header.border,
        borderBottom:
          general.header.border !== '#EF444400' ? `1px solid ${general.header.border}` : 'unset',
      }}
    >
      <h5
        className={'h5 ml-2 text-gray-800'}
        style={{
          fontFamily: text.headings.font,
          color: general.header.text,
        }}
      >
        Your Cart
      </h5>
      <Button
        className={'h-9 bg-transparent hover:bg-transparent border-[1px] px-[1rem]'}
        variant="solid"
        icon={
          <ShoppingCartOutline
            style={{
              height: '100%',
              color: general.header.btnText,
            }}
            className={'mr-1'}
          />
        }
        style={{
          fontFamily: text.body.font,
          borderRadius: general.element.corners === 'rounded' ? '' : 'unset',
          borderWidth: '1px',
          borderColor: general.header.btnBorder,
          background: general.header.btnBg,
          color: general.header.btnText,
        }}
        onClick={onClose}
      >
        Continue Shopping
      </Button>
    </header>
  );
};

export default StandardHeader;
