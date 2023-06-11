import type { Meta, StoryObj } from "@storybook/react";
import SelectOptionsList from ".";
import { SelectOptionType } from "../SelectOption";

const meta: Meta<typeof SelectOptionsList> = {
  title: "shared/SelectOptionsList",
  component: SelectOptionsList,
  tags: ["autodocs"],
  argTypes: {
    children: "text",
    columns: 1,
    separated: false,
  },
};

export default meta;
type Story = StoryObj<typeof SelectOptionsList>;

export const Default: Story = {
  name: "Отображение опции списка",
  args: {
    children: "text",
    columns: 2,
    separated: false,
  },
};
