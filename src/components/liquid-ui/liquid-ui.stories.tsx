import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { LiquidUITheme } from './theme';

export default {
  folder: 'Product',
  component: 'liquid-ui',
  title: 'Modules/Theme',
  parameters: { layout: 'centered' },
  render: (args) => {
    const theme = JSON.stringify(args.theme);
    const breadcrumbItems = JSON.stringify([
      { label: 'Home', href: '/' },
      { label: 'Collection', href: '/collection' },
      { label: 'Sub-collection', href: '/collection/sub-collection' },
    ]);
    return html`
      <liquid-ui theme="${theme}">
        <liquid-breadcrumb
          current="Product Name"
          theme="${theme}"
          items="${breadcrumbItems}"
        ></liquid-breadcrumb>

        <liquid-progress-bar
          status="confirmed"
          delivery="Estimated delivery today at 01:01pm"
        ></liquid-progress-bar>
      </liquid-ui>
    `;
  },
} as Meta;

type Story = StoryObj;

export const Default: Story = {};

export const CustomTheme: Story = {
  args: {
    theme: {
      colors: {
        primary: [0, 110, 28],
        secondary: [240, 246, 252],
        main: [255, 255, 255],
        default: [0, 0, 0],
      },
      breadcrumbs: {
        root: {
          base: 'flex flex-col',
        },
      },
    } as LiquidUITheme,
  },
};
