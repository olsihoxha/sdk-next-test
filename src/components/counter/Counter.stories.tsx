import { Meta, StoryObj } from '@storybook/web-components';
import { CounterProps } from './components/Counter';

type Story = StoryObj<CounterProps>;

export default {
  title: 'Components/Counter',
  component: 'liquid-counter',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop & Mobile',
        type: 'figma',
        url: '',
        allowFullscreen: true,
      },
    ],
  },
  decorators: [
    (Story) => {
      const story = Story();
      setTimeout(() => {
        const element = document.querySelector('liquid-counter');
        if (element) {
          (element as any).style.maxWidth = '176px';
          (element as any).style.minWidth = '159px';
          (element as any).count = 79;
          (element as any).bgColor = '#EF4444';
        }
      }, 0);
      return story;
    },
  ],
} as Meta;

export const Default: Story = {
  args: {
    count: 79,
    bgColor: 'red-500',
  },
};
