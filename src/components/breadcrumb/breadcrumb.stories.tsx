import type { Meta, StoryObj } from '@storybook/web-components';
import { BreadcrumbProps } from './breadcrumb';

export default {
  title: 'Modules/PLP/Breadcrumb',
  component: 'liquid-breadcrumb',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop & Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=7975-31918&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<BreadcrumbProps>;

export const Default: Story = {
  args: {
    current: 'Product Name',
    items: JSON.stringify([
      { label: 'Home', href: '/' },
      { label: 'Collection', href: '/collection' },
      { label: 'Sub-collection', href: '/collection/sub-collection' },
    ]) as any,
  },
};

export const NoLinks: Story = {
  args: {
    current: 'Product Name',
    items: JSON.stringify([
      { label: 'Home' },
      { label: 'Collection' },
      { label: 'Sub-collection' },
    ]) as any,
  },
};
