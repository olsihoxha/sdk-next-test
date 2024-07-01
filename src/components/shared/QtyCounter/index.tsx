import Element from './QtyCounter';
import { memo, useCallback, useEffect } from 'preact/compat';
import { useStyles } from '../../common/context/ThemeContext/ThemeContext';
import useResponsive from '../../../hooks/useResponsive';

interface QtyCounterProps {
  value: number;
  maxValue: number;
  onChange: (value: number) => void;
}

function QtyCounter({ value, maxValue, onChange }: QtyCounterProps) {
  const { smaller } = useResponsive();
  const styles = useStyles();

  const onAddOne = useCallback(() => {
    return onChange(value < maxValue ? value + 1 : maxValue);
  }, [onChange, value, maxValue]);

  const onRemoveOne = useCallback(() => {
    return onChange(value === 1 ? 1 : value - 1);
  }, [onChange, value]);

  useEffect(() => {
    if (value > maxValue) {
      onChange(maxValue);
    }
    if (value === 0 && maxValue > 0) {
      onChange(1);
    }
  }, [maxValue, onChange, value]);

  return (
    <Element
      onRemoveOne={onRemoveOne}
      disabledPlus={value === maxValue}
      color={styles.colors.primary}
      rounded={styles.rounded}
      fontFamily={styles.fonts.color}
      borderColor={styles.colors.primary}
      value={value}
      onAddOne={onAddOne}
      displayRemoveItemOnLastItem={false}
      paddingOnInput={!smaller}
    />
  );
}

export default memo(QtyCounter);
