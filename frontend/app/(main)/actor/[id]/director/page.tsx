"use client";

import FilmsItem from "@components/FilmsItem";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import s from "./page.module.scss";

interface Inputs {
  addComment: string;
}

const page = () => {
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
    setPost("коментарий отправлен на модерацию");
    setTimeout(() => setPost(false), 3000);
  };
  return (
    <div>
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
    </div>
  );
};

export default page;
