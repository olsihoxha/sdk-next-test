import { Meta, StoryObj } from '@storybook/web-components';
import { DatePickerProps } from './Datepicker';

type Story = StoryObj<DatePickerProps>;

export default {
  title: 'Atoms/Forms/Datepicker',
  component: 'liquid-datepicker',
  // argTypes: {
  //   icon: {control: 'text'},
  //   minDate: {control: 'text'},
  //   maxDate: {control: 'text'},
  //   setDateVal: {control: 'function'},
  //   dateVal: {control: 'text'},
  //   placeholder: {control: 'text'},
  //   setIsDateValid: {control: 'function'},
  //   inputSx: {control: 'text'},
  //   alignRight: {control: 'boolean'},
  // },
} as Meta;

export const Default: Story = {
  args: {
    // icon: 'icon',
    // minDate: 'minDate',
    // maxDate: 'maxDate',
    // setDateVal: 'setDateVal',
    // dateVal: 'dateVal',
    // placeholder: 'placeholder',
    // setIsDateValid: 'setIsDateValid',
    // inputSx: 'inputSx',
    // alignRight: true,
  },
};
