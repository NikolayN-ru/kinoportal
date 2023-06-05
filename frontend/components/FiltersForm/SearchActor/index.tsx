import { FC } from "react";
import { useDispatch } from "react-redux";

import SearchInput from "@components/ui-kit/SearchInput";
import { setActor } from "@redux/filtersApi";
import { useTypedSelector } from "hooks/useTypedSelector";

interface SearchActorProps {
  reset: boolean;
  setReset: (reset: boolean) => void;
}

const SearchActor: FC<SearchActorProps> = ({ reset, setReset }) => {
  const selectedActor = useTypedSelector(
    ({ filtersApi }) => filtersApi.filters.actor
  );
  const dispatch = useDispatch();

  const onActorInput = (value: string): void => {
    dispatch(setActor(value));
  };

  return (
    <SearchInput
      placeholder="Актёр"
      name="actor"
      onValueConfirm={onActorInput}
      reset={reset}
      setReset={setReset}
      initValue={selectedActor}
    />
  );
};

export default SearchActor;
