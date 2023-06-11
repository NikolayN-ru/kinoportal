import ButtonMore from "./index";
import s from "./ButtonMore.module.scss";

export default {
  title: "shared/ButtonMore",
  component: ButtonMore,
  decorators: [
    (Story: any) => (
      <div className={s.button}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: { title: string }) => <ButtonMore {...args} />;
export const Default = () => <ButtonMore title={"развернуть"} />;

export const Open = () => Template.bind({});
Open.args = {
  title: "развернуть",
};
