import type { Meta, StoryObj } from '@storybook/web-components';
import { PaymentProps } from '../../build-types';

export default {
  title: 'Modules/Checkout/Payment',
  component: 'liquid-payment',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop & Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=4169-3609&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<PaymentProps>;

export const Default: Story = {
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
  args: {
    disabled: false,
  },
};
