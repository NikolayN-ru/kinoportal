import type { Meta, StoryObj } from "@storybook/react";
import SideContentTV from "./SideContentTV";

const meta: Meta<typeof SideContentTV> = {
  title: "shared/SideContentTV",
  component: SideContentTV,
  tags: ["autodocs"],
  id: "1",
};

export default meta;
type Story = StoryObj<typeof SideContentTV>;

export const Default: Story = {
  name: "Default side content render",
};
