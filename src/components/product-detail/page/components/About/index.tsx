import Element from './About';
import { useStyles } from '../../../../common/context/ThemeContext/ThemeContext';
import { engravingActive, product } from '@/signals';

function About() {
  const styles = useStyles();

  if (!product.value?.description || engravingActive.value) {
    return null;
  }

  return (
    <Element
      description={product.value.description}
      fontFamily={styles.fonts.family}
      color={styles.fonts.color}
    />
  );
}

export default About;
