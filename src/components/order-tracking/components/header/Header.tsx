import { FC } from 'preact/compat';
import { TrackOrderIllustration } from '@/atoms/imagery/icons/illustrations/components/TrackOrderIllustration';

export interface OrderTrackingHeaderProps {
  orderNumber: string;
}

const Header: FC<OrderTrackingHeaderProps> = ({ orderNumber }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <TrackOrderIllustration color="blue" size="73" />
      <h3 className="md:text-xl xs:text-lg font-bold">Track Your Order!</h3>
      <p className="md:text-base xs:text-sm font-bold">
        Order Number:{' '}
        <span className="text-light-primary-color" data-testid="track-order-header-order-number">
          {orderNumber}
        </span>
      </p>
    </div>
  );
};

export default Header;
