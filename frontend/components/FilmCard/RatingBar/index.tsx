import styles from "./RatingBar.module.scss";

export type RatingBarMode = "s" | "m";

interface RatingBarProps {
  className?: string;
  value: number;
  mode: RatingBarMode;
}

const barClassName = {
  s: styles.sizeS,
  m: styles.sizeM,
};

const RatingBar: React.FC<RatingBarProps> = ({ className, value, mode }) => {
  const containerClassNames = [styles.bar, barClassName[mode]];
  className && containerClassNames.push(className);

  const width = `${value * 10}%`;

  return (
    <div className={containerClassNames.join(" ")}>
      <div className={styles.innerBar} style={{ width }}></div>
    </div>
  );
};

export default RatingBar;
