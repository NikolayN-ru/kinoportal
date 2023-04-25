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
      <button>подробнее</button>
    </div>
  );
};

export default FilmsItem;
