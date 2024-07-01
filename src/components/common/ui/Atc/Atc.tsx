import React, { memo } from 'preact/compat';
import Button from '../Button/Button';

export interface AtcProps {
  background: string;
  color: string;
  disabled: boolean;
  isLoading: boolean;
  label: string;
  onClick: () => void;
  rounded: boolean;
}

function Atc({ rounded, background, color, onClick, disabled, isLoading, label }: AtcProps) {
  return (
    <Button
      className="w-full !py-[13px] !px-[24px] !h-[40px] md:!h-[48px] !leading-none font-bold !text-sm md:!text-base flex items-center justify-center font-['Open_Sans']"
      disabled={disabled}
      style={{
        background,
        color,
      }}
      variant="solid"
      shape={rounded ? 'round' : 'none'}
      size={'md'}
      block={false}
      loading={isLoading}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default memo(Atc);
