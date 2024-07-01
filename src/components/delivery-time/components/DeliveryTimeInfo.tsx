import MovingClock from '../../../assets/icons/MovingClock';
import Truck from '../../../assets/icons/Truck';
import { useStyles } from '../../common/context/ThemeContext/ThemeContext';
import { DeliveryTimeInfoProps } from './interfaces';

const DeliveryTimeInfo = ({
  setEditMode,
  numDeliverItems,
  deliverTime,
  numShippingItems,
  shippingTime,
  scheduledDelivery,
  sx = '',
}: DeliveryTimeInfoProps) => {
  const styles = useStyles();

  const convertDateString = (
    inputDate: string | undefined,
    timeRange: string | undefined,
  ): string => {
    if (!inputDate) {
      return null;
    }
    const parts = inputDate.split('-');
    if (parts.length !== 3) {
      throw new Error('Invalid date format');
    }

    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[0], 10);
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      throw new Error('Invalid date values');
    }

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const monthName = months[month - 1];

    return `Delivers ${monthName} ${day}, ${timeRange}`;
  };

  return (
    <div
      className={`!sm:py-4 !sm:px-6 flex flex-col sm:gap-4 gap-2 rounded-lg p-[15px] ${sx}`}
      style={{
        fontFamily: styles.text.headings.font,
        backgroundColor: styles.colors.bg.secondary,
        color: '#333333',
      }}
    >
      <div className="font-bold flex flex-row justify-between items-center">
        <div className="sm:text-lg text-base">Delivery Time</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex flex-row items-center gap-x-2">
            <MovingClock />
            <div className="sm:text-sm text-xs">
              {convertDateString(scheduledDelivery?.date, scheduledDelivery?.timeRange)
                ? convertDateString(scheduledDelivery.date, scheduledDelivery.timeRange)
                : `Delivers in ${deliverTime}`}{' '}
              ({numDeliverItems} items)
            </div>
          </div>
          <div
            onClick={() => setEditMode(true)}
            className="flex flex-row items-center gap-x-2 cursor-pointer"
          >
            <div className="sm:text-sm text-xs text-blue-500">
              {scheduledDelivery ? 'Edit' : 'Schedule'}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <Truck />
          <div className="sm:text-sm text-xs">
            Ships in {shippingTime} ({numShippingItems} item)
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTimeInfo;
