import PromoLabel from './PromoLabel';
import Button from '../../../common/ui/Button';

export interface LoadedCode {
  type: 'promocode' | 'giftcard';
  value: string;
}

const formatPromoCode = (code: string) => {
  return `${code}`.replace(/[^a-zA-Z0-9]/gm, '');
};

interface PromoLoaderProps {
  errorMessage: string;
  loading: boolean;
  applyPromoCode: () => void;
  removePromoCode: (value: string) => void;
  promoCode: string;
  setPromoCode: (value: string) => void;
  loadedCodes: LoadedCode[];
}

function PromoLoader({
  errorMessage,
  loading,
  applyPromoCode,
  removePromoCode,
  promoCode,
  setPromoCode,
  loadedCodes,
}: PromoLoaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 self-start text-xs w-full">
          <div
            className={`border border-${
              errorMessage ? 'red' : 'gray'
            }-300 rounded-[10px] py-3 px-4 bg-white`}
          >
            <input
              placeholder="Enter Promo Code or Gift Card"
              className="text-sm w-full focus:outline-none disabled:bg-white"
              type="text"
              value={promoCode ?? ''}
              disabled={loading}
              onInput={(event) => {
                const newValue = formatPromoCode(event.currentTarget.value);
                if (newValue !== event.currentTarget.value) {
                  event.currentTarget.value = newValue;
                }
                setPromoCode(newValue);
              }}
            />
          </div>
          {errorMessage && <div class="text-red-500">{errorMessage}</div>}
        </div>
        <Button
          variant="plain"
          style={{ padding: 0 }}
          className="hover:bg-inherit"
          onClick={applyPromoCode}
        >
          <span className={`text-sm text-${loading ? 'gray' : 'blue'}-500 font-normal`}>Apply</span>
        </Button>
      </div>
      {loadedCodes.length > 0 && (
        <div className="flex flex-wrap flex-row gap-2 min-h-[22px]">
          {loadedCodes.map(({ value, type }) => (
            <PromoLabel
              key={`code-label-${value}`}
              onRemove={() => removePromoCode(value)}
              type={type}
              value={value}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PromoLoader;
