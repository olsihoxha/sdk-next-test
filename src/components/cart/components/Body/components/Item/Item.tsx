import { FC } from 'preact/compat';
import {
  Bars3BottomLeftOutline,
  MinusOutline,
  PencilSolid,
  PlusOutline,
  TrashSolid,
} from '@liquidcommerceteam/preact-heroicons';
import { Styles } from '../../../../../../types';
import { Avatar, Image } from '../../../../../shared';
import classNames from 'classnames';

interface Props {
  engraving?: boolean;
  hasEngraving: boolean;
  personalize: boolean;
  name: string;
  volume: string;
  deliveryExpectation: string;
  price: number;
  maxQty: number;
  quantity: number;
  imageUrl: string;
  onChange: (type: string) => void;
  setEngravingActive: (val: boolean) => void;
  styles: Styles;
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Item: FC<Props> = (props) => {
  const {
    engraving,
    hasEngraving,
    setEngravingActive,
    personalize,
    name,
    volume,
    deliveryExpectation,
    price,
    quantity,
    imageUrl,
    maxQty,
    onChange,
    styles,
  } = props;

  return (
    <>
      <div
        className="w-3/12 h-full justify-center items-center rounded-4xl overflow-hidden mr-3"
        style={{
          border:
            styles.components.cartItem.imgBorder.active &&
            styles.components.cartItem.imgBorder.border !== '#EF444400'
              ? `2px solid ${styles.components.cartItem.imgBorder.border}`
              : 'unset',
          borderRadius: styles.general.element.corners === 'rounded' ? '' : 'unset',
        }}
      >
        <Image src={imageUrl} alt={'Liquid Bottle'} className={'h-32 w-full m-auto'} />
      </div>
      <div
        className={'w-9/12 flex flex-col justify-between items-center'}
        style={{
          color: styles.text.headings.color,
          fontFamily: styles.text.headings.font,
        }}
      >
        <div className={'w-full justify-start items-center text-base font-bold line-clamp-3'}>
          {name}
        </div>
        <div className={'w-full flex justify-between items-center'}>
          <div
            className={'w-full flex justify-start items-center'}
            style={{
              color: styles.text.body.color,
              fontFamily: styles.text.body.font,
            }}
          >
            {volume}
          </div>
          {engraving ? (
            <div
              className={'w-full flex justify-end items-center cursor-pointer m-auto'}
              style={{
                color: styles.text.hyperlink.color,
                fontFamily: styles.text.hyperlink.font,
              }}
              onClick={() => setEngravingActive(!personalize)}
            >
              {hasEngraving ? (
                <>
                  Personalized
                  <PencilSolid size={12} className={'mt-[1px] ml-1 mr-1'} />
                  <span className={'font-bold text-base'}>+$50</span>
                </>
              ) : (
                <>
                  <Bars3BottomLeftOutline size={17} className={'mt-[1px] mr-1'} />
                  <div>Personalize for $50</div>
                </>
              )}
            </div>
          ) : null}
        </div>
        <div
          className={'w-full flex justify-start items-center'}
          style={{
            color: styles.text.body.color,
            fontFamily: styles.text.body.font,
          }}
        >
          {hasEngraving ? 'Ships in 10 days' : deliveryExpectation}
        </div>
        <div className={'w-full flex justify-between items-center'}>
          <div
            className={'w-full flex justify-start items-center'}
            style={{
              background: styles.components.qtyElement.bg,
              color: styles.components.qtyElement.btnText,
            }}
          >
            <Avatar
              className="cursor-pointer hover:opacity-70 hover:shadow text-inherit"
              style={{
                background: styles.components.qtyElement.btnBg,
                borderRadius: '50px',
              }}
              shape={'circle'}
              size={26}
              onClick={() => onChange('decrease')}
              icon={
                quantity === 1 ? (
                  <TrashSolid className={'font-bold text-base hover:opacity-70 text-inherit'} />
                ) : (
                  <MinusOutline
                    className={'font-bold text-base stroke-2 hover:opacity-70'}
                    style={{
                      color: styles.text.body.color,
                      strokeWidth: '4px',
                      stroke: styles.text.body.color,
                    }}
                  />
                )
              }
            />
            <Avatar
              className="bg-transparent text-inherit mx-1"
              shape={'circle'}
              size={26}
              style={{
                fontFamily: styles.text.body.font,
              }}
              icon={<div className={'font-bold text-xl text-inherit'}>{quantity}</div>}
            />
            <Avatar
              className={classNames(
                'cursor-pointer hover:shadow text-inherit',
                maxQty === quantity
                  ? 'pointer-events-none text-white/40'
                  : 'cursor-pointer hover:opacity-70',
              )}
              style={{
                background: styles.components.qtyElement.btnBg,
                borderRadius: '50px',
              }}
              shape={'circle'}
              size={26}
              onClick={() => {
                if (maxQty > quantity) {
                  onChange('increase');
                }
              }}
              icon={
                <PlusOutline
                  className={'font-bold text-base stroke-2 hover:opacity-70'}
                  style={{
                    strokeWidth: '4px',
                  }}
                />
              }
            />
          </div>
          <div className={'w-full flex justify-end items-center text-xl font-bold'}>
            {formatter.format(price)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
