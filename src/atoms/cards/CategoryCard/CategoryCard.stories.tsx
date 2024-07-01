import { Meta, StoryObj } from '@storybook/web-components';
import PopularIcon from '../../imagery/icons/subcategories/components/PopularIcon';
import { IconProps } from './CategoryCard';
import React from 'preact/compat';

export default {
  title: 'Atoms/Cards/CategoryCard',
  component: 'liquid-category-card',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=5536-7496&mode=dev',
      },
      {
        name: 'Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=5536-7499&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
  decorators: [
    (Story) => {
      const story = Story();
      setTimeout(() => {
        const element = document.querySelector('liquid-category-card');
        if (element) {
          (element as any).style.maxWidth = '90px';
          (element as any).style.minWidth = '72px';
        }
      }, 0);
      return story;
    },
  ],
} as Meta;

// eslint-disable-next-line @typescript-eslint/ban-types
type Story = StoryObj<{}>;

export const Default: Story = {
  args: {
    label: {
      label: 'Popular',
      icon: ({ color, size }: IconProps) => <PopularIcon color={color} size={size} />,
    },
  },
};
//gotta fix this
