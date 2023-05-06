import { FC } from 'react';

import Button from '@components/Button';
import Icon from '@components/shared/IconComponent/Icon';

import s from './SubscriptionButton.module.scss';

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
