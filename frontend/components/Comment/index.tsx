import s from "./Comment.module.scss";
import { Like } from "@public/svg";
import { FC } from "react";

interface CommentI {
  author?: string;
  date?: string;
  count: number;
  content?: string;
}

const Comment: FC<CommentI> = ({ author, date, count, content }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.author}>
          Angelina <span>31 мая 2015</span>
        </div>
        <div className={s.like}>
          <div className={s.likeHover}>
            <Like />
          </div>
          <span>{count}</span>
          <div className={s.likeHover}>
            <Like className={s.deg} />
          </div>
        </div>
      </div>
      <div className={s.content}>
        Самый красивый, харизматичный и неповторимый Артист!!! Удачи,
        процветания, успехов, востребованности!!! Вы самый лучший и
        неповторимый!!!
      </div>
    </div>
  );
};

export default Comment;
