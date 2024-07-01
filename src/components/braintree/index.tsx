
import AppProvider from '../common/context/AppContext/AppProvider';
import Element from './components/Braintree';
import { setToken } from '@/signals/payment.signals';

function Braintree() {
  return (
    <AppProvider>
      <Element setToken={setToken} />
    </AppProvider>
  );
}

export default Braintree;
