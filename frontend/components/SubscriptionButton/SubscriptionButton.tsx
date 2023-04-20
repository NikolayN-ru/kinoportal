import styles from './SubscriptionButton.module.scss';

const SubscriptionButton: React.FC = () => {
  return <button className={styles.button} data-text="30 дней подписки бесплатно" type="button" />;
};

export default SubscriptionButton;
