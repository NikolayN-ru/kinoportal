import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import Icon from "@components/ui-kit/IconComponent/Icon";

import s from "./Top10Card.module.scss";

interface Top10CardProps {
  item: string;
  number: number;
}

const Top10Card: FC<Top10CardProps> = ({ item, number }) => {
  return (
    <Link className={s.top10Link} href="#">
      <div className={s.top10ImageContainer}>
        <Image
          className={s.top10Image}
          src={item}
          width="224"
          height="456"
          alt=""
        />
        <div className={s.top10NameContainer}>
          <Image
            className={s.top10NameImage}
            src={`/images/top10/names/top10-name${number}.png`}
            width="176"
            height="33"
            alt=""
          />
        </div>

        <div className={s.top10NumberContainer}>
          {number === 10 ? (
            <>
              <Icon className={s.top10NumberImageDuble} name="top10Number1" />
              <Icon className={s.top10NumberImageDuble} name="top10Number0" />
            </>
          ) : (
            <Icon
              className={s.top10NumberImage}
              name={`top10Number${number}`}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default Top10Card;
