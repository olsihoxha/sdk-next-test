import { Meta, StoryObj } from '@storybook/web-components';
import { ProgressBarProps, initialStatusMapper } from './ProgressBar';

export default {
  title: 'Atoms/Tracking/Progress Bar',
  component: 'liquid-progress-bar',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'xsm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?node-id=8819%3A14351&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'sm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?node-id=8481%3A22129&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'md',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?node-id=8481%3A22226&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'lg',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?node-id=8481%3A21507&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?node-id=8481%3A21610&mode=dev',
        allowFullscreen: true,
      },
      {
        name: '2xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?node-id=8481%3A21713&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
  argTypes: {
    status: {
      options: [...Object.keys(initialStatusMapper)],
      control: { type: 'select' },
    },
    delivery: { control: 'text' },
  },
} as Meta<ProgressBarProps>;

type Story = StoryObj<ProgressBarProps>;

export const Default: Story = {
  args: {
    status: 'out_delivery',
    delivery: 'Estimated delivery today at 01:01pm',
  },
};
