import RatingBar from "../RatingBar";
import styles from "./Rating.module.scss";

interface RatingProps {
  className?: string;
  value: number;
}

const Rating: React.FC<RatingProps> = ({ className, value }) => {
  const containerClassNames = [styles.container];
  className && containerClassNames.push(className);

  return (
    <div className={containerClassNames.join(" ")}>
      <div className={styles.details}>
        <div className={styles.value}>
          {String(value.toFixed(1)).replace(".", ",")}
        </div>
        <div className={styles.bars}>
          <RatingBar value={38} mode={"s"} />
          <RatingBar value={33} mode={"s"} />
          <RatingBar value={22} mode={"s"} />
          <RatingBar value={11} mode={"s"} />
        </div>
      </div>

      <div className={styles.mainBar}>
        <div className={styles.category}>Актёры</div>
        <RatingBar value={65} mode={"m"} />
      </div>
    </div>
  );
};

export default Rating;
