import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';
import AppProvider from '../common/context/AppContext/AppProvider';

import type { OrderConfirmationProps } from '@/build-types';
import Element from './OrderConfirmation';

function OrderConfirmation({ styles, mode, onClickCheckDeliveryStatus }: OrderConfirmationProps) {
  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        <Element mode={mode} onClickCheckDeliveryStatus={onClickCheckDeliveryStatus} />
      </ThemeProvider>
    </AppProvider>
  );
}


export default OrderConfirmation;
