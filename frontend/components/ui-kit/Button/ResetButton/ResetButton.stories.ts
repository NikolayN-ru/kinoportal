import type { Meta, StoryObj } from "@storybook/react";

import ResetButton from ".";

const meta: Meta<typeof ResetButton> = {
  title: "shared/ResetButton",
  component: ResetButton,
  tags: ["autodocs"],
  argTypes: {
    className: "ResetButton",
    text: "ResetButton",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof ResetButton>;

export const ResetButton1: Story = {
  name: "Отображение кнопки сброса",
  args: {
    className: "ResetButton",
    text: "Кнопка",
    disabled: false,
  },
};
