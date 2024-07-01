import { Meta, StoryObj } from '@storybook/web-components';
import { IllustrationComponentProps } from './Illustration';
import * as Illustrations from './components/index';

export default {
  title: 'Atoms/Imagery/Icons',
  component: 'liquid-illustration',
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?type=design&node-id=5536-7506&mode=design&t=ab1eYkLOeOHVsYzR-0',
      allowFullscreen: true,
    },
  },
  argTypes: {
    illustration: {
      options: Object.keys(Illustrations.default),
      control: 'select',
    },
    size: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
    primaryColor: {
      control: 'color',
      defaultValue: 'red',
    },
    accentColor: {
      control: 'color',
    },
    highlightColor: {
      control: 'color',
    },
    backgroundColor: {
      control: 'color',
    },
  },
} as Meta;

export const Illustration: StoryObj<IllustrationComponentProps> = {
  args: {
    size: '50',
    primaryColor: '#1F5EA9',
    accentColor: '#F0F6FC',
    highlightColor: '#E7EAF1',
    backgroundColor: 'white',
  },
};
