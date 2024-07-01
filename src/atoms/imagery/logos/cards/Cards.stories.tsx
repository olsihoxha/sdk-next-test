import { Meta, StoryObj } from '@storybook/web-components';
import { CardProps } from './Cards';
import * as CardLogos from './components/index';

export default {
  title: 'Atoms/Imagery/Logos',
  component: 'liquid-card',
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?type=design&node-id=5536-7506&mode=design&t=ab1eYkLOeOHVsYzR-0',
      allowFullscreen: true,
    },
  },
  argTypes: {
    cardType: {
      options: Object.keys(CardLogos.default),
      control: 'select',
    },
    cardColor: {
      control: 'color',
    },
    cardOutlineColor: {
      control: 'color',
    },
    cardSize: {
      control: 'text',
    },
  },
} as Meta;

export const Cards: StoryObj<CardProps> = {
  args: {
    cardType: Object.keys(CardLogos.default)[0],
    cardColor: '#fafafa',
    cardOutlineColor: '#2557D6',
    cardSize: '64',
  },
};
