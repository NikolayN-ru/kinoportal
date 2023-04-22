"use client";

import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FilmsItem from "@components/FilmsItem";
import PopularItem from "@components/PopularItem";
import Comment from "@components/Comment";
import s from "./actor.module.scss";

interface Inputs {
  addComment: string;
}

const Index: FC<any> = () => {
  const [post, setPost] = useState<false | string>(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
    setPost("коментарий отправлен");
    setTimeout(() => setPost(false), 3000);
  };

  return (
    <div className={s.actor}>
      <div className={s.actorImage}>
        <img src="" alt="" />
      </div>
      <div className={s.actorName}>
        <h1>Карлос Перес</h1>
        <p>Carlos Pérez</p>
      </div>
      <div className={s.actorFilms}>
        <div className={s.actorFilmsHead}>
          <h2>Полная фильмография</h2>
          <span>1 фильм</span>
        </div>
        <div className={s.actorFilmsLabel}>
          <div className={s.actorFilmsLabel_btn}>Режиссер</div>
        </div>
        <div className={s.actorFilms}>
          <FilmsItem />
          <FilmsItem />
          <FilmsItem />
        </div>
        <div className={s.actorComments}>
          <h2>Комментарии</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
              <input
                {...register("addComment", {
                  required: true,
                  minLength: {
                    value: 10,
                    message: "коментарий слишком короткий ",
                  },
                })}
                type="text"
                placeholder="расскажите первым о персоне"
                className={s.input}
              />
              <input
                type="submit"
                className={s.formBtn}
                value="отправить"
                disabled={!isValid}
              />
              {errors?.addComment && watch("addComment").length ? (
                <p className={s.error}>
                  {errors.addComment.message} {watch("addComment").length} из 10
                  символов
                </p>
              ) : null}
              {post && <p className={s.message}>{post}</p>}
            </form>
          </div>
        </div>
        <div className={s.actorFilmsLabel}>
          <div className={s.actorFilmsLabel_btn}>Популярные</div>
        </div>
        <div className={s.comments}>
          <Comment count={5} />
          <Comment count={1} />
          <Comment count={8} />
        </div>
        <div className={s.actorPopular}>
          <h2>Популярные персоны</h2>
          <div className={s.actorPopular_items}>
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
