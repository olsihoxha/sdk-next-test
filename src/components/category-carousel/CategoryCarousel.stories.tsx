import type { Meta, StoryObj } from '@storybook/web-components';
import { CategoryCarouselProps } from '../../build-types';

export default {
  title: 'Modules/Carousel/Category Carousel',
  parameters: {
    layout: 'fullscreen',
    design: [
      {
        name: 'xsm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8011-37982&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'sm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8011-38918&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'md',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8011-39576&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'lg',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8004-36130&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8008-36723&mode=dev',
        allowFullscreen: true,
      },
      {
        name: '2xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8008-37212&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<CategoryCarouselProps>;

export const Default: Story = {
  render: () => '<liquid-category-carousel></liquid-category-carousel>',
};
