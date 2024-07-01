import { render } from '@testing-library/preact';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('renders with the correct delivery text', () => {
    const { getByText } = render(
      <ProgressBar status="placed" delivery="Expected Delivery Date: Feb 20, 2024" />,
    );
    expect(getByText('Order Status')).toBeInTheDocument();
    expect(getByText('Expected Delivery Date: Feb 20, 2024')).toBeInTheDocument();
  });

  it('renders the correct icons', () => {
    const { getAllByTestId } = render(
      <ProgressBar status="placed" delivery="Expected Delivery Date: Feb 20, 2024" />,
    );
    const icons = getAllByTestId('icon');
    expect(icons).toHaveLength(4);

    expect(icons[0]).toHaveClass('bg-primary');

    icons.forEach((icon) => {
      expect(icon.querySelector('svg')).toBeInTheDocument();
    });
  });

  it('renders the correct step labels', () => {
    const { getByText } = render(
      <ProgressBar status="placed" delivery="Expected Delivery Date: Feb 20, 2024" />,
    );
    expect(getByText('Placed')).toBeInTheDocument();
    expect(getByText('Confirmed')).toBeInTheDocument();
    expect(getByText('Out for delivery')).toBeInTheDocument();
    expect(getByText('Delivered')).toBeInTheDocument();
  });

  it('renders the correct step labels colors', () => {
    const { getByText } = render(
      <ProgressBar status="placed" delivery="Expected Delivery Date: Feb 20, 2024" />,
    );

    const placedLabel = getByText('Placed');
    expect(placedLabel).toBeInTheDocument();
    expect(placedLabel).toHaveClass('text-primary');

    const otherLabels = ['Confirmed', 'Out for delivery', 'Delivered'];
    otherLabels.forEach((labelText) => {
      const label = getByText(labelText);
      expect(label).toBeInTheDocument();
      expect(label).toHaveClass('text-default');
    });
  });

  it('updates correctly when status changes', () => {
    const { rerender, getByText } = render(
      <ProgressBar status="placed" delivery="Expected Delivery Date: Feb 20, 2024" />,
    );
    expect(getByText('Placed').classList.contains('text-primary')).toBeTruthy();

    rerender(<ProgressBar status="delivered" delivery="Expected Delivery Date: Feb 20, 2024" />);
    ['Placed', 'Confirmed', 'Out for delivery', 'Delivered'].forEach((labelText) => {
      const label = getByText(labelText);
      expect(label).toBeInTheDocument();
      expect(label).toHaveClass('text-primary');
    });
  });

  it('renders correct number of steps', () => {
    const { container } = render(
      <ProgressBar status="placed" delivery="Expected Delivery Date: Feb 20, 2024" />,
    );
    expect(container.querySelectorAll('svg')).toHaveLength(4);
  });
});
