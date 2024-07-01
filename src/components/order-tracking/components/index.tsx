import ProgressBar from './progress-bar/ProgressBar';
import TrackingMap from './tracking-map/TrackingMap';
import Header from './header/Header';
import DeliveryInfo from '@/components/delivery-info/components/DeliveryInfo';
import GeneralHeader from '@/components/shared/Header';
import { AnotherRetailerLogo } from '@/assets/icons/AnotherRetailerLogo';
import { SingleRetailerBody } from '@/components/cart/components/SingleRetailer/components';
import { checkout, order } from '@/signals';

const OrderTracking = () => {
  const shippingDetails = checkout?.value?.shippingAddress;
  const retailer = checkout?.value?.retailers?.[0];
  const retailerAddress = `${retailer?.address.one} ${retailer?.address.two}, ${retailer?.address.city}, ${retailer?.address.state}`;

  return (
    <div className="flex flex-col items-center max-w-3xl">
      <Header orderNumber={order?.value?.number} />
      <div className="shadow-md py-4  mt-8 rounded bg-white">
        <ProgressBar status="confirmed" delivery="Estimated delivery today" />
        <TrackingMap retailerAddress={retailerAddress} shippingAddress={shippingDetails?.two} />
        {retailer && (
          <div key={retailer.id} className="flex flex-col p-6">
            <GeneralHeader
              className="flex flex-start text-base font-bold gap-1"
              title={retailer.name}
              showCloseIcon={false}
              icon={<AnotherRetailerLogo />}
            />
            <div className="rounded-2xl my-6 py-4 bg-light-secondary-background">
              <SingleRetailerBody readOnly={true} retailerId={retailer?.id} />
            </div>
          </div>
        )}
      </div>
      <div className="shadow-md mt-8 py-4 px-6 rounded bg-white w-full">
        {shippingDetails && <DeliveryInfo shippingDetails={shippingDetails} showTitle={true} />}
      </div>
    </div>
  );
};

export default OrderTracking;
