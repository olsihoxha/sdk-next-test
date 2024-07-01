import { Meta, StoryObj } from '@storybook/web-components';
import { TrackingMapProps } from '../../build-types';

export default {
  title: 'Modules/Order Tracking/Tracking Map',
  component: 'liquid-tracking-map',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'xsm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8481%3A20715&mode=design&t=rbMmCgQwnm9LHK4D-1',
        allowFullscreen: true,
      },
      {
        name: 'sm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8481%3A20724&mode=design&t=rbMmCgQwnm9LHK4D-1',
        allowFullScreen: true,
      },
      {
        name: 'md',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8481%3A20733&mode=design&t=rbMmCgQwnm9LHK4D-1',
        allowFullScreen: true,
      },
      {
        name: 'lg',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8481%3A20710&mode=design&t=rbMmCgQwnm9LHK4D-1',
        allowFullScreen: true,
      },
      {
        name: 'xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8481%3A20719&mode=design&t=rbMmCgQwnm9LHK4D-1',
        allowFullScreen: true,
      },
      {
        name: '2xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8481%3A20728&mode=design&t=rbMmCgQwnm9LHK4D-1',
        allowFullScreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<TrackingMapProps>;

export const Default: Story = {
  render: () => '<liquid-tracking-map></liquid-tracking-map>',
};
