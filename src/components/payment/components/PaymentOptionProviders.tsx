import { IconProps } from '../../../atoms/cards/CategoryCard/CategoryCard';
import ApplePay from '../../../atoms/imagery/logos/paymentGateway/components/ApplePay';
import PayPal from '../../../atoms/imagery/logos/paymentGateway/components/PayPal';
import Affirm from '../../../atoms/imagery/logos/paymentGateway/components/Affirm';
import Card from '../../../atoms/imagery/logos/paymentGateway/components/Card';
import { useResponsive } from '../../../hooks';

export enum PaymentProvider {
  ApplePay = 'ApplePay',
  PayPal = 'PayPal',
  Affirm = 'Affirm',
  Card = 'Card',
}

export const paymentProviderIcons = {
  [PaymentProvider.ApplePay]: {
    label: 'Apple Pay',
    icon: ({ color, size }: IconProps) => <ApplePay color={color} size={size} />,
  },
  [PaymentProvider.PayPal]: {
    label: 'PayPal',
    icon: ({ color, size }: IconProps) => <PayPal color={color} size={size} />,
  },
  [PaymentProvider.Affirm]: {
    label: 'Affirm',
    icon: ({ color, size }: IconProps) => <Affirm color={color} size={size} />,
  },
  [PaymentProvider.Card]: {
    label: 'Card',
    icon: ({ color, size }: IconProps) => <Card color={color} size={size} />,
  },
};

function PaymentOptionProviders({
  selected,
  onSelected,
}: {
  selected: PaymentProvider;
  onSelected: (provider: PaymentProvider) => void;
}) {
  const { larger } = useResponsive();
  return (
    <div className="flex gap-4">
      {Object.keys(paymentProviderIcons).map((provider, index) => {
        return (
          <div
            className="flex items-center gap-4 rounded-md"
            key={`payment-provider-${paymentProviderIcons[provider].label}-${index}`}
            onClick={() => {
              if (provider === PaymentProvider.Card) {
                onSelected(provider as PaymentProvider);
              }
            }}
          >
            {paymentProviderIcons[provider].icon({
              className: `hover:shadow-md ${selected && selected !== provider ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}`,
              style: {
                width: larger.md ? '72px' : '60px',
                height: larger.md ? '48px' : '40px',
                borderRadius: '6px',
              },
            })}
          </div>
        );
      })}
    </div>
  );
}

export default PaymentOptionProviders;
