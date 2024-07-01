
import PaymentFormFields from './PaymentFormFields';
import AppProvider from '../../common/context/AppContext/AppProvider';
import { parseBoolean } from '@/functions/parseBoolean';

interface PaymentProps {
  disabled?: boolean;
}

function PaymentForm({ disabled }: PaymentProps) {
  return (
    <AppProvider>
      <PaymentFormFields disabled={parseBoolean(disabled)} />
    </AppProvider>
  );
}



export default PaymentForm;
