import type { Meta, StoryObj } from '@storybook/web-components';
import { DeliveryTimeProps } from '../../build-types';

export default {
  title: 'Modules/Checkout/Delivery Time',
  component: 'liquid-delivery-time',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop & Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=5573-6497&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<DeliveryTimeProps>;

export const Default: Story = {};
