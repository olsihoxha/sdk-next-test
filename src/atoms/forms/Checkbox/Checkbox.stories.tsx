import { Meta, StoryObj } from '@storybook/web-components';
import { CheckboxProps } from './Checkbox';

export default {
  title: 'Atoms/Forms/Checkbox',
  component: 'liquid-checkbox',
  parameters: {
    design: [
      {
        name: 'Desktop',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-7731&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=8269-18812&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    current: 'Checkbox',
    id: 'checkedCheckbox',
    label: 'Checkbox checked',
    checked: true,
    labelColor: 'blue',
    labelWeight: 'bold',
    checkboxSize: '3.5',
    // eslint-disable-next-line no-console
    onChange: (e: Event) => console.log((e.target as HTMLInputElement).checked),
  },
};

export const unChecked: Story = {
  args: {
    current: 'Checkbox',
    id: 'uncheckedCheckbox',
    label: 'Checkbox unchecked',
    // checked: false,
  },
};
