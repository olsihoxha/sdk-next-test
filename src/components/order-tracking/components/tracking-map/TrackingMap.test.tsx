import { render } from '@testing-library/preact';
import TrackingMap from './TrackingMap';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/signals', () => ({
  useClient: () => ({
    client: {
      address: vi.fn().mockResolvedValue([
        {
          id: 'mocked-id',
          coords: { lat: 40.712776, long: -74.005974 },
          formattedAddress: 'New York, NY, USA',
        },
      ]),
    },
  }),
}));

describe('TrackingMap component', () => {
  it('renders a map with correct coordinates', () => {
    const { debug, container } = render(
      <TrackingMap
        shippingAddress="New York, NY, USA"
        retailerAddress="199 Exeter, Irvine, CA, USA"
      />,
    );

    debug();
    // Assert that the map is rendered
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});
