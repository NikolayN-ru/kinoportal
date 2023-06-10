import type { Meta, StoryObj } from '@storybook/react';
import Radio from '.';

const meta: Meta<typeof Radio> = {
  title: 'shared/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    disabled: false,
    text: 'Radio',
    isChecked: false,
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Radio1: Story = {
  name: 'Отображение включенного радиобаттона',
  args: {
    disabled: false,
    text: 'Включен',
    isChecked: true,
  },
};
export const Radio2: Story = {
  name: 'Отображение выключенного радиобаттона',
  args: {
    disabled: false,
    text: 'Выключен',
    isChecked: false,
  },
};

export const Radio3: Story = {
  name: 'Отображение включенного радиобаттона заблокированного',
  args: {
    disabled: true,
    text: 'Включен',
    isChecked: true,
  },
};

export const UncheckedAndDisabled: Story = {
  name: 'Отображение выключенного радиобаттона заблокированного',
  args: {
    disabled: true,
    text: 'Выключен',
    isChecked: false,
  },
};
