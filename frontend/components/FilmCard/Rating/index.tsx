import RatingBar from "../RatingBar";

import s from "./Rating.module.scss";

interface RatingProps {
  className?: string;
  value: number;
}

const Rating: React.FC<RatingProps> = ({ className, value }) => {
  const containerClassNames = [s.container];
  className && containerClassNames.push(className);

  return (
    <div className={containerClassNames.join(" ")}>
      <div className={s.details}>
        <div className={s.value}>
          {String(value.toFixed(1)).replace(".", ",")}
        </div>
        <div className={s.bars}>
          <RatingBar value={38} mode={"s"} />
          <RatingBar value={33} mode={"s"} />
          <RatingBar value={22} mode={"s"} />
          <RatingBar value={11} mode={"s"} />
        </div>
      </div>

      <div className={s.mainBar}>
        <div className={s.category}>Актёры</div>
        <RatingBar value={65} mode={"m"} />
      </div>
    </div>
  );
};

export default Rating;
