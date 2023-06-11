import { FC } from "react";

import s from "./SearchDropdown.module.scss";

interface SearchDropdownProps {
  className?: string;
  results: string[];
  onChoise: (value: string) => void;
}

const RESULTS_COUNT = 10;

const SearchDropdown: FC<SearchDropdownProps> = ({
  className,
  results,
  onChoise,
}) => {
  const classNames = [s.container];
  className && classNames.push(className);

  if (!results || !results.length) return null;

  return (
    <div className={classNames.join(" ")}>
      <div className={s.resultsList}>
        {results.slice(0, RESULTS_COUNT).map((result, index) => (
          <div
            key={index}
            className={s.resultLink}
            onClick={() => onChoise(result)}
          >
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDropdown;
