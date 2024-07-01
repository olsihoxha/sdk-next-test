import Title from '../../common/component/Title';

interface DeliveryInfoProps {
  shippingDetails: {
    canEmail?: boolean;
    one?: string;
    two?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  showTitle?: boolean;
}

const DeliveryInfo = ({ shippingDetails, showTitle }: DeliveryInfoProps) => {
  return (
    <>
      {showTitle && <Title title="Delivery Information" />}
      <div>
        <p>{shippingDetails.one}</p>
        {shippingDetails.two && <p>{shippingDetails.two}</p>}
        {shippingDetails.city && <p>{shippingDetails.city}</p>}
        {shippingDetails.state && <p>{shippingDetails.state}</p>}
        {shippingDetails.zip && <p>{shippingDetails.zip}</p>}
        <p>{`${shippingDetails.firstName} ${shippingDetails.lastName}`}</p>
        <p>{shippingDetails.email}</p>
        {shippingDetails.phone && <p>{shippingDetails.phone}</p>}
      </div>
    </>
  );
};

export default DeliveryInfo;
