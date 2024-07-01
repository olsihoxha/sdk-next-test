import { Meta } from '@storybook/web-components';
import { HeaderProps } from './Header';

export default {
  title: 'Atoms/Header',
  component: 'liquid-header',
  argTypes: {
    text: {
      control: 'text',
    },
    textSize: {
      control: 'text',
    },
    showCheckbox: {
      control: 'boolean',
    },
    checkboxLabel: {
      control: 'text',
      if: { arg: 'showCheckbox' },
    },
    showFrontIcon: {
      control: 'boolean',
    },
    frontIcon: {
      control: 'string',
      if: { arg: 'showFrontIcon' },
    },
    showEditLink: {
      control: 'boolean',
    },
    showBackIcon: {
      control: 'boolean',
    },
    backIcon: {
      control: 'string',
      if: { arg: 'showBackIcon' },
    },
    showCloseIcon: {
      control: 'boolean',
    },
    closeIcon: {
      control: 'string',
      if: { arg: 'showCloseIcon' },
    },
    showTitleIcon: {
      control: 'boolean',
    },
  },
} as Meta;

// const Template = (args: HeaderProps) => h(Header, args);

const Template = (args: HeaderProps) => `<liquid-header 
showCheckbox=${args.showCheckbox} 
showFrontIcon=${args.showFrontIcon} 
showEditLink=${args.showEditLink} 
showBackIcon=${args.showBackIcon} 
showTitleIcon=${args.showTitleIcon} 
showCloseIcon=${args.showCloseIcon}
text=${args.text}
textSize=${args.textSize}
checkboxLabel=${args.checkboxLabel}
frontIcon=${args.frontIcon}
backIcon=${args.backIcon}
closeIcon=${args.closeIcon}
>
</liquid-header>`;

export const Default = Template.bind({});
Default.args = {
  text: 'Header',
  textSize: 'text-2xl',
  checkboxLabel: 'label',
  showCheckbox: true,
  showFrontIcon: true,
  showEditLink: true,
  showBackIcon: true,
  showTitleIcon: true,
  showCloseIcon: true,
};
