import { FC } from "react";

import Icon from "@components/ui-kit/IconComponent/Icon";
import Button from "..";

import s from "./SubscriptionButton.module.scss";

const SubscriptionButton: FC = () => {
  return (
    <Button
      className={s.button}
      text="30 дней подписки бесплатно"
      ico={<Icon name="lightning" />}
    />
  );
};

export default SubscriptionButton;
