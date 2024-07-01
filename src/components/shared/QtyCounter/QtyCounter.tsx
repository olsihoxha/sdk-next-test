import { MinusSolid, PlusSolid, TrashSolid } from '@liquidcommerceteam/preact-heroicons';
import classNames from 'classnames';
import Button from '../../common/ui/Button';
import { memo } from 'preact/compat';

interface QtyCounterElementProps {
  borderColor: string;
  color: string;
  disabled?: boolean;
  disabledPlus?: boolean;
  displayRemoveItemOnLastItem?: boolean;
  fontFamily: string;
  onAddOne: () => void;
  onRemoveOne: () => void;
  paddingOnInput?: boolean;
  rounded: boolean;
  value: number;
}

function QtyCounter({
  disabled,
  value,
  onAddOne,
  onRemoveOne,
  displayRemoveItemOnLastItem = false,
  disabledPlus = false,
  paddingOnInput = true,
  borderColor,
  color,
  rounded,
  fontFamily,
}: QtyCounterElementProps) {
  return (
    <div className="flex custom-number-input">
      <div className={'flex flex-row'}>
        <div className={'flex h-full w-full items-center justify-start rounded-lg bg-transparent'}>
          <Button
            style={{
              borderColor,
              color,
              background: 'unset',
            }}
            disabled={disabled || value <= 1}
            onClick={onRemoveOne}
            className={classNames(
              'border h-[40px] w-[40px] max-h-[40px] max-w-[40px] lg:h-[48px] lg:w-[48px] lg:max-h-[48px] lg:max-w-[48px]',
              rounded ? 'rounded-full' : 'rounded-none',
              disabled || value <= 1 ? '' : 'cursor-pointer',
            )}
            icon={
              displayRemoveItemOnLastItem ? (
                <TrashSolid height="1.5rem" width="1.5rem" />
              ) : (
                <MinusSolid height="1.5rem" width="1.5rem" />
              )
            }
          />
          <input
            type="text"
            name="product-quantity"
            value={value}
            readOnly={true}
            className={classNames(
              'w-1/3 flex border-none items-center text-center outline-none text-base focus:outline-none focus:border-none active:outline-none md:text-basecursor-default text-[#111928] text-[18px] font-["Open_Sans"] font-bold',
              { 'p-0': !paddingOnInput },
            )}
            style={{
              background: 'unset',
              fontFamily,
            }}
          />
          <Button
            style={{
              borderColor,
              color,
              background: 'unset',
            }}
            disabled={disabled || disabledPlus}
            onClick={onAddOne}
            className={classNames(
              'border h-[40px] w-[40px] max-h-[40px] max-w-[40px] lg:h-[48px] lg:w-[48px] lg:max-h-[48px] lg:max-w-[48px]',
              rounded ? 'rounded-full' : 'rounded-none',
              disabled || disabledPlus ? '' : 'cursor-pointer',
            )}
            icon={<PlusSolid height="1.5rem" width="1.5rem" />}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(QtyCounter);
