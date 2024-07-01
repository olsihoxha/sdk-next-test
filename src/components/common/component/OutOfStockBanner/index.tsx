import classNames from 'classnames';
import { InformationCircleSolid } from '@liquidcommerceteam/preact-heroicons';

interface Props {
  className?: string;
  message?: string;
}

const DEFAULT_MESSAGE = `The product you're looking for is not available at the moment`;

function OutOfStockBanner({ className, message = DEFAULT_MESSAGE }: Props) {
  return (
    <div className={classNames('bg-blue-50 rounded-lg p-4 flex flex-row', className)}>
      <InformationCircleSolid className="mr-2 text-2xl text-blue-400" />
      <span className="text-base text-blue-400">{message}</span>
    </div>
  );
}

export default OutOfStockBanner;
