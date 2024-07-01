import classNames from 'classnames';
import { useConfig } from '../../context/ThemeContext/ThemeContext';

type Props = {
  isSpinning?: boolean;
  enableTheme?: boolean;
  style?: object;
  className?: string;
  size?: string | number;
  color?: string;
};

function Spinner(props: Props) {
  const { className, color, enableTheme, isSpinning, size, style, ...rest } = props;

  const { themeColor, primaryColorLevel } = useConfig();

  const spinnerColor = color || (enableTheme && `${themeColor}-${primaryColorLevel}`);

  const spinnerStyle = {
    height: size,
    width: size,
    color,
    ...style,
  };

  const spinnerClass = classNames(
    isSpinning && 'animate-spin',
    color ? '' : spinnerColor && `text-${spinnerColor}`,
    className,
  );

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={spinnerStyle}
      className={spinnerClass}
      {...rest}
    >
      <path
        opacity="0.2"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor" />
    </svg>
  );
}

export default Spinner;
