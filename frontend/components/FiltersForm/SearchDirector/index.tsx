import { FC } from "react";
import { useDispatch } from "react-redux";

import SearchInput from "@components/ui-kit/SearchInput";
import { setDirector } from "@redux/filtersApi";
import { useTypedSelector } from "hooks/useTypedSelector";

interface SearchDirectorProps {
  reset: boolean;
  setReset: (reset: boolean) => void;
}

const SearchDirector: FC<SearchDirectorProps> = ({ reset, setReset }) => {
  const selectedDirector = useTypedSelector(
    ({ filtersApi }) => filtersApi.filters.director
  );
  const dispatch = useDispatch();

  const onDirectorInput = (value: string): void => {
    dispatch(setDirector(value));
  };

  return (
    <SearchInput
      placeholder="Режиссёр"
      name="director"
      onValueConfirm={onDirectorInput}
      reset={reset}
      setReset={setReset}
      initValue={selectedDirector}
    />
  );
};

export default SearchDirector;
