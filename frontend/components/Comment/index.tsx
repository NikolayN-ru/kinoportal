import s from "./Comment.module.scss";
import { Like } from "@public/svg";
import { FC } from "react";

interface CommentI {
  author?: string;
  date?: string;
  count: number;
  content?: string;
}

const cont = "Самый красивый, харизматичный и неповторимый Артист!!! Удачи, процветания, успехов, востребованности!!! Вы самый лучший и неповторимый!!!"

const Comment: FC<CommentI> = ({ author='Angelina', date='31 мая 2015', count, content=cont }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.author}>
          {author} <span>{date}</span>
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
        {content}
      </div>
    </div>
  );
};

export default Comment;
