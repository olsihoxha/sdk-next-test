import type { Meta, StoryObj } from '@storybook/web-components';
import { DeliveryInfoProps } from '../../build-types';

type Story = StoryObj<DeliveryInfoProps>;

export default {
  title: 'Modules/Checkout/Delivery Information',
  component: 'liquid-delivery-info',
  parameters: {
    design: [
      {
        name: 'Desktop',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=4169-3587&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=4169-3587&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

export const Default: Story = {};
