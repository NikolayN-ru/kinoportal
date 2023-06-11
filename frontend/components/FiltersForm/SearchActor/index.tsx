import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SearchInput from "@components/ui-kit/SearchInput";
import { setActor, setDirector } from "@redux/filtersApi";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActorByNameQuery } from "@redux/actorApi";

interface SearchActorProps {
  mode: "actor" | "director";
  reset: boolean;
  setReset: (reset: boolean) => void;
}

const SearchActor: FC<SearchActorProps> = ({ reset, setReset, mode }) => {
  const [skip, setSkip] = useState<boolean>(true);
  const [nameString, setNameString] = useState<string>("");
  const [foundNames, setFoundNames] = useState<string[]>([]);

  const { data } = useActorByNameQuery(nameString, { skip });

  useEffect(() => {
    if (!data || !data.length) return;
    setFoundNames(data.map((actor) => `${actor.firstName} ${actor.lastName}`));
  }, [data]);

  let selectedPerson: string = "";

  if (mode === "actor") {
    selectedPerson = useTypedSelector(
      ({ filtersApi }) => filtersApi.filters.actor
    );
  } else {
    selectedPerson = useTypedSelector(
      ({ filtersApi }) => filtersApi.filters.director
    );
  }
  /*const selectedActor = useTypedSelector(
    ({ filtersApi }) => filtersApi.filters.actor
  );*/
  const dispatch = useDispatch();

  const onConfirm = (value: string): void => {
    if (mode === "actor") {
      dispatch(setActor(value));
      return;
    }
    dispatch(setDirector(value));
  };

  const onChange = (value: string): void => {
    setNameString(value);
    setSkip(false);
  };

  const onClear = (): void => {
    setNameString("");
    setSkip(true);
    setFoundNames([]);
  };

  return (
    <SearchInput
      placeholder={mode === "actor" ? "Актёр" : "Режиссёр"}
      name={mode}
      onConfirm={onConfirm}
      isReset={reset}
      setReset={setReset}
      initValue={selectedPerson}
      onChange={onChange}
      foundResults={foundNames}
      onClear={onClear}
    />
  );
};

export default SearchActor;
