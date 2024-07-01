import classNames from 'classnames';
import { memo } from 'preact/compat';

interface Props {
  active?: boolean;
  borderColor: string;
  color: string;
  disabled?: boolean;
  mobile?: boolean;
  onClick: () => void;
  primaryBackground: string;
  rounded?: boolean;
  secondaryBackground: string;
  size: string;
  type: string;
}

function SizeItem({
  rounded,
  borderColor,
  primaryBackground,
  secondaryBackground,
  color,
  active,
  disabled,
  onClick,
  size,
  type,
}: Props) {
  return (
    <div className="px-1">
      <div
        className={classNames(
          'border text-center px-2 py-1 md:py-2 sm:px-2 cursor-pointer select-none flex flex-col justify-center w-full font-bold overflow-hidden',
          rounded ? 'rounded' : 'rounded-none',
          { 'opacity-50 cursor-not-allowed': disabled },
        )}
        onClick={onClick}
        style={{
          borderColor: active ? borderColor : 'transparent',
          background: active ? primaryBackground : secondaryBackground,
          color,
        }}
      >
        <div className="text-base font-['Open_Sans']" style={{ color }}>
          {size}
        </div>
        <div
          className="text-[10px] whitespace-nowrap truncate"
          style={{ color }}
          title={type?.toUpperCase()}
        >
          {type?.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default memo(SizeItem);
