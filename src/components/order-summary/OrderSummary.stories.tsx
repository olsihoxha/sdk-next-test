import type { Meta, StoryObj } from '@storybook/web-components';
import { OrderSummaryProps } from '../../build-types';

export default {
  title: 'Modules/Checkout/Order Summary',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop & Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=4189-8147&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

export const Default: StoryObj<OrderSummaryProps> = {
  render: () => '<liquid-order-summary></liquid-order-summary>',
};
