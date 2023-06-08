import type { Meta, StoryObj } from '@storybook/react';
import ContentByLink from './ContentByLink';
import { Links } from '@components/Header/DropDownPage/DropDownContent/interfaces/LinksEnum';
import { CSSProperties } from 'react';
import './ContentByLink.module.scss';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ContentByLink> = {
  title: 'shared/ContentByLink',
  component: ContentByLink,
  tags: ['autodocs'],
  argTypes: {
    link: Links
  },
};

export default meta;
type Story = StoryObj<typeof ContentByLink>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Films: Story = {
    name: 'Отображение контента фильмов',
  args: {
    link:Links.Films
  },
  parameters: { 

  },
};
export const Serials: Story = {
    name: 'Отображение контента сериалов',
    args: {
      link:Links.Serials
    },
  };

  export const Multfilms: Story = {
    name: 'Отображение контента мультфильмов',
    args: {
      link:Links.Multfilms
    },
  };
