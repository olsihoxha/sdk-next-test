import Fields from './EngravingForm';
import { useCallback } from 'preact/compat';
import {
  engravingActive,
  engravingMessage,
  setEngravingActive,
  setEngravingMessage,
} from '@/signals';

interface EngravingProps {
  maxLineLength?: number;
}

function EngravingForm({ maxLineLength }: EngravingProps) {
  const onCancel = useCallback(() => {
    setEngravingActive(false);
  }, []);

  const onSave = useCallback((message: string[]) => {
    setEngravingMessage(message);
  }, []);

  if (!engravingActive.value) {
    return null;
  }
  return (
    <Fields
      lines={3}
      engravingMessage={engravingMessage.value}
      setEngravingMessage={setEngravingMessage}
      onSave={onSave}
      onCancel={onCancel}
      maxLineLength={maxLineLength || 16}
    />
  );
}

export default EngravingForm;
