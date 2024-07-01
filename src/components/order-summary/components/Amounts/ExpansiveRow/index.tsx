import Element from './ExpansiveRow';
import { useStyles } from '../../../../common/context/ThemeContext/ThemeContext';
import { useState } from 'preact/compat';
import { ComponentChildren } from 'preact';

interface ExpansiveRowProps {
  title: string;
  titleValue: string;
  children: ComponentChildren;
}

function ExpansiveRow({ children, ...rest }: ExpansiveRowProps) {
  const styles = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Element
      toggleIsOpen={toggleIsOpen}
      isOpen={isOpen}
      backgroundSecondaryColor={styles.colors.bg.secondary}
      children={children}
      {...rest}
    />
  );
}
export default ExpansiveRow;
