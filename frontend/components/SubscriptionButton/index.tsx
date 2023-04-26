import { FC } from "react";

import s from "./SubscriptionButton.module.scss";

const SubscriptionButton: FC = () => {
  return (
    <button
      className={s.button}
      data-text="30 дней подписки бесплатно"
      type="button"
    />
  );
};

export default SubscriptionButton;
