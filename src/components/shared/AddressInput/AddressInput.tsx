import { INCOMPLETE_ADDRESS_MSG } from '../constants';
import { useStyles } from '../../common/context/ThemeContext/ThemeContext';
import Input from '../../common/ui/Input';
import AutoComplete from '../../common/ui/AutoComplete';
import { ILocInterface } from '@liquidcommercedev/sdk';

interface Props {
  address: ILocInterface;
  apt: string;
  handleSelection: (placeId: string) => void;
  setApt: (val: any) => void;
  isCompleteAddress: boolean;
}

function AddressInput(props: Props) {
  const styles = useStyles();
  const { setApt, apt, handleSelection, address, isCompleteAddress } = props;
  return (
    <>
      <AutoComplete
        handleSelection={handleSelection}
        initialValue={address.address.one
          .split(',')
          .map((a, i) => (i === 0 && apt !== '' ? `${a}, ${apt}` : a))
          .join(',')}
        bg={styles.colors.bg}
        inputBg={styles.colors.bg.secondary}
        primaryColor={styles.colors.primary}
        fontColor={styles.fonts.color}
        radius="10px"
        label="Enter your delivery address"
        rounded={styles.rounded}
      />
      {!isCompleteAddress && (
        <p className="text-xs text-red-500 w-full mt-2 truncate" title={INCOMPLETE_ADDRESS_MSG}>
          {INCOMPLETE_ADDRESS_MSG}
        </p>
      )}
      <div className="w-full flex justify-center items-center mt-2 relative">
        <Input
          label="Address 2 (apt, floor, suite, etc.)"
          inputClassContainer="w-full flex justify-center items-center"
          optional={false}
          labelColor={styles.fonts.color}
          className="leading-5 border-none text-sm border-0 outline-none ring-0 focus-within:border-0 focus-within:ring-0 focus-visible: focus:outline-none text-sm"
          style={{
            color: styles.fonts.color,
            borderRadius: styles.rounded ? '10px' : 'unset',
            background: styles.colors.bg.secondary,
          }}
          disabled={address.address.one === ''}
          size="md"
          value={apt}
          onInput={(e) => setApt(e.target.value)}
        />
      </div>
    </>
  );
}

export default AddressInput;
