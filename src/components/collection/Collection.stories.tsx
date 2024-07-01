import type { Meta, StoryObj } from '@storybook/web-components';
import { CollectionProps } from '../../build-types';

export default {
  title: 'Modules/PLP/Collection',
  component: 'liquid-collection',
  parameters: {
    design: [
      {
        name: '2xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?type=design&node-id=9458%3A10696&mode=design&t=KOvaZtCCWeOkCH0f-1',
        allowFullscreen: true,
      },
      {
        name: 'xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?type=design&node-id=9458%3A6486&mode=design&t=KOvaZtCCWeOkCH0f-1',
        allowFullscreen: true,
      },
      {
        name: 'lg',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?type=design&node-id=9386%3A16855&mode=design&t=KOvaZtCCWeOkCH0f-1',
        allowFullscreen: true,
      },
      {
        name: 'md',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?type=design&node-id=9484%3A19184&mode=design&t=KOvaZtCCWeOkCH0f-1',
        allowFullscreen: true,
      },
      {
        name: 'sm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?type=design&node-id=9484%3A16766&mode=design&t=KOvaZtCCWeOkCH0f-1',
        allowFullscreen: true,
      },
      {
        name: 'xsm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?type=design&node-id=9386%3A27796&mode=design&t=KOvaZtCCWeOkCH0f-1',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<CollectionProps>;

export const Default: Story = {
  args: {
    category: 'WINE',
  },
  argTypes: {
    category: {
      options: [
        'BEER',
        'FOOD',
        'MERCHANDISE',
        'NON ALCOHOLIC',
        'READY TO DRINK',
        'SPIRITS',
        'WINE',
      ],
      control: { type: 'select' },
    },
  },
};
