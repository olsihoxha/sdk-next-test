import { FunctionalComponent } from 'preact';
import { RetailerItem } from './components';
import { carts, getTheme } from '@/signals';

const MulticartBody: FunctionalComponent = () => {
  const { body } = getTheme().cart;

  return (
    <div className={body.wrapper.main}>
      {Object.values(carts.value)
        .filter((cart) => cart.retailers.length)
        .map((cart) => (
          <div key={cart.id}>
            <RetailerItem retailer={cart.retailers[0]} productCount={cart.quantity} />
          </div>
        ))}
    </div>
  );
};

export default MulticartBody;
