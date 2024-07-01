import Element from './AgeRequirement';
import { FunctionalComponent } from 'preact';
import { useCheckout } from '@/components/common/context/CheckoutContext/hooks/useCheckout';
import { checkout } from '@/signals';

const AgeRequirement: FunctionalComponent = () => {
  const { updateCheckout } = useCheckout();

  const updateBirthDate = (birthDate: string) => updateCheckout({ recipient: { birthDate } });

  if (!checkout.value?.shippingAddress) return null;

  return (
    <Element
      defaultBirthDate={checkout.value.shippingAddress.birthDate}
      onChange={updateBirthDate}
    />
  );
};

export default AgeRequirement;
