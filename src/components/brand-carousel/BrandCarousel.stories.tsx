import type { Meta, StoryObj } from '@storybook/web-components';
import { BrandCarouselProps } from '../../build-types';

export default {
  title: 'Modules/Carousel/BrandCarousel',
  component: 'liquid-brand-carousel',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'xsm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8011-38018&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'sm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8011-38951&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'md',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8011-39611&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'lg',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8004-36560&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8008-36759&mode=dev',
        allowFullscreen: true,
      },
      {
        name: '2xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8008-37248&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<BrandCarouselProps>;

export const Default: Story = {
  render: () => '<liquid-brand-carousel></liquid-brand-carousel>',
};
