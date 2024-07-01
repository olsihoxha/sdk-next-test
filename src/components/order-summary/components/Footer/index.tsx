import Element from './Footer';
import { useStyles } from '../../../common/context/ThemeContext/ThemeContext';

function Footer() {
  const styles = useStyles();

  return (
    <Element
      fontFamily={styles.fonts.family}
      primaryColor={styles.colors.primary}
      fontColor={styles.fonts.color}
    />
  );
}

export default Footer;
