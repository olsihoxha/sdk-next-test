import Element from './EngravingViewer';
import { useCallback } from 'preact/compat';
import { useStyles } from '../../context/ThemeContext/ThemeContext';
import { engravingMessage, setEngravingActive } from '@/signals';

interface EngravingProps {
  className?: string;
}

function EngravingViewer({ className }: EngravingProps) {
  const styles = useStyles();

  const onEdit = useCallback(() => {
    setEngravingActive(true);
  }, []);

  return (
    <div className={className}>
      <Element
        backgroundColor={styles.colors.bg.secondary}
        color={styles.colors.primary}
        rounded={styles.rounded}
        lines={3}
        engravingMessage={engravingMessage.value}
        onEdit={onEdit}
      />
    </div>
  );
}

export default EngravingViewer;
