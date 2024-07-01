import { Meta, StoryObj } from '@storybook/web-components';
import { SelectProps } from './SelectInput';

type Story = StoryObj<SelectProps>;

export default {
  title: 'Atoms/Forms/SelectInput',
  component: 'liquid-select',
  parameters: {
    design: [
      {
        name: 'Desktop & Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/6dP5YT2IiGC7ukN6OABfxp/Liquid-UI-Library?type=design&node-id=12698-50249&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

export const Default: Story = {
  args: {
    options: ['Option1', 'Option2', 'Option3'],
    label: 'Label',
  },
};
