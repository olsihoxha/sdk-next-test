import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { memo, useCallback, useRef } from 'preact/compat';
import { useStyles } from '../../context/ThemeContext/ThemeContext';
import type { EngravingMessage } from '../../../../types';

interface EngravingElementProp {
  engravingMessage: string[];
  lines: number;
  maxLineLength: number;
  onCancel: () => void;
  onSave: (message: string[]) => void;
  setEngravingMessage: (message: string[]) => void;
}

function EngravingForm(props: EngravingElementProp) {
  const { lines, engravingMessage, setEngravingMessage, maxLineLength, onSave, onCancel } = props;
  const initialMessage = useRef<string[]>(engravingMessage);
  const styles = useStyles();
  const engravingHandler = useCallback(
    (msg: string[]) => {
      setEngravingMessage(msg);
    },
    [setEngravingMessage],
  );

  const handleOnCancel = () => {
    setEngravingMessage(initialMessage.current);
    onCancel?.();
  };

  return (
    <div className="mt-7 w-full">
      <div className={'w-full h-full flex flex-col justify-start items-center'}>
        <h5 className="h5 text-base font-extrabold w-full">
          <span className="border-r-2 border-gray-100 pr-2">Personalize</span>
          <Button
            variant="plain"
            className="text-indigo-600 font-normal border-0 hover:bg-inherit ml-2"
            onClick={handleOnCancel}
            style={{ padding: 0 }}
          >
            Cancel
          </Button>
        </h5>
        {Array(lines)
          .fill('')
          .map((_, i) => (
            <div className="mt-4 w-full" key={`line${i}`}>
              <Input
                label={`Line ${i + 1}`}
                optional={i > 0}
                labelColor={'#64748B'}
                characterCount={`${
                  (engravingMessage[`line${i + 1}` as keyof EngravingMessage] as string)?.length ??
                  0
                }/${maxLineLength}`}
                className={
                  'input-md blur-0 w-full outline-none ring-0 focus-within:border-0 focus-within:ring-0 focus-visible: focus:outline-none z-50 text-sm'
                }
                style={{
                  color: styles.fonts.color,
                  borderRadius: styles.rounded ? '10px' : 'unset',
                  border: '1px solid #DAEAF6',
                }}
                size="md"
                value={engravingMessage[`line${i + 1}` as keyof EngravingMessage] as string}
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
            background: styles.colors.primary,
            color: styles.colors.bg.primary,
          }}
          shape={styles.rounded ? 'circle' : 'none'}
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

export default memo(EngravingForm);
