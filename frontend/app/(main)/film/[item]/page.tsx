"use client";

import { MouseEventHandler, useState } from "react";
import { usePathname } from "next/navigation";

import ActorRound from "@components/Badge/ActorRound";
import Quality from "@components/Badge/Quality";
import BadgeActor from "@components/BadgeActor";
import { Play, Save, Share } from "@public/svg";
import Button from "@components/ui-kit/Button";
import CollectionsSet from "@components/CollectionsSet";
import { useFilmItemQuery } from "@redux/filmsApi";

import s from "./item.module.scss";


const Index = () => {
  const [isClose, setIsClose] = useState<boolean>(true);
  const pathname = usePathname();
  const {
    data = [],
    error,
    isLoading,
  } = useFilmItemQuery(String(pathname.split("/")[2]));
  const {
    title,
    year,
    countries,
    genres,
    quality,
    rating,
    description,
    actors,
  } = data;

  if (isLoading) {
    return <div>LOADING</div>;
  }

  const onToggleButtonClock: MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    setIsClose(!isClose);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperMain}>
        <div className={s.mainHeader}>
          <div className={s.breadcramps}>
            <span>Фильмы</span>
            <span>Триллеры</span>
          </div>
          <div className={s.mainBtn}>
            <button>бесплатно</button>
            <button>выбор Иви</button>
          </div>
        </div>
        <div className={s.main}>
          <div className={s.mainLeft}>
            <div className={s.mainLeftWrapper}>
              <div className={s.mainLeftVideo}></div>
              <div className={s.mainBlockButton}>
                <Button title="Треллер" ico={<Play />} />
                <Button title="В избранное" ico={<Save />} />
                <Button title="Поделиться" ico={<Share />} />
              </div>
            </div>
          </div>
          <div className={s.mainRight}>
            <h1>{title}</h1>
            <h1>(Фильм {year})</h1>
            <div className={s.mainRightMetaData}>
              <p>{year} 2 ч. 12 мин.16+</p>
              <p>{countries.map((_: any) => `${_.country} `)} </p>
              <p>{genres.map((_: any) => `${_.genre} `)}</p>
              <p>{quality} Рус · Eng Рус</p>
            </div>
            <div className={s.mainRightActiros}>
              <BadgeActor title="Рейтинг Иви" rating={rating} />
              <BadgeActor title="Марк Руффало" />
              <BadgeActor title="Макс фон Сюдов" />
              <BadgeActor title="Мишель Уильямс" />
              <BadgeActor title="Мишель Уильямс" />
            </div>
            <div className={!isClose ? s.open : s.close}>
              <div className={s.mainRightDescription}>{description}</div>
              <div className={s.line}></div>
              <div className={s.mainRightMetaDataButtom}>
                <p>Языки</p>
                <p>Русский, Английский</p>
                <p>Субтитры</p>
                <p>Русский</p>
                <span>
                  <h3>Изображение и звук.</h3> Фактическое качество зависит от
                  устройства и ограничений правообладателя.
                </span>
                <div className={s.mainRightBudges}>
                  <Quality title="4К" />
                  <Quality title="FullHD" />
                  <Quality title="HD" />
                  <Quality title="1080" />
                  <Quality title="720" />
                  <Quality title="HDR10" />
                  <Quality title="5.1" />
                </div>
              </div>
            </div>
            {/* <p>Свернуть детали</p> */}
            <button className={s.toggleButton} onClick={onToggleButtonClock}>
              {isClose ? "Развернуть" : "Свернуть"}
            </button>
            <div className={s.line}></div>
            <div className={s.mainRightRaitingIvi}>
              <div className={s.mainRightRaitingIviBadge}>8,1</div>
              <div>
                <p>Рейтинг Иви</p>
                <p>Интересный сюжет 114 513 оценок</p>
              </div>
              <button>оценить</button>
            </div>
          </div>
        </div>
        <CollectionsSet startNumber={4} endNumber={5} />
        <div className={s.actorSection}>
          <h3>Актёры и создатели</h3>
          <div className={s.actors}>
            {actors.map((_: any, id: number) => (
              <ActorRound
                key={id}
                title={`${_.firstName} ${_.lastName}`}
                role={_.role}
                link={`/actor/${_.id}/director`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
