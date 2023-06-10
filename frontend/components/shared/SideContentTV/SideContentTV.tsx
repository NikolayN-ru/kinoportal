import { genreTv } from "@components/Header/DropDownPage/DropDownContentTV/DropDownContentTV";
import s from "./SideContentTV.module.scss";
import Button from "@components/ui-kit/Button";

const SideContentTV = () => {
  return (
    <div className={s.side_content}>
      <div className={s.list_item}>
        <div className={s.title}>ТВ онлайн</div>
        {genreTv.map((genre) => {
          return (
            <div className={s.item} key={genre.id}>
              {genre.name}
            </div>
          );
        })}
      </div>
      <Button
        color="grey"
        className={s.side_content_btn}
        text="Телепрограмма"
      />
    </div>
  );
};

export default SideContentTV;
