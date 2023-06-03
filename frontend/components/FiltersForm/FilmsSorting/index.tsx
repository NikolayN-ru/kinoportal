import { FC } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";
import { setSorting } from "@redux/filtersApi";
import SortingSelect from "@components/ui-kit/Select/SortingSelect";
import {
  getFilmsSortingValues,
  getSortingNameByValue,
  getSortingValueByName,
} from "utils/filters";
import { filmsSorting } from "@mock/filmsData";

const FilmsSorting: FC = () => {
  const selectedSorting = useTypedSelector(
    ({ filtersApi }) => filtersApi.sorting
  );
  const dispatch = useDispatch();

  const onSelectChange = (sortingValue: string) => {
    const sortingName = getSortingNameByValue(filmsSorting, sortingValue);
    sortingName && dispatch(setSorting(sortingName));
  };

  return (
    <SortingSelect
      name="films-sorting"
      sortings={getFilmsSortingValues(filmsSorting)}
      selectedValue={getSortingValueByName(filmsSorting, selectedSorting)}
      onSelectChange={onSelectChange}
    />
  );
};

export default FilmsSorting;
