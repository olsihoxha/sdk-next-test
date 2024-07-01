import type { Meta, StoryObj } from '@storybook/web-components';
import { ItemsCountProps } from '../../build-types';

export default {
  title: 'Components/Items Counter',
  component: 'liquid-items-counter',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'facebook',
      values: [
        { name: 'white', value: '#fff' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
    design: [
      // there is no design for this component yt
    ],
  },
} as Meta;

type Story = StoryObj<ItemsCountProps>;

export const Default: Story = {
  args: {
    // count: 15,
    bgColor: 'red-500',
  },
};
