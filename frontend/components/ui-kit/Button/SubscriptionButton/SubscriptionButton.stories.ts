import type { Meta, StoryObj } from "@storybook/react";

import SubscriptionButton from ".";

const meta: Meta<typeof SubscriptionButton> = {
  title: "shared/SubscriptionButton",
  component: SubscriptionButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SubscriptionButton>;

export const SubscriptionBtn: Story = {
  name: "Отображение кнопки сброса",
};
