/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from 'classnames';
import { FC } from 'preact/compat';
import { useResponsive } from '../../hooks';
import { PlusSolid } from '@liquidcommerceteam/preact-heroicons';
import { JSXInternal } from 'preact/src/jsx';

export const buttonTypes = (isMobileDevice?: boolean) => ({
  PrimaryButton: {
    backgroundColor: 'primary',
    textColor: '#FFFFFF',
    fontSize: isMobileDevice ? 'text-sm' : 'text-base',
    borderRadius: isMobileDevice ? 'rounded-md' : 'rounded-lg',
    padding: `px-6 ${isMobileDevice ? 'py-[10px]' : 'py-[13px]'}`,
    showIcon: false,
  },
  PrimaryOutline: {
    backgroundColor: 'transparent',
    textColor: '#1F5EA9',
    fontSize: isMobileDevice ? 'text-sm' : 'text-base',
    borderRadius: isMobileDevice ? 'rounded-md' : 'rounded-lg',
    padding: `px-6 ${isMobileDevice ? 'py-[10px]' : 'py-[13px]'}`,
    showIcon: false,
  },
  PrimaryIconOnly: {
    backgroundColor: '#1F5EA9',
    textColor: '#FFFFFF',
    size: '7',
    iconSize: 'w-5 h-5',
    padding: isMobileDevice ? 'p-3' : 'p-2',
    borderRadius: 'rounded-full',
    showIcon: true,
  },
  SecondaryIconOnly: {
    backgroundColor: 'transparent',
    textColor: '#1F5EA9',
    size: isMobileDevice ? '10' : '12',
    iconSize: 'w-6 h-6',
    padding: 'p-2',
    borderRadius: 'rounded-full',
    showIcon: true,
  },
});

export interface ButtonProps {
  buttonType?: 'PrimaryButton' | 'PrimaryOutline' | 'PrimaryIconOnly' | 'SecondaryIconOnly';
  type: 'button' | 'submit' | 'reset';
  id: string;
  label: string;
  disabled: boolean;
  onClick?: () => void;
  onSubmit?: () => void;
  customClassName: string;
  icon?: JSXInternal.Element;
}

const Button: FC<ButtonProps> = ({
  buttonType,
  type = 'button',
  id,
  label = 'Button Label',
  disabled,
  onClick,
  onSubmit,
  customClassName,
  icon = <PlusSolid className="w-6 h-6" style={{ strokeWidth: '3px' }} />,
}) => {
  const { isMobile } = useResponsive();
  const isMobileDevice = isMobile();

  const buttonTypeKey = Object.keys(buttonTypes(isMobileDevice)).find((key) => {
    return key === buttonType ? buttonTypes(isMobileDevice)[buttonType] : null;
  });
  const buttonTypeValue = buttonTypes(isMobileDevice)[buttonTypeKey];

  return (
    <div className="flex items-center">
      <button
        type={type}
        id={id}
        className={classNames(
          'w-full border border-solid border-primary gap-2 font-bold flex items-center justify-center',
          `${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
          `text-[${buttonTypeValue?.textColor}]`,
          `bg-${buttonTypeValue?.backgroundColor}`,
          `!${buttonTypeValue?.padding}`,
          `${buttonTypeValue?.borderRadius}`,
          `!w-${buttonTypeValue?.size}`,
          `h-${buttonTypeValue?.size}`,
          customClassName,
        )}
        style={{
          backgroundColor: buttonTypeValue?.backgroundColor,
          color: buttonTypeValue?.textColor,
        }}
        onClick={onClick}
        onSubmit={onSubmit}
      >
        {buttonTypeValue?.showIcon ? icon : label}
      </button>
    </div>
  );
};

export default Button;
