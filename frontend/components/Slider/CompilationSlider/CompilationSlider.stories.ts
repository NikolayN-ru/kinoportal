import type { Meta, StoryObj } from "@storybook/react";
import CompilationSlider from ".";

const items = [
  { id: 0, name: "Сериалы Иви", image: "interesting-1.jpg" },
  { id: 1, name: "Новинки", image: "interesting-2.jpg" },
  { id: 2, name: "Российские комедии", image: "interesting-3.jpg" },
  { id: 3, name: "Лучшие детективы", image: "interesting-4.jpg" },
];

const meta: Meta<typeof CompilationSlider> = {
  title: "shared/CompilationSlider",
  component: CompilationSlider,
  tags: ["autodocs"],
  argTypes: {
    items: items,
  },
};

export default meta;
type Story = StoryObj<typeof CompilationSlider>;

export const FirstElement: Story = {
  name: "Отображение контента фильмов",
  args: {
    items: items.slice(0, 1),
  },
  parameters: {},
};
// export const Serials: Story = {
//     name: 'Отображение контента сериалов',
//     args: {
//         link: Links.Serials
//     },
// };

// export const Multfilms: Story = {
//     name: 'Отображение контента мультфильмов',
//     args: {
//         link: Links.Multfilms
//     },
// };
