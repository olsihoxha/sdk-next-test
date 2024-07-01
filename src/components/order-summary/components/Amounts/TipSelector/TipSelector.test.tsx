import TipSelector from '@/components/order-summary/components/Amounts/TipSelector';
import { render, fireEvent, waitFor } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('Tip Selector is rendered', () => {
  it('Options are visible and correct', () => {
    // 10.000 cents -> $10.00
    const { container } = render(<TipSelector subtotal={10000} />);
    ['10%', '15%', '20%', 'Custom'].forEach((value) =>
      expect(container.textContent).toMatch(value),
    );
    expect(container.textContent).toMatch('Tip');
  });

  it('tipsList prop works correctly', () => {
    // 10.000 cents -> $10.00
    const { container } = render(<TipSelector tipsList={['10%', '20%', '30%']} subtotal={10000} />);
    ['10%', '20%', '30%', 'Custom'].forEach((value) =>
      expect(container.textContent).toMatch(value),
    );
  });

  it('Total prop as string works', () => {
    // 10.000 cents -> $10.00
    const { container } = render(<TipSelector subtotal="10000" />);
    expect(container.textContent).toMatch('$10.00');
  });

  it('Tip percentage works correctly', () => {
    // 10.000 cents -> $10.00
    const { container, getByText } = render(<TipSelector subtotal={10000} />);

    expect(container.textContent).toMatch('$10.00');

    const button15pct = getByText('15%').closest('button');
    fireEvent.click(button15pct);
    expect(container.textContent).toMatch('$15.00');

    const button20pct = getByText('20%').closest('button');
    fireEvent.click(button20pct);
    expect(container.textContent).toMatch('$20.00');
  });

  it('Custom tip works is added', async () => {
    // 10.000 cents -> $10.00
    const { container, getByText, getByPlaceholderText } = render(<TipSelector subtotal={10000} />);

    const customButton = getByText('Custom').closest('button');
    fireEvent.click(customButton);
    expect(container.textContent).toMatch('Apply');

    const customInput = getByPlaceholderText('$0.00') as HTMLInputElement;

    expect(customInput.textContent).toBe('');
    await userEvent.type(customInput, '1234.56');

    expect(customInput.value).toBe('1234.56');
    await waitFor(() => expect(customInput.value).toMatch('1234.56'));

    const ApplyButton = getByText('Apply');
    fireEvent.click(ApplyButton);
    expect(container.textContent).toMatch('$1,234.56');
  });

  it('Custom tip filters non numerical chars correctly', async () => {
    // 10.000 cents -> $10.00
    const { container, getByText, getByPlaceholderText } = render(<TipSelector subtotal={10000} />);

    const customButton = getByText('Custom').closest('button');
    fireEvent.click(customButton);
    expect(container.textContent).toMatch('Apply');

    const customInput = getByPlaceholderText('$0.00') as HTMLInputElement;

    expect(customInput.textContent).toBe('');
    await userEvent.type(customInput, 'abc');

    expect(customInput.value).toBe('abc');
    const ApplyButton = getByText('Apply');
    fireEvent.click(ApplyButton);
    expect(container.textContent).toMatch('$0.00');
  });

  it('Negative custom values are not accepted', async () => {
    // 10.000 cents -> $10.00
    const { container, getByText, getByPlaceholderText } = render(<TipSelector subtotal={10000} />);

    const customButton = getByText('Custom').closest('button');
    fireEvent.click(customButton);
    expect(container.textContent).toMatch('Apply');

    const customInput = getByPlaceholderText('$0.00') as HTMLInputElement;

    expect(customInput.textContent).toBe('');
    await userEvent.type(customInput, '-5.00');

    expect(customInput.value).toBe('-5.00');
    await waitFor(() => expect(customInput.value).toMatch('-5.00'));

    const ApplyButton = getByText('Apply');
    fireEvent.click(ApplyButton);
    expect(container.textContent).toMatch('$0.00');
  });

  it('onChange prop works', async () => {
    const handleOnChange = vi.fn();
    const { container, getByText, getByPlaceholderText } = render(
      <TipSelector onChange={handleOnChange} subtotal={10000} />,
    );

    const button15pct = getByText('15%').closest('button');
    fireEvent.click(button15pct);
    expect(container.textContent).toMatch('$15.00');
    expect(handleOnChange).toHaveBeenLastCalledWith(1500);

    const customButton = getByText('Custom').closest('button');
    fireEvent.click(customButton);
    expect(container.textContent).toMatch('Apply');

    const customInput = getByPlaceholderText('$0.00') as HTMLInputElement;

    expect(customInput.textContent).toBe('');
    await userEvent.type(customInput, '1234.56');

    expect(customInput.value).toBe('1234.56');
    await waitFor(() => expect(customInput.value).toMatch('1234.56'));

    const ApplyButton = getByText('Apply');
    fireEvent.click(ApplyButton);
    expect(container.textContent).toMatch('$1,234.56');
    expect(handleOnChange).toHaveBeenLastCalledWith(123456);
  });
});
