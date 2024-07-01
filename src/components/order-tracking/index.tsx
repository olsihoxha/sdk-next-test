import Element from './components';

import AppProvider from '../common/context/AppContext/AppProvider';
import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';
import { OrderTrackingProps } from '@/build-types';

const OrderTracking = ({ styles }: OrderTrackingProps) => {
  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        <Element />
      </ThemeProvider>
    </AppProvider>
  );
};


export default OrderTracking;
