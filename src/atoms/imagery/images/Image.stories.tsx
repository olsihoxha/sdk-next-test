import { Meta, StoryObj } from '@storybook/web-components';
import { ImageProps } from './ImageWrapper';

export default {
  title: 'Atoms/Imagery',
  component: 'liquid-image-wrapper',
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?type=design&node-id=5536-7506&mode=design&t=ab1eYkLOeOHVsYzR-0',
      allowFullscreen: true,
    },
  },
  argTypes: {
    imgSrc: {
      control: 'text',
    },
    size: {
      control: 'text',
    },
  },
} as Meta;

export const Image: StoryObj<ImageProps> = {
  args: {
    imgSrc:
      'https://storage.googleapis.com/liquid-platform/assets/liquid_bottle/liquid_bottle_no_bg.png',
    size: '200',
  },
};
