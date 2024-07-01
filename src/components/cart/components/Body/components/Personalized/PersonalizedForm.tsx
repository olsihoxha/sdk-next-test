import { memo, useCallback, useMemo, useRef } from 'preact/compat';
import Button from '../../../../../common/ui/Button';
import Input from '../../../../../common/ui/Input';
import { useStyles } from '../../../../../common/context/ThemeContext/ThemeContext';

interface PersonalizedFormProps {
  className?: string;
  engravingMessage: string[];
  linesNumber: number;
  maxLineLength: number;
  onCancel: () => void;
  onSave: (message: string[]) => void;
  setEngravingMessage: (message: string[]) => void;
}

function PersonalizedForm({
  linesNumber,
  engravingMessage,
  setEngravingMessage,
  maxLineLength,
  onSave,
  onCancel,
}: PersonalizedFormProps) {
  const initialMessage = useRef<string[]>(engravingMessage);
  const styles = useStyles();
  const engravingHandler = useCallback(
    (msg: string[]) => {
      setEngravingMessage(msg);
    },
    [setEngravingMessage],
  );

  const isRounded = useMemo(() => {
    return styles.general.element.corners === 'rounded';
  }, [styles.general.element.corners]);

  const handleOnCancel = () => {
    setEngravingMessage(initialMessage.current);
    onCancel?.();
  };

  return (
    <div className={'h-full w-full flex flex-col justify-between items-center px-3'}>
      <div className={'w-full h-full flex flex-col justify-start items-center'}>
        <div className={'w-full flex items-center'}>
          <h5 className="h5 text-base font-bold mr-2 text-start">Personalize</h5>
          <a
            role="button"
            onClick={handleOnCancel}
            style={{
              color: styles.text.hyperlink.color,
              fontFamily: styles.text.hyperlink.font,
            }}
          >
            Cancel
          </a>
        </div>
        {Array(linesNumber)
          .fill('')
          .map((_, i) => (
            <div className="mt-4 w-full" key={`line${i}`}>
              <Input
                label={`Line ${i + 1}`}
                optional={i > 0}
                labelColor={'#64748B'}
                characterCount={`${engravingMessage?.length}/${maxLineLength}`}
                className={
                  'input-md blur-0 w-full outline-none ring-0 focus-within:border-0 focus-within:ring-0 focus-visible: focus:outline-none text-sm'
                }
                style={{
                  color: styles.text.body.color,
                  borderRadius: isRounded ? '10px' : 'unset',
                  border: styles.general.element.border
                    ? `1px solid ${styles.general.element.border}`
                    : 'unset',
                }}
                size="md"
                value={engravingMessage[`line${i + 1}` as keyof string[]] as string}
                onInput={(e) => {
                  engravingHandler({
                    ...engravingMessage,
                    [`line${i + 1}`]:
                      e.target.value.length <= maxLineLength
                        ? e.target.value.toUpperCase()
                        : e.target.value.substring(0, maxLineLength),
                  });
                }}
              />
            </div>
          ))}
      </div>
      <div className={'w-full h-full flex flex-col justify-end items-center mt-5'}>
        <Button
          style={{
            background: styles.components.overlay.btnSave.bg,
            color: styles.components.overlay.btnSave.text,
            border:
              styles.components.overlay.btnSave.border &&
              `1px solid ${styles.components.overlay.btnSave.border}`,
          }}
          shape={isRounded ? 'circle' : 'none'}
          disabled={engravingMessage[0] === ''}
          variant="default"
          block
          onClick={() => onSave(engravingMessage)}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default memo(PersonalizedForm);
