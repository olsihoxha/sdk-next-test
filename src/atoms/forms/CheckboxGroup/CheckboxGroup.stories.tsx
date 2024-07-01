import { Meta, StoryObj } from '@storybook/web-components';
import { CheckboxGroupProps } from './checkboxGroup';

export default {
  title: 'Atoms/Forms/CheckboxGroup',
  component: 'liquid-checkbox-group',
  parameters: {
    design: [
      {
        name: 'Desktop',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-7625&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-18811&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<CheckboxGroupProps>;

export const Default: Story = {
  args: {
    current: 'CheckboxGroup',
    groupName: 'Checkbox Group Name',
  },
  decorators: [
    (Story) => {
      const story = Story();
      setTimeout(() => {
        const element = document.querySelector('liquid-checkbox-group');
        if (element) {
          (element as any).items = ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'];
          (element as any).showSeeAll = true;
        }
      }, 0);
      return story;
    },
  ],
};

export const NoSeeAllLink: Story = {
  args: {
    current: 'CheckboxGroup',
    groupName: 'Brands',
  },
  decorators: [
    (Story) => {
      const story = Story();
      setTimeout(() => {
        const element = document.querySelector('liquid-checkbox-group');
        if (element) {
          (element as any).items = ['Brand 1', 'Brand 2', 'Brand 3'];
          (element as any).showSeeAll = false;
        }
      }, 0);
      return story;
    },
  ],
};
