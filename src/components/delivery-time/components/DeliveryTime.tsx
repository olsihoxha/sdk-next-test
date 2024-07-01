import DeliveryTimeInfo from './DeliveryTimeInfo';
import EditTime from './EditTime';
import { useState } from 'react';
import { DeliveryInfoInit, ScheduledData } from './interfaces';

const DeliveryTime = ({
  numDeliverItems,
  numShippingItems,
  deliverTime,
  shippingTime,
  sx,
}: DeliveryInfoInit) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [scheduledDelivery, setScheduledDelivery] = useState<ScheduledData | undefined>();

  return (
    <>
      {!isEditMode && (
        <DeliveryTimeInfo
          setEditMode={setIsEditMode}
          numDeliverItems={numDeliverItems}
          deliverTime={deliverTime}
          numShippingItems={numShippingItems}
          shippingTime={shippingTime}
          scheduledDelivery={scheduledDelivery}
          sx={sx}
        />
      )}
      {isEditMode && (
        <EditTime
          scheduledDelivery={scheduledDelivery}
          setScheduledDelivery={setScheduledDelivery}
          setEditMode={setIsEditMode}
          sx={sx}
        />
      )}
    </>
  );
};

export default DeliveryTime;
