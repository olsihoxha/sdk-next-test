import type { Meta, StoryObj } from '@storybook/web-components';
import { OrderConfirmationProps } from '../../build-types';

export default {
  title: 'Modules/Checkout/Order Confirmation',
  component: 'liquid-order-confirmation',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=7327-9134&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8476-17482&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
  args: {
    mode: 'standard',
  },
  argTypes: {
    mode: {
      control: {
        type: 'radio',
      },
      options: ['standard', 'dialog'],
    },
  },
} as Meta;

type Story = StoryObj<OrderConfirmationProps>;

export const Standard: Story = {};

export const Dialog: Story = {
  args: {
    mode: 'dialog',
  },
};
