import FilmsItem from "./index";
import s from "./FilmsItem.module.scss";

export default {
  title: "FilmsItem",
  component: FilmsItem,
  decorators: [
    (Story: any) => (
      <div className={s.film}>
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <FilmsItem />;