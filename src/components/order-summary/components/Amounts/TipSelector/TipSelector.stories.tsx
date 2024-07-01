import { Meta, StoryObj } from '@storybook/web-components';
import { TipSelectorProps } from './TipSelector';

export default {
  title: 'Atoms/Selectors/TipSelector',
  component: 'liquid-tip-selector',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8195-75604&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8196-75740&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
  argTypes: {
    total: { control: 'number' },
  },
} as Meta<TipSelectorProps>;

type Story = StoryObj<TipSelectorProps>;

export const Default: Story = {
  args: {
    tipsList: ['10%', '15%', '20%'],
    subtotal: 10000,
  },
};
