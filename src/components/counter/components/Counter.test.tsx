import { render } from '@testing-library/preact';
import CounterDisplay from './Counter';

describe('CounterDisplay Component', () => {
  it('renders the counter with the correct count', () => {
    const count = 5;
    const { getByText } = render(<CounterDisplay count={count} />);
    const counterText = getByText(count.toString());

    expect(counterText).toBeInTheDocument();
  });
});
