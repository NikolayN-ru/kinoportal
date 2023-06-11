import Title from "./index";
import s from "./Title.module.scss";

export default {
  title: "Title",
  component: Title,
  decorators: [
    (Story: any) => (
      <div className={s.title}>
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <Title>text</Title>;
