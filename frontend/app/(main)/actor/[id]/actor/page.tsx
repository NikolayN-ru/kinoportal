import FilmsItem from "@components/FilmsItem";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import s from "./page.module.scss";

const page = () => {
  return (
    <div>
      <div className={s.actorFilms}>
        <FilmsItem />
      </div>
      <div className={s.actorComments}></div>
    </div>
  );
};

export default page;
