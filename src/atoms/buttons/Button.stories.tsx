import { Meta, StoryObj } from '@storybook/web-components';
import { ButtonProps, buttonTypes } from './Button';

type Story = StoryObj<ButtonProps>;

export default {
  title: 'Atoms/Buttons',
  component: 'liquid-button',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Desktop & Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/6dP5YT2IiGC7ukN6OABfxp/Liquid-UI-Library?type=design&node-id=652-14&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
  argTypes: {
    buttonType: {
      options: Object.keys(buttonTypes(window.innerWidth < 768)),
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story = {
  args: {
    buttonType: 'PrimaryButton',
  },
};
