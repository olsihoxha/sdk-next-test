import classNames from 'classnames';
import Spinner from '../Spinner';
import useColorLevel from '../../../hooks/useColorLevel';
import { useConfig } from '../../context/ThemeContext/ThemeContext';
import { CSSProperties, forwardRef } from 'preact/compat';
import type { ComponentChildren } from 'preact';
import { CONTROL_SIZES, SIZES } from '../../type/constants';
import { MutableRef } from 'preact/hooks';

type BtnColors = {
  bgColor: string;
  textColor: string;
  hoverColor: string;
  activeColor: string;
};

type Ref = HTMLButtonElement;

export type ButtonProps = {
  active?: boolean;
  block?: boolean;
  className?: string;
  color?: string;
  children?: ComponentChildren;
  disabled?: boolean;
  icon?: string | ComponentChildren;
  loading?: boolean;
  onClick?(event: MouseEvent): void;
  ref?: MutableRef<HTMLButtonElement>;
  shape?: 'round' | 'circle' | 'none';
  size?: string;
  style?: string | CSSProperties | undefined;
  variant?: 'solid' | 'twoTone' | 'plain' | 'default';
};

const SHAPES = {
  round: 'md',
  circle: 'full',
  none: 'none',
};

const Button = forwardRef<Ref, ButtonProps>((props: ButtonProps, ref) => {
  const {
    children,
    size,
    color,
    shape,
    variant,
    block,
    icon,
    className,
    disabled,
    loading,
    active,
    style,
    ...rest
  } = props;

  const { themeColor, controlSize, primaryColorLevel } = useConfig();
  const defaultClass = 'button';
  const sizeIconClass = 'inline-flex items-center justify-center';

  const splitColor = color?.split('-');

  const buttonSize = size || controlSize;
  const buttonColor = splitColor?.[0] || themeColor;
  const buttonColorLevel = splitColor?.[1] || primaryColorLevel;

  const [increaseLevel, decreaseLevel] = useColorLevel(buttonColorLevel);

  const getButtonSize = () => {
    let sizeClass = '';
    switch (buttonSize) {
      case SIZES.LG:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.lg}`,
          icon && !children
            ? `w-${CONTROL_SIZES.lg} ${sizeIconClass} text-2xl`
            : 'px-8 py-2 text-base',
        );
        break;
      case SIZES.SM:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.sm}`,
          icon && !children
            ? `w-${CONTROL_SIZES.sm} ${sizeIconClass} text-lg`
            : 'px-3 py-2 text-sm',
        );
        break;
      case SIZES.XS:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.xs}`,
          icon && !children
            ? `w-${CONTROL_SIZES.xs} ${sizeIconClass} text-base`
            : 'px-3 py-1 text-xs',
        );
        break;
      default:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.md}`,
          icon && !children ? `w-${CONTROL_SIZES.md} ${sizeIconClass} text-xl` : 'px-8 py-2',
        );
        break;
    }
    return sizeClass;
  };

  const disabledClass = 'opacity-50 cursor-not-allowed';

  const solidColor = () => {
    const btn = {
      bgColor: active
        ? `bg-${buttonColor}-${increaseLevel}`
        : `bg-${buttonColor}-${buttonColorLevel}`,
      textColor: 'text-white',
      hoverColor: active ? '' : `hover:bg-${buttonColor}-${decreaseLevel}`,
      activeColor: `active:bg-${buttonColor}-${increaseLevel}`,
    };
    return getBtnColor(btn);
  };

  const twoToneColor = () => {
    const btn = {
      bgColor: active
        ? `bg-${buttonColor}-200 dark:bg-${buttonColor}-50`
        : `bg-${buttonColor}-50 dark:bg-${buttonColor}-500 dark:bg-opacity-20`,
      textColor: `text-${buttonColor}-${buttonColorLevel} dark:text-${buttonColor}-50`,
      hoverColor: active
        ? ''
        : `hover:bg-${buttonColor}-100 dark:hover:bg-${buttonColor}-500 dark:hover:bg-opacity-30`,
      activeColor: `active:bg-${buttonColor}-200 dark:active:bg-${buttonColor}-500 dark:active:bg-opacity-40`,
    };
    return getBtnColor(btn);
  };

  const defaultColor = () => {
    const btn = {
      bgColor: active
        ? `bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:border-gray-500`
        : `bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700`,
      textColor: `text-gray-600 dark:text-gray-100`,
      hoverColor: active ? '' : `hover:bg-gray-50 dark:hover:bg-gray-600`,
      activeColor: `active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500`,
    };
    return getBtnColor(btn);
  };

  const plainColor = () => {
    const btn = {
      bgColor: active ? `bg-gray-100 dark:bg-gray-500` : 'bg-transparent border border-transparent',
      textColor: `text-gray-600 dark:text-gray-100`,
      hoverColor: active ? '' : `hover:bg-gray-50 dark:hover:bg-gray-600`,
      activeColor: `active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500`,
    };
    return getBtnColor(btn);
  };

  const getBtnColor = ({ bgColor, hoverColor, activeColor, textColor }: BtnColors) => {
    return `${bgColor} ${
      disabled || loading ? disabledClass : `${hoverColor} ${activeColor}`
    } ${textColor}`;
  };

  const btnColor = () => {
    switch (variant) {
      case 'solid':
        return solidColor();
      case 'twoTone':
        return twoToneColor();
      case 'plain':
        return plainColor();
      case 'default':
        return defaultColor();
      default:
        return defaultColor();
    }
  };

  const classes = classNames(
    defaultClass,
    btnColor(),
    `${shape ? `rounded-${SHAPES[shape]}` : ''}`,
    getButtonSize(),
    className,
    block ? 'w-full' : '',
  );

  //TODO add type
  const handleClick = (e: MouseEvent) => {
    const { onClick } = props;
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const renderChildren = () => {
    if (loading && children) {
      return (
        <span className="flex items-center justify-center">
          <Spinner enableTheme={false} className="mr-1" isSpinning />
          {children}
        </span>
      );
    }

    if (icon && !children && loading) {
      return <Spinner enableTheme={false} />;
    }

    if (icon && !children && !loading) {
      return <>{icon}</>;
    }

    if (icon && children && !loading) {
      return (
        <span className="flex items-center justify-center">
          <span className="text-lg">{icon}</span>
          <span className="ltr:ml-1 rtl:mr-1">{children}</span>
        </span>
      );
    }

    return <>{children}</>;
  };

  return (
    <button ref={ref} style={style} className={classes} {...rest} onClick={handleClick}>
      {renderChildren()}
    </button>
  );
});

export default Button;
