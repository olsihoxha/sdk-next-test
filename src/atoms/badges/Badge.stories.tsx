import { StoryObj, Meta } from '@storybook/web-components';
import { BadgeProps } from './components/Badge';
import * as Heroicons from '@liquidcommerceteam/preact-heroicons';
import { html } from 'lit';

export default {
  title: 'Atoms/Badges',
  component: 'liquid-badge',
  argTypes: {
    label: {
      description: 'The text to display in the badge',
      control: {
        type: 'text',
      },
    },
    background: {
      description: 'The background color of the badge',
      control: {
        type: 'color',
      },
    },
    color: {
      description: 'The text and icon color of the badge',
      control: {
        type: 'color',
      },
    },
    icon: {
      description: 'The icon to display in the badge. If icon is null, no icon will be shown', //TODO: add a prop for the position of the icon
      control: {
        type: 'select',
      },
      options: Object.keys(Heroicons),
    },
    iconPosition: {
      description: 'The position of the icon in relation to the label',
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
    },
    border: {
      description: 'The border width of the badge',
      control: {
        type: 'text',
      },
    },
    borderColor: {
      description: 'The border color of the badge',
      control: {
        type: 'color',
      },
    },
    floating: {
      description: 'Whether the badge should float on the top right corner of the parent element',
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    design: [
      {
        name: 'Desktop & Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-Modules?node-id=7942%3A20791&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

export const Default: StoryObj<BadgeProps> = {
  render: () => html`
    <liquid-badge
      label="Hot Sale"
      background="#FDE8E8"
      color="#9B1C1C"
      border="1"
      icon="FireSolid"
      icon-position="left"
    ></liquid-badge>
  `,
};

export const Label: StoryObj<BadgeProps> = {
  render: () => html`
    <liquid-badge
      label="BestSeller"
      background="#FDE8E8"
      color="#9B1C1C"
      border="1"
      icon="FireSolid"
      icon-position="left"
    ></liquid-badge>
  `,
};

export const BackgroundColor: StoryObj<BadgeProps> = {
  render: () => html`
    <liquid-badge
      label="Hot Sale"
      background="#009cfd"
      color="#ffffff"
      border="1"
      icon="FireSolid"
      border-color="#008cff"
      icon-position="left"
    ></liquid-badge>
  `,
};

export const TextColor: StoryObj<BadgeProps> = {
  render: () => html`
    <liquid-badge
      label="Hot Sale"
      background="#FDE8E8"
      color="#222425"
      border="1"
      icon="FireSolid"
      icon-position="left"
    ></liquid-badge>
  `,
};

export const Icon: StoryObj<BadgeProps> = {
  render: () => html`
    <liquid-badge
      label="Hot Sale"
      background="#FDE8E8"
      color="#9B1C1C"
      border="1"
      icon="CreditCardSolid"
      icon-position="left"
    ></liquid-badge>
  `,
};

export const IconPosition: StoryObj<BadgeProps> = {
  render: () => html`
    <liquid-badge
      label="Hot Sale"
      background="#FDE8E8"
      color="#9B1C1C"
      border="1"
      icon="FireSolid"
      icon-position="right"
    ></liquid-badge>
  `,
};

export const BorderWidth: StoryObj<BadgeProps> = {
  render: () => html`
    <liquid-badge
      label="Hot Sale"
      background="#FDE8E8"
      color="#9B1C1C"
      border="2"
      icon="FireSolid"
      icon-position="left"
    ></liquid-badge>
  `,
};

export const BorderColor: StoryObj<BadgeProps> = {
  render: () => html`
    <liquid-badge
      label="Hot Sale"
      background="#FDE8E8"
      color="#9B1C1C"
      border="1"
      border-color="#009cfd"
      icon="FireSolid"
      icon-position="left"
    ></liquid-badge>
  `,
};

export const Floating: StoryObj<BadgeProps> = {
  render: () => html`
    <liquid-badge
      label="Hot Sale"
      background="#FDE8E8"
      color="#9B1C1C"
      border="1"
      icon="FireSolid"
      icon-position="left"
      floating="true"
    ></liquid-badge>
  `,
};
