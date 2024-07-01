import type { Meta, StoryObj } from '@storybook/web-components';
import { ProductDetailProps } from '../../../../../build-types';

export default {
  title: 'Modules/PDP/Store Selector',
  component: 'liquid-store-selector',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=5571-24422&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=7947-29375&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<ProductDetailProps>;

export const Default: Story = {
  args: {
    upc: '00619947000020',
  },
};
