import { Meta, StoryObj } from '@storybook/web-components';
import { TextFieldProps } from './InputTextfield';

type Story = StoryObj<TextFieldProps>;

export default {
  title: 'Atoms/Forms/InputTextfield',
  component: 'liquid-input-textfield',
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    id: { control: 'text' },
    formData: { control: 'object' },
    handleFocus: { control: 'function' },
    handleChange: { control: 'function' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    errorMessage: { control: 'text' },
  },
  parameters: {
    design: [
      {
        name: 'Desktop & Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/6dP5YT2IiGC7ukN6OABfxp/Liquid-UI-Library?type=design&node-id=439-64015&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

export const Default: Story = {
  args: {
    id: 'myInput',
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    disabled: false,
    errorMessage: '',
  },
};
