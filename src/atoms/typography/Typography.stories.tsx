import { Meta, StoryObj } from '@storybook/web-components';
import { TypographyProps } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: 'liquid-typography',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'typography',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?node-id=7955%3A29934&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
  argTypes: {
    text: { control: 'text' },
    fontsize: {
      options: ['text-2xl', 'text-xl', 'text-lg', 'text-base', 'text-sm', 'text-xs', 'text-xxs'],
      control: { type: 'select' },
    },
    class: {
      options: ['text-3xl font-bold text-red-500', 'text-gray-700', 'text-gray-400'],
      control: { type: 'select' },
    },
    fontweight: {
      options: ['font-bold', 'font-normal'],
      control: { type: 'select' },
    },
    component: {
      options: ['h1', 'h2', 'p'],
      control: { type: 'select' },
    },
  },
} as Meta<TypographyProps>;

type Story = StoryObj<TypographyProps>;

export const Default: Story = {
  args: {
    text: 'H2 Text LG',
    component: 'h1',
    class: 'text-gray-700',
    fontsize: 'text-base',
    fontweight: 'font-normal',
  },
};
