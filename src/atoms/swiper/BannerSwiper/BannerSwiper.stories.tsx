import React from 'react';
import { Meta, StoryObj } from '@storybook/web-components';
import Button from '../../../components/common/ui/Button';

export default {
  title: 'Atoms/Swiper/BannerSwiper',
  component: 'liquid-banner-swiper',
  parameters: {
    design: [
      {
        name: 'xsm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9386-27925&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'sm',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9484-19025&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'md',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9484-21249&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'lg',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9458-15057&mode=dev',
        allowFullscreen: true,
      },
      {
        name: 'xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9458-15117&mode=dev',
        allowFullscreen: true,
      },
      {
        name: '2xl',
        type: 'figma',
        url: 'https://www.figma.com/file/hjdhnts9XKkReYO1oYkpqX/Liquid-UI?type=design&node-id=9458-16388&mode=dev',
        allowFullscreen: true,
      },
    ],
  },
} as Meta;

type Story = StoryObj;

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

export const Default: Story = {
  render: () => '<liquid-banner-swiper></liquid-banner-swiper>',
  args: {
    bannerItems,
  },
};
