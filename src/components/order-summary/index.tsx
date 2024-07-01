import Element from './components';
import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';
import AppProvider from '../common/context/AppContext/AppProvider';

import type { OrderSummaryProps } from '../../build-types';
import { FunctionalComponent } from 'preact';

const OrderSummary: FunctionalComponent<OrderSummaryProps> = ({
  styles,
  readOnly,
  onPlaceOrder,
}) => {
  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        <Element readOnly={readOnly} onPlaceOrder={onPlaceOrder} />
      </ThemeProvider>
    </AppProvider>
  );
};



export default OrderSummary;
