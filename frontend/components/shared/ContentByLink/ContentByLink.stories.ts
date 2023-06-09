import type { Meta, StoryObj } from '@storybook/react';
import ContentByLink from './ContentByLink';
import { Links } from '@components/Header/DropDownPage/DropDownContent/interfaces/LinksEnum';
import './ContentByLink.module.scss';

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
