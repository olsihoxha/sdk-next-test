import Element, { ButtonProps } from './Button';
import { useStyles } from '../../context/ThemeContext/ThemeContext';

function Button(props: ButtonProps) {
  const styles = useStyles();
  const { general } = styles;
  return (
    <Element
      className="rounded-[100px] px-6 basis-full"
      variant="solid"
      style={{
        borderRadius: general.element.corners === 'rounded' ? '' : 'unset',
        borderWidth: '1px',
        borderColor: general.header.btnBorder,
        background: general.header.btnBg,
        color: general.header.btnText,
      }}
      {...props}
    />
  );
}

export default Button;
