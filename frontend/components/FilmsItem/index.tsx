import ButtonMore from "@components/ui-kit/Button/ButtonMore";
import s from "./FilmsItem.module.scss";

const FilmsItem = () => {
  return (
    <div className={s.film}>
      <div className={s.filmDescription}>
        <img src="" alt="" />
        <div>
          <p>2022</p>
          <p>Name_kino</p>
          <p>Rating ivi 7.5</p>
        </div>
      </div>
      <ButtonMore title="подробнее" />
    </div>
  );
};

export default FilmsItem;
