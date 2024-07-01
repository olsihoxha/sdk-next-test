import { Meta, StoryObj } from '@storybook/web-components';
import { CategoryIconProps } from './CategoryIcon';
import * as CategoryIcons from './components/index';

export default {
  title: 'Atoms/Imagery/Icons',
  component: 'liquid-category-icon',
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?type=design&node-id=5536-7506&mode=design&t=ab1eYkLOeOHVsYzR-0',
      allowFullscreen: true,
    },
  },
  argTypes: {
    category: {
      options: Object.keys(CategoryIcons.default),
      control: 'select',
    },
    iconColor: {
      control: 'color',
    },
    iconSize: {
      control: 'text',
    },
  },
} as Meta;

export const Categories: StoryObj<CategoryIconProps> = {
  args: {
    iconColor: '#eb26d7',
    iconSize: '50',
  },
};
