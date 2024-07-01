import { Meta, StoryObj } from '@storybook/web-components';
import { BrandProps } from './Brand';
import * as Brands from './components/index';

export default {
  title: 'Atoms/Imagery/Logos',
  component: 'liquid-brand-logo',
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?type=design&node-id=5536-7506&mode=design&t=ab1eYkLOeOHVsYzR-0',
      allowFullscreen: true,
    },
  },
  argTypes: {
    brandName: {
      options: Object.keys(Brands.default),
      control: 'select',
    },
    brandLogoBorderColor: {
      control: 'color',
    },
    brandLogoSize: {
      control: 'text',
    },
  },
} as Meta;

export const Brand: StoryObj<BrandProps> = {
  args: {
    brandName: Object.keys(Brands.default)[0],
    brandLogoBorderColor: 'transparent',
    brandLogoSize: '200',
  },
};
