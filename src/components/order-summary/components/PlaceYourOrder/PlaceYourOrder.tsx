import React from 'preact/compat';
import Button from '../../../common/ui/Button';

interface PlaceYourOrderProps {
  fontFamily: string;
  disabled: boolean;
  label: string;
  onClick: () => void;
}

function PlaceYourOrder({ fontFamily, disabled, label, onClick }: PlaceYourOrderProps) {
  return (
    <div className="flex flex-col gap-3" style={{ fontFamily }}>
      <Button disabled={disabled} onClick={onClick}>
        {label}
      </Button>
    </div>
  );
}

export default PlaceYourOrder;
