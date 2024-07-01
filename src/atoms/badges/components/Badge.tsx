import classNames from 'classnames';
import { JSX } from 'preact/compat';

export interface BadgeProps {
  label: string;
  background?: string;
  color?: string;
  icon?: JSX.Element | string;
  iconPosition?: 'left' | 'right';
  border?: string; // 1 | 2 | 4 | 8
  borderColor?: string; // #ff0000 - hex format pls
  floating?: boolean;
}
//Please leave the commented code as is, it is commented because it is not used in the component yet and lint throws errors.
const Badge = ({
  label,
  background,
  color,
  icon,
  iconPosition,
  border,
  borderColor,
  floating,
}: BadgeProps) => {
  return (
    <div
      className={classNames(
        `p-1 px-1.5 inline-flex items-center gap-1 rounded-md text-[10px] lg:text-xs font-bold`,
        iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse',
        border ? `border-${border}` : '',
        {
          'absolute -top-3 right-2': floating,
          'inline-flex': !floating,
        },
      )}
      style={{
        lineHeight: '18px',
        background,
        color,
        borderColor,
      }}
    >
      {icon !== null ? <span>{icon}</span> : ''}
      {label}
    </div>
  );
};

export default Badge;
