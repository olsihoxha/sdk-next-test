import { Meta, StoryObj } from '@storybook/web-components';
import { SubcategoryIconProps } from './SubcategoryIcon';
import * as SubcategoryIcons from './components/index';

export default {
  title: 'Atoms/Imagery/Icons',
  component: 'liquid-subcategory-icon',
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3X5Z9TJb8Y3BQ7Q9w1X9Q5/Icons?node-id=0%3A1',
      allowFullscreen: true,
    },
  },
  argTypes: {
    subcategory: {
      options: Object.keys(SubcategoryIcons.default),
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

export const Subcategories: StoryObj<SubcategoryIconProps> = {
  args: {
    iconColor: '#eb26d7',
    iconSize: '50',
  },
};
