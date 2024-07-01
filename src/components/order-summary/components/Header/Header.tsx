import { CurrencyDollarOutline } from '@liquidcommerceteam/preact-heroicons';
import React from 'preact/compat';
import Button from '../../../common/ui/Button';

interface HeaderProps {
  showItems: boolean;
  setShowItems: (showCollapse: boolean) => void;
}

function Header({ showItems, setShowItems }: HeaderProps) {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between gap-4 text-2xl font-bold py-4">
        <CurrencyDollarOutline className="shrink-0" style={{ fontSize: '40px' }} />
        <div className="grow">Order Summary</div>
        <Button
          variant="plain"
          style={{ padding: 0 }}
          className="hover:bg-inherit"
          onClick={() => setShowItems(!showItems)}
        >
          <span className="text-sm text-blue-500 font-normal">
            {showItems ? 'Hide items ' : 'Show items'}
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Header;
