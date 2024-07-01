import { useEffect, useState } from 'preact/compat';
import InfoIcon from '../../../../../assets/icons/InfoIcon';
import InputTextField from '../../../../../atoms/forms/InputTextField';
import Button from '../../../../../atoms/buttons';
import currencyFormat from '@/components/common/util/currencyFormat';
import PenIcon from '@/assets/icons/PenIcon';

export interface TipSelectorProps {
  tipsList?: string[];
  subtotal: number | string;
  onChange?: (e: any) => void;
}

const TipSelector = ({
  tipsList = ['10%', '15%', '20%'],
  subtotal,
  onChange,
}: TipSelectorProps) => {
  const numRegex = /\d+(\.\d{1,2})?/;
  const totalInt =
    typeof subtotal === 'string' ? parseInt(subtotal.match(numRegex)[0], 10) : subtotal;

  const [selectedTip, setSelectedTip] = useState<string>(tipsList[0]);
  const [customTipValue, setCustomTipValue] = useState('');
  const [openCustomInput, setOpenCustomInput] = useState(false);
  const [tipInCents, setTipInCents] = useState(0);

  useEffect(() => {
    if (selectedTip !== 'Custom') {
      const tipString = selectedTip.match(/\d+/i)?.[0];
      const tipInt = Math.floor(Math.abs((totalInt * parseInt(tipString, 10)) / 100));
      onChange?.(tipInt);
      setTipInCents(tipInt);
    } else {
      setTipInCents(0);
    }
  }, [onChange, selectedTip, totalInt]);

  const handleCustomTipChange = (e: any) => {
    setCustomTipValue(e.target.value);
  };

  const handleApplyCustomTip = () => {
    const tip = customTipValue.replace(/[^\d.]/g, '');
    const matchedTip = tip.match(numRegex);

    if (matchedTip && !customTipValue.includes('-')) {
      const tipValue = Math.max(parseFloat(matchedTip[0]), 0);
      const match = Math.floor(Math.abs(tipValue * 100));
      setTipInCents(match);
    } else {
      setTipInCents(0);
    }

    setOpenCustomInput(false);
  };

  useEffect(() => {
    onChange?.(tipInCents);
  }, [tipInCents, onChange]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex items-center text-xs md:text-sm">
          <span className="mr-2">Tip</span>
          <InfoIcon />
        </div>
        <div>{currencyFormat(tipInCents)}</div>
      </div>
      <div className="flex rounded-lg">
        {[...tipsList, 'Custom'].map((tip, index) => (
          <button
            key={`tip-${tip}`}
            onClick={() => {
              setSelectedTip(tip);
              tip === 'Custom' ? setOpenCustomInput(!openCustomInput) : setOpenCustomInput(false);
              setCustomTipValue('');
            }}
            className={`flex text-sm	md:text-base items-center justify-center px-3 md:px-6 py-2 md:py-2.5 cursor-pointer border-y border-r border-primary font-bold outline-none	
                             ${
                               selectedTip === tip
                                 ? 'bg-primary text-white'
                                 : 'bg-transparent text-primary'
                             }
                             ${tip === 'Custom' ? 'w-[90px] md:w-[114px]' : 'w-[71px] md:w-[107px]'}
                             ${index === 0 ? 'rounded-l-lg border-l' : ''} 
                             ${index === tipsList.length ? 'rounded-r-lg' : ''} 
                            `}
          >
            <span>{tip}</span>
            {selectedTip === 'Custom' && tip === 'Custom' && !openCustomInput && (
              <div className="min-w-[25px] ml-1">
                <PenIcon />
              </div>
            )}
          </button>
        ))}
      </div>
      <div className={`flex justify-between mt-4 ${openCustomInput ? 'block' : 'hidden'}`}>
        <InputTextField
          placeholder="$0.00"
          formData={null}
          value={customTipValue}
          handleChange={handleCustomTipChange}
        />
        <Button
          type="button"
          id="custom-tip"
          label="Apply"
          disabled={false}
          onClick={handleApplyCustomTip}
          customClassName="!border-none !font-normal !text-primary ml-4"
        />
      </div>
    </div>
  );
};

export default TipSelector;
