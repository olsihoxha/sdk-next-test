import React from 'react';
import type { Meta, StoryObj } from '@storybook/web-components';
import Button from '../common/ui/Button';

export default {
  title: 'Components/Banner',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    design: [
      {
        name: 'Desktop',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=7975-31721&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'Mobile',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=7975-31711&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

const bannerItems = [
  {
    imageSrc: 'https://storage.googleapis.com/liquid-platform/assets/liquid_ui/drink1.png',
    imageAlt: 'Description for Image 1',
    component: (
      <Button shape="round" variant="solid">
        Shop Now
      </Button>
    ),
  },
  {
    imageSrc: 'https://storage.googleapis.com/liquid-platform/assets/liquid_ui/drink2.png',
    imageAlt: 'Description for Image 2',
    component: (
      <Button
        shape="round"
        variant="solid"
        style={{
          background: '#ff5a1f',
          color: '#fff',
        }}
      >
        Shop Now
      </Button>
    ),
  },
];

export const Default: StoryObj = {
  render: () => '<liquid-banner></liquid-banner>',
  args: {
    bannerItems,
  },
};
