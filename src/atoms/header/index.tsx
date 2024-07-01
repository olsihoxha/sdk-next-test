import Element, { HeaderProps } from './Header';
import register from '@/register';
import { FC } from 'preact/compat';

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
  showCloseIcon,
  closeIcon,
}) => {
  return (
    <Element
      text={text}
      textSize={textSize}
      showCheckbox={showCheckbox}
      checkboxLabel={checkboxLabel}
      showFrontIcon={showFrontIcon}
      frontIcon={frontIcon}
      showEditLink={showEditLink}
      showBackIcon={showBackIcon}
      backIcon={backIcon}
      showCloseIcon={showCloseIcon}
      closeIcon={closeIcon}
    />
  );
};

register(
  Header,
  'liquid-header',
  [
    'text',
    'textSize',
    'showCheckbox',
    'checkboxLabel',
    'showFrontIcon',
    'frontIcon',
    'showEditLink',
    'showBackIcon',
    'backIcon',
    'showBackButton',
    'showCloseIcon',
    'closeIcon',
  ],
  { shadow: true },
);

export default Header;
