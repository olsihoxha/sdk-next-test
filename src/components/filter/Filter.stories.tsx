import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Modules/PLP/Filter',
  component: 'liquid-filter',
  parameters: {
    layout: 'left',
    design: [
      {
        name: 'xsm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-14853&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'sm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-14907&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'md',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-14962&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'lg',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-14645&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-14697&mode=dev',
        allowFullscreen: true,
      },
      {
        name: '2xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-14749&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
  decorators: [
    (Story) => {
      const story = Story();
      setTimeout(() => {
        const element = document.querySelector('liquid-filter');
        if (element) {
          (element as any).style.width = '30%';
        }
      }, 0);
      return story;
    },
  ],
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    current: 'Filter',
  },
};
