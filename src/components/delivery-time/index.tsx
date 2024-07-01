import Element from './components';
import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';
import AppProvider from '../common/context/AppContext/AppProvider';

import type { DeliveryTimeProps } from '../../build-types';
import { FunctionalComponent } from 'preact';

const DeliveryTime: FunctionalComponent<DeliveryTimeProps> = ({ styles, sx = '' }) => {
  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        <Element
          deliverTime="60 mins"
          numDeliverItems={2}
          numShippingItems={1}
          sx={sx}
          shippingTime="1-2 days"
        />
      </ThemeProvider>
    </AppProvider>
  );
};


export default DeliveryTime;
