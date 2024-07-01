import type { Meta, StoryObj } from '@storybook/web-components';
import { SearchProps } from '../../build-types';

export default {
  title: 'Modules/PLP/Search',
  component: 'liquid-search',
  parameters: {
    design: [
      {
        name: 'xsm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9262-55075&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'sm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9513-43705&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'md',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9513-45582&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'lg',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9513-41410&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9260-50303&mode=dev',
        allowFullscreen: true,
      },
      {
        name: '2xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9513-43048&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<SearchProps>;

export const Default: Story = {
  args: {
    options: JSON.stringify([
      {
        label: 'The Macallan Double Cask 12-Year-Old',
      },
      {
        label:
          'This is a long label that should be truncated, this also it is just for test purposes',
      },
      {
        label: 'The Macallan Double Cask 15-Year-Old',
      },
      {
        label: 'The Macallan Double Cask 18-Year-Old',
      },
      {
        label: 'Sherry Oak 12 Years Old',
      },
      {
        label: 'Sherry Oak 18 Years Old',
      },
    ]),
  },
};

export const AsyncSearch: Story = {
  render: () => {
    return `
      <liquid-search placeholder="Search Address..."></liquid-search>

      <script>
        window.searchElement = document.querySelector('liquid-search')
        window.searchElement.onSearch = async (query) => {
          return [{
            value: query,
            label: query
          }];
        };
        
        window.searchElement.onSelect = (item) => {
          alert(item.value + ' ' + 'clicked')
        }
      </script>
    `;
  },
};
