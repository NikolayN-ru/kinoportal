import BtnMore from "./index";
import s from "./BtnMore.module.scss";

export default {
  title: "BtnMore",
  component: BtnMore,
  decorators: [
    (Story: any) => (
      <div className={s.button}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: { title: string }) => <BtnMore {...args} />;
export const Default = () => <BtnMore title={"развернуть"} />;

export const Open = () => Template.bind({});
Open.args = {
  title: "развернуть",
};
