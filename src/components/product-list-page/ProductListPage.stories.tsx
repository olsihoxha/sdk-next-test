import { Meta, StoryObj } from '@storybook/web-components';
import { LiquidPLPProps } from '../../build-types';
import { ICatalogParams } from '@liquidcommercedev/sdk';

export default {
  title: 'Modules/PLP',
  component: 'liquid-product-list-page',
  argTypes: {
    catalogParams: {
      description: 'Catalog parameters',
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    design: [
      {
        name: 'xsm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9262-55006&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'sm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9513-43643&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'md',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9513-44809&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'lg',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9513-40483&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9260-52548&mode=dev',
        allowFullscreen: true,
      },
      {
        name: '2xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9513-41918&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

const catalogParams = {
  search: 'vodka',
  pageToken: '',
  entity: 'Liquid Testing',
  page: 0,
  perPage: 28,
  orderBy: 'price',
  orderDirection: 'desc',
  filters: [
    {
      key: 'availability',
      values: 'IN_STOCK',
    },
    {
      key: 'sizes',
      values: ['750ML'],
    },
    {
      key: 'brands',
      values: ['SMIRNOFF'],
    },
  ],
  loc: {
    coords: {
      lat: 38.91243096140747,
      long: -77.03034862807938,
    },
  },
  refresh: true,
};

export const Default: StoryObj<LiquidPLPProps> = {
  args: {
    catalogParams: catalogParams as ICatalogParams,
  },
};
