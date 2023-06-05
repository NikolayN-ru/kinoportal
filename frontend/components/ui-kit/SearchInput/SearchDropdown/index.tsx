import { FC } from "react";

import s from "./SearchDropdown.module.scss";
import Link from "next/link";

interface SearchDropdownProps {
  className?: string;
  searchValue: string;
}

const RESULTS_COUNT = 10;

const results = [
  "Джек Ричер",
  "Джентльмены удачи",
  "Джек Райан: Теория хаоса",
  "Джентльмены",
  "Джеки Браун",
  "Дже-Юн Ли",
  "Дже-Ми Шишидо",
  "Дже-Беом Пак",
  "Сценарист",
  "Фильмы с Джеком Блэком",
  "Актёр",
  "Актёр",
];

const SearchDropdown: FC<SearchDropdownProps> = ({
  className,
  searchValue,
}) => {
  const classNames = [s.container];
  className && classNames.push(className);

  if (!results || !results.length) return null;

  return (
    <div className={classNames.join(" ")}>
      <div className={s.resultsList}>
        {results.slice(0, RESULTS_COUNT).map((result, index) => (
          <Link key={index} className={s.resultLink} href="#">
            {result}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchDropdown;
