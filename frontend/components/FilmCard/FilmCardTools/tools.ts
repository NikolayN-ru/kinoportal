type Tool = {
  name: "bookmarks" | "similar" | "grade" | "dislike";
  icon: string;
  text: string;
};

export const tools: Tool[] = [
  {
    name: "bookmarks",
    icon: "bookmark",
    text: "Смотреть позже",
  },
  {
    name: "similar",
    icon: "magicWand",
    text: "Похожее",
  },
  {
    name: "grade",
    icon: "starRounded",
    text: "Уже смотрел, оценить",
  },
  {
    name: "dislike",
    icon: "declension",
    text: "Не нравится такое",
  },
];
