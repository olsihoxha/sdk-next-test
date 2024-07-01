import { FC, JSX } from 'preact/compat';
import classNames from 'classnames';
import Checkbox from '../forms/Checkbox';

export interface HeaderProps {
  text: string;
  textSize?: string;

  showCheckbox?: boolean;
  checkboxLabel?: string;

  showFrontIcon?: boolean;
  frontIcon?: JSX.Element | string;

  showEditLink?: boolean;

  showBackIcon?: boolean;
  backIcon?: JSX.Element | string;

  showTitleIcon?: boolean;
  titleIcon?: JSX.Element | string;

  showCloseIcon?: boolean;
  closeIcon?: JSX.Element | string;
}

const Header: FC<HeaderProps> = ({
  text,
  textSize,
  showCheckbox,
  checkboxLabel,
  showFrontIcon,
  frontIcon,
  showEditLink,
  showBackIcon,
  backIcon,
  showTitleIcon,
  titleIcon,
  showCloseIcon,
  closeIcon,
}) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      {/* Bag icon */}
      {showFrontIcon && frontIcon}
      {/* Back icon */}
      {showBackIcon && backIcon}
      {/* retailer icon */}
      {showTitleIcon && <div className="w-8 h-8 min-w-8">{titleIcon}</div>}
      {/* Header text */}
      <div className={classNames(`${textSize}`)}>{text}</div>
      {/* Checkbox */}
      {showCheckbox && (
        <Checkbox
          id="headerCheckbox"
          checked={true}
          label={checkboxLabel}
          labelTextSize="sm"
          labelWeight="normal"
          labelColor="[#333333]"
        />
      )}
      {/* Edit link */}
      {showEditLink && (
        <a
          className="cursor-pointer text-light-primary-color text-xs sm:text-sm"
          onClick={() => {
            //TODO: Implement edit functionality
          }}
        >
          Edit
        </a>
      )}
      {/* Close icon */}
      {showCloseIcon && closeIcon}
    </div>
  );
};

export default Header;
