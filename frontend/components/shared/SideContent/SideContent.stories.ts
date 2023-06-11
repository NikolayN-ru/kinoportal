import { Links } from "@components/Header/DropDownPage/DropDownContent/interfaces/LinksEnum";
import SideContent from "@components/shared/SideContent/SideContent";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SideContent> = {
  title: "shared/SideContent",
  component: SideContent,
  tags: ["autodocs"],
  argTypes: {
    link: Links,
  },
};

export default meta;
type Story = StoryObj<typeof SideContent>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Films: Story = {
  args: {
    link: Links.Films,
  },
};

export const Serials: Story = {
  args: {
    link: Links.Serials,
  },
};

export const Multfilms: Story = {
  args: {
    link: Links.Multfilms,
  },
};
