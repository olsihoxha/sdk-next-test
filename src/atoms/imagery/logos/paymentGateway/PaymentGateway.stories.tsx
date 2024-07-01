import { Meta, StoryObj } from '@storybook/web-components';
import { CardProps } from '../cards/Cards';
import * as PaymentGatewayCards from './components/index';

export default {
  title: 'Atoms/Imagery/Logos',
  component: 'liquid-payment-gateway-card',
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
      options: Object.keys(PaymentGatewayCards.default),
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

export const PaymentGatewayCard: StoryObj<CardProps> = {
  args: {
    cardType: Object.keys(PaymentGatewayCards.default)[0],
    cardColor: '#fafafa',
    cardOutlineColor: '#2557D6',
    cardSize: '64',
  },
};
