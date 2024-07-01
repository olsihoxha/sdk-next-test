import type { Meta, StoryObj } from '@storybook/web-components';
import { OrderTrackingHeaderProps } from './Header';

export default {
  title: 'Atoms/Tracking/Header',
  component: 'liquid-order-tracking-header',
  argTypes: {
    orderNumber: {
      control: { type: 'number' },
    },
  },
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8476-17804&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8476-20430&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<OrderTrackingHeaderProps>;

export const Default: Story = {
  args: {
    orderNumber: 158795234,
  },
};
