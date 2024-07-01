import { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { DoubleRangeSliderProps } from './DoubleRangeSlider';

export default {
  title: 'Atoms/Forms/DoubleRangeSlider',
  component: 'liquid-double-range-slider',
  argTypes: {
    onChange: { action: 'onChange' },
  },
  parameters: {
    design: [
      {
        name: 'Desktop',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-7643&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-18830&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<DoubleRangeSliderProps>;

export const Default: Story = {
  args: {
    title: 'Double Range Slider',
    min: '0',
    max: '100',
    value: ['10', '90'],
    onChange: action('onChange'),
  },
};
