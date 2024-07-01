import type { Meta, StoryObj } from '@storybook/web-components';
import { CheckoutProps } from '../../build-types';
import { html } from 'lit';

export default {
  title: 'Modules/Checkout',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'xsm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8157-53412&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'sm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8157-53449&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'md',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8157-53462&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'lg',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8157-53394&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8157-53441&mode=dev',
        allowFullscreen: true,
      },
      {
        name: '2xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8157-53454&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

export const Default: StoryObj<CheckoutProps> = {
  render: () => '<liquid-checkout></liquid-checkout>',
  argTypes: {
    mode: {
      options: ['standard', 'dialog'],
      control: { type: 'radio' },
    },
  },
  args: {
    mode: 'standard',
  },
};

export const Custom: StoryObj<CheckoutProps> = {
  render: () => html`
    <div class="flex flex-col items-center">
      <div
        class="flex flex-col md:flex-row items-start gap-12 z-0 w-full max-w-[1488px] p-4 md:p-8"
      >
        <div class="w-full md:w-3/5">
          <liquid-delivery-info></liquid-delivery-info>
          <div class="pt-6"></div>
          <liquid-payment></liquid-payment>
        </div>
        <div class="w-full md:w-2/5">
          <liquid-order-summary></liquid-order-summary>
        </div>
      </div>
    </div>
    <script>
      window.checkoutElement = document.querySelector('liquid-order-summary');

      window.checkoutElement.onPlaceOrder = () => {
        alert('redirect url clicked');
      };
    </script>
  `,
};
