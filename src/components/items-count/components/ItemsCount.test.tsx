import { render } from '@testing-library/preact';
import ItemsCount from './ItemsCount';

describe('ItemsCount', () => {
  it('renders the counter with the correct count', () => {
    const count = 5;
    const { getByText } = render(<ItemsCount count={count} />);
    const counterText = getByText(count.toString());

    expect(counterText).toBeInTheDocument();
  });
});
