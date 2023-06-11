import type { Meta, StoryObj } from "@storybook/react";
import { SelectOptionType } from ".";
import SelectOption from ".";

const meta: Meta<typeof SelectOption> = {
  title: "shared/SelectOption",
  component: SelectOption,
  tags: ["autodocs"],
  argTypes: {
    text: "SelectOption",
    name: "option",
    type: "tooltip",
    value: SelectOptionType,
  },
};

export default meta;
type Story = StoryObj<typeof SelectOption>;

export const Default: Story = {
  name: "Отображение опции селекта чекбокса",
  args: {
    text: "SelectOption",
    name: "optionCheck",
    type: "tooltipCheck",
    value: SelectOptionType.CHECKBOX,
  },
};

export const Secondary: Story = {
  name: "Отображение опции селекта радиобаттона",
  args: {
    text: "SelectOption",
    name: "optionRadio",
    type: "tooltipRadio",
    value: SelectOptionType.RADIO,
  },
};
