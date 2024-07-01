import { FunctionalComponent } from 'preact';
import classNames from 'classnames';

type Props = {
  isSpining?: boolean;
  style?: object;
  className?: string;
  size?: string | number;
  color?: string;
};

const Spinner: FunctionalComponent<Props> = (props) => {
  const { className, color, isSpining, size, style, ...rest } = props;

  // TODO: analyze keep or remove
  // const {themeColor, primaryColorLevel} = useConfig()

  const spinnerColor = color; // || (enableTheme && `${themeColor}-${primaryColorLevel}`)

  const spinnerStyle = {
    height: size,
    width: size,
    color,
    ...style,
  };

  const spinnerClass = classNames(
    isSpining && 'animate-spin',
    color ? '' : spinnerColor && `text-${spinnerColor}`,
    className,
  );

  return (
    <div style={spinnerStyle} className={spinnerClass} {...rest}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className="animate-spin"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style="color: rgb(0, 61, 166); height: 40px; width: 40px;"
      >
        <path
          opacity="0.2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="currentColor"
        />
        <path
          d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Spinner;
