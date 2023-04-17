import { FC } from "react";
import s from "./SimilarFilmsItem.module.scss";

interface ISimilarFilmsItem {
  title: string;
  img?: string;
  pay?: boolean;
  choice?: boolean;
}

const SimilarFilmsItem: FC<ISimilarFilmsItem> = ({
  title,
  img,
  pay,
  choice=false,
}) => {
  return (
    <div className={s.wrapper}>
      {choice && <div className={s.label}>выбор IVI</div>}
      <div className={s.title}>test-data</div>
    </div>
  );
};

export default SimilarFilmsItem;
