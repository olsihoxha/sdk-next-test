import { Meta, StoryObj } from '@storybook/web-components';
import { BrandCardProps } from './BrandCard';

export default {
  title: 'Atoms/Cards/BrandCard',
  component: 'liquid-brand-card',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=5536-7502&mode=dev',
      },
      {
        name: 'Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=5536-7504&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
  decorators: [
    (Story) => {
      const story = Story();
      setTimeout(() => {
        const element = document.querySelector('liquid-brand-card');
        if (element) {
          (element as any).style.minWidth = '122px';
          (element as any).style.maxWidth = '122px';
          (element as any).iconUrl =
            'https://storage.googleapis.com/liquid-platform/assets/brands/absolut.png';
        }
      }, 0);
      return story;
    },
  ],
} as Meta;

type Story = StoryObj<BrandCardProps>;

export const Default: Story = {
  args: {
    label: 'Absolut',
    iconUrl: 'https://storage.googleapis.com/liquid-platform/assets/brands/absolut.png',
  },
};
