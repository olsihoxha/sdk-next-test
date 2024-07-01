import {
  IProductSize,
  IRetailer,
  IRetailerFeeDelivery,
  IRetailerFulfillment,
} from '@liquidcommercedev/sdk';
import { memo } from 'preact/compat';
import { JSX } from 'preact';
import { StateUpdater } from 'preact/hooks';
import Styles from './style/index';
import { useResponsive, useBounds } from '../../../../../hooks';
import { ChevronLeftOutline } from '@liquidcommerceteam/preact-heroicons';
import currencyFormat from '../../../../common/util/currencyFormat';

import Clock from '../../../../../assets/icons/Clock';
import Truck from '../../../../../assets/icons/Truck';

import { useAppContext } from '../../../../common/context/AppContext/hooks/useAppContext';

const MAX_RETAILERS_DISPLAYED = 15;

type StoreSelectorProps = {
  height?: string;
  retailers: IRetailer[];
  sizeSelected: IProductSize;
  selectedRetailerId: string;
  setSelectedRetailerId: (id: string) => void;
  setIsMobileSelectorOpen: StateUpdater<boolean>;
  isMobileSelectorOpen: boolean;
};

type StoreSelectorCardProps = {
  retailer: IRetailer;
  isSelected: boolean;
  sizeSelected: IProductSize;
  onClickFunction: JSX.MouseEventHandler<HTMLDivElement>;
  isMobile: boolean;
  fulfillment: IRetailerFulfillment;
  setIsMobileSelectorOpen: StateUpdater<boolean>;
  isMobileSelectorOpen: boolean;
};

const style = Styles();

const StoreSelectorCard = ({
  retailer,
  isSelected,
  onClickFunction,
  isMobileSelectorOpen,
  setIsMobileSelectorOpen,
  fulfillment,
  sizeSelected,
  isMobile,
}: StoreSelectorCardProps) => {
  const variant = sizeSelected.variants.find((variant) => variant.retailerId == retailer.id);
  const minFee = (fulfillment.fees as IRetailerFeeDelivery).min;
  const fee = (fulfillment.fees as IRetailerFeeDelivery).fee;

  return (
    <div
      onClick={(e) => {
        if (!isMobile || isMobileSelectorOpen) {
          onClickFunction(e);
        } else {
          setIsMobileSelectorOpen(true);
        }
      }}
      className={`
      ${style.card.base.all}
      ${
        !isMobileSelectorOpen &&
        isMobile &&
        ((isSelected && style.card.base.mobile.active.on) ||
          (!isSelected && style.card.base.mobile.active.off))
      }
      `}
    >
      {(!isMobile || isMobileSelectorOpen) && (
        <div
          className={`${style.card.checkbox.base}
          ${isSelected ? style.card.checkbox.active.on : style.card.checkbox.active.off}`}
        />
      )}
      <div className={style.card.details.base}>
        <div className={style.card.details.info.base}>
          <div className={style.card.details.info.top}>
            <h4
              className={`${
                isMobile
                  ? style.card.details.info.retailer.mobile
                  : style.card.details.info.retailer.base
              } `}
            >
              {retailer.name || retailer.id}
            </h4>
            {isMobile && isSelected && !isMobileSelectorOpen && (
              <button className={style.card.active}>Change</button>
            )}
          </div>
          <div
            className={`${
              isMobile && !isMobileSelectorOpen
                ? style.card.details.info.delivery.base.mobile.active.on
                : style.card.details.info.delivery.base.mobile.active.off
            } `}
          >
            {fulfillment?.expectation?.short && (
              <div
                className={` 
                ${fulfillment.expectation.short.includes('day') ? 'bg-[#F3F4F6] text-[#111928]' : 'bg-[#DEF7EC] text-[#03543F]'}
                ${style.card.details.info.delivery.time.base} 
                ${
                  isMobile &&
                  isMobileSelectorOpen &&
                  style.card.details.info.delivery.time.mobile.active.on
                }
                `}
              >
                {fulfillment.expectation.short.includes('day') ? (
                  <Truck className="h-4 w-4 mr-1" />
                ) : (
                  <Clock />
                )}
                <span className="my-0">{fulfillment.expectation.short}</span>
              </div>
            )}
            <p
              className={`${
                isMobile
                  ? style.card.details.info.delivery.fee.mobile
                  : style.card.details.info.delivery.fee.base
              }`}
            >
              {minFee ? `${currencyFormat(minFee)} minimum` : 'No Store Minimum'} +
              {fee ? ` ${currencyFormat(fee)} Delivery Fee` : ' No Delivery Fee'}
            </p>
          </div>
        </div>
      </div>
      {!(isMobile && isSelected && !isMobileSelectorOpen) && (
        <span className={style.card.price}>{currencyFormat(variant.price)}</span>
      )}
    </div>
  );
};

function StoreSelector({
  retailers,
  selectedRetailerId,
  setSelectedRetailerId,
  isMobileSelectorOpen,
  setIsMobileSelectorOpen,
  sizeSelected,
}: StoreSelectorProps) {
  if (!selectedRetailerId) {
    setSelectedRetailerId(retailers[0].id);
  }

  const { config } = useAppContext();
  const { width } = useBounds();
  const { isMobile: isMobileFn } = useResponsive();
  const isMobile = config.useWidthFromWindow ? isMobileFn() : isMobileFn(width);

  return (
    <div
      className={`${style.base.all}
        ${isMobile && isMobileSelectorOpen && style.base.mobile.active.on}
        ${isMobile && !isMobileSelectorOpen && style.base.mobile.active.off}
    	`}
    >
      {(!isMobile || (isMobileSelectorOpen && isMobile)) && (
        <>
          <div className={style.back.base} onClick={() => setIsMobileSelectorOpen(false)}>
            <ChevronLeftOutline className={style.back.chevron} />
            <span className={style.back.text}>Back</span>
          </div>
          <h3
            className={`${style.title.base} ${isMobile && style.title.mobile}
        `}
          >
            Select store
          </h3>
        </>
      )}
      <div
        className={`${
          isMobile ? style.cards.mobile.active.on : `${style.cards.mobile.active.off} max-h-[450px]`
        }
        ${isMobileSelectorOpen ? style.cards.mobile.open : style.cards.mobile.close}
        `}
      >
        {retailers.slice(0, MAX_RETAILERS_DISPLAYED).map((retailer, i) => {
          const selectedFulfillment = retailer.fulfillments[0];
          return (
            <StoreSelectorCard
              key={i}
              isSelected={retailer.id === selectedRetailerId}
              sizeSelected={sizeSelected}
              retailer={retailer}
              onClickFunction={() => {
                setSelectedRetailerId(retailer.id);
                setIsMobileSelectorOpen(false);
              }}
              fulfillment={selectedFulfillment as IRetailerFulfillment}
              isMobileSelectorOpen={isMobileSelectorOpen}
              setIsMobileSelectorOpen={setIsMobileSelectorOpen}
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </div>
  );
}

export default memo(StoreSelector);
