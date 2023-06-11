import type { Meta, StoryObj } from "@storybook/react";
import Promo from ".";

const meta: Meta<typeof Promo> = {
  title: "components/Promo",
  component: Promo,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Promo>;

export const Content: Story = {
  name: "Отображение промо контента",
};
