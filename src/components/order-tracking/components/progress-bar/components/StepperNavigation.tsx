import {
  CheckOutline,
  HandThumbUpOutline,
  ShoppingCartOutline,
  TruckOutline,
} from '@liquidcommerceteam/preact-heroicons';
import IconShape from './IconShape';
import { StatusMapperItem, StatusMapperValue } from '../ProgressBar';
import { Fragment } from 'preact';
import classNames from 'classnames';

export interface StepperNavigationProps {
  statusMapper: Record<StatusMapperValue, StatusMapperItem>;
}

const getIconComponent = (step: number) => {
  switch (step) {
    case 1:
      return ShoppingCartOutline;
    case 2:
      return HandThumbUpOutline;
    case 3:
      return TruckOutline;
    case 4:
      return CheckOutline;
    default:
      return null;
  }
};

// Determine the stroke color based on the fulfillment status
const getStrokeColor = (fulfilled: boolean) => {
  return fulfilled ? 'white' : 'primary';
};

const StepperNavigation = ({ statusMapper }: StepperNavigationProps) => {
  return (
    <div className="flex justify-between items-center self-stretch w-full space-x-0">
      {Object.values(statusMapper).map((sts) => {
        const IconComponent = getIconComponent(sts.step);
        const strokeColor = getStrokeColor(sts.fulfilled);
        //finding if the next status is fulfilled so to color the line in between
        const isLineColored = Object.values(statusMapper).find(
          (item) => item.step === sts.step + 1,
        )?.fulfilled;
        return (
          <Fragment key={sts.step}>
            <IconShape
              icon={
                <IconComponent
                  className={classNames(
                    'w-4 h-4 lg:w-7 lg:h-7 stroke-1 lg:stroke-2 min-w-4 lg:min-w-7',
                    strokeColor && `stroke-${strokeColor}`,
                  )}
                />
              }
              isFulfilled={sts.fulfilled}
            />
            {sts.step !== 4 && (
              <div
                className={classNames('h-[4px] lg:h-[6px] w-full flex-1 flex-shrink', {
                  'bg-primary': isLineColored,
                  'bg-secondary': !isLineColored,
                })}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default StepperNavigation;
