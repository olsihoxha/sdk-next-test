import { useCallback, useState } from 'preact/compat';
import Element from './AddressInput';
import { ILocInterface } from '@liquidcommercedev/sdk';
import { loc } from '@/signals';

interface AddressInputProps {
  setActive: (val: boolean) => void;
  setSelectedAddress: (val: ILocInterface) => void;
}

function AddressInput({ /*setActive,*/ setSelectedAddress }: AddressInputProps) {
  // const { client } = useClient();
  const [tempAddress, setTempAddress] = useState<ILocInterface>(loc.value);
  const [
    isCompleteAddress,
    // setIsCompleteAddress
  ] = useState(true);
  // const [apt] = useState(loc.value.address.two);
  const setApt = useCallback(() => {
    setSelectedAddress({ ...(tempAddress || loc.value) });
    setTempAddress({ ...(tempAddress || loc.value) });
  }, [setSelectedAddress, tempAddress]);

  const handleSelection = useCallback(
    async () => {
      // const response = (await client?.address({ placeId })) as SelectedAddress | undefined;
      // if (response) {
      //   setTempAddress(response as SelectedAddress);
      //   setSelectedAddress({ ...response, apt });
      //   setActive(!!response?.address1 && !!response?.streetNumber);
      //   setIsCompleteAddress(!!response?.address1 && !!response?.streetNumber);
      // }
    },
    [
      /*client, setSelectedAddress, apt, setActive*/
    ],
  );

  return (
    <Element
      handleSelection={handleSelection}
      setApt={setApt}
      apt={tempAddress?.address.one || ''}
      address={tempAddress}
      isCompleteAddress={isCompleteAddress}
    />
  );
}

export default AddressInput;
