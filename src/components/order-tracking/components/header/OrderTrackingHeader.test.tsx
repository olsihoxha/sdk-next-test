import { render } from '@testing-library/preact';
import Header from './Header';

describe('👀 Order Confirmation Header Story Test 👀', () => {
  it('✨ valid logo, header text and order number ✨', () => {
    const orderNumber = `${Math.floor(Math.random() * 1000000)}`;
    const { getByTestId, getByText } = render(<Header orderNumber={orderNumber} />);
    expect(getByTestId('track-order-header-icon')).toBeInTheDocument();
    expect(getByText('Track Your Order!')).toBeInTheDocument();
    expect(getByTestId('track-order-header-order-number').textContent).toBe(String(orderNumber));
  });
});
