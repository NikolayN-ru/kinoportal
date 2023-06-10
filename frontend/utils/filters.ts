import { years } from "@components/FiltersForm/filters";
import {
  FilmsSorting,
  FilterCountry,
  FilterGenre,
  FilterYear,
  FiltersFromPath,
  FiltersFromQuery,
} from "@components/types/filters";
import {
  Filters,
  FiltersApi,
  SORTING_DEFAULT,
  SortingNames,
} from "@redux/filtersApi";
import { PageDescription } from "app/(main)/movies/[...id]/page";
import { capitalizeFirstLetter } from "utils";

export const isSelectedYears = (
  years: number[],
  selectedYears: number[]
): boolean => {
  if (years.length !== selectedYears.length) return false;

  for (let i = 0; i < years.length; i++) {
    if (years[i] !== selectedYears[i]) return false;
  }

  return true;
};

export const getYearsTitleByValue = (
  yearsFilter: FilterYear[],
  yearValue: number[]
): string => {
  const foundFilter = yearsFilter.find(({ value }) =>
    isSelectedYears(value, yearValue)
  );

  return (foundFilter && foundFilter.title) || "";
};

export const getFilmsSortingValues = (
  filmsSorting: FilmsSorting[]
): string[] => {
  const sortingValues: string[] = [];

  filmsSorting.forEach(({ title }) => sortingValues.push(title));

  return sortingValues;
};

export const getSortingValueByName = (
  filmsSorting: FilmsSorting[],
  sortingName: SortingNames
): string => {
  const foundSorting = filmsSorting.find(({ name }) => name === sortingName);
  return foundSorting?.title ?? "";
};

export const getSortingNameByValue = (
  filmsSorting: FilmsSorting[],
  sortingValue: string
): SortingNames | undefined => {
  const foundSorting = filmsSorting.find(({ title }) => title === sortingValue);
  return foundSorting?.name;
};

function checkGenreQuery(items: FilterGenre[], query: string): boolean {
  const queryParts = query.split("+");
  return queryParts.every((part) => items.find(({ genre }) => genre === part));
}

function checkCountryQuery(items: FilterCountry[], query: string): boolean {
  const queryParts = query.split("+");
  return queryParts.every((part) =>
    items.find(({ country }) => country === part)
  );
}

function checkYearQuery(items: FilterYear[], query: string): boolean {
  const queryParts = query.split("-");

  return !!items.find(({ value }) => {
    if (value.length !== queryParts.length) return false;

    for (let i = 0; i < value.length; i++) {
      if (String(value[i]) !== queryParts[i]) return false;
    }

    return true;
  });
}

const splitPathPartString = (part: string): string[] => {
  return part.split("+");
};

const getYearsFromPathPart = (part: string): number[] =>
  part.split("-").map((item) => Number(item));

const parseFiltersFromPath = (
  path: string,
  genres: FilterGenre[],
  countries: FilterCountry[]
): FiltersFromPath => {
  const filters: FiltersFromPath = {
    genre: [],
    country: [],
    year: [],
  };

  const pathParts = path.split("/").slice(3);

  for (const part of pathParts) {
    if (checkGenreQuery(genres, part)) {
      filters.genre = splitPathPartString(part);
      continue;
    }

    if (checkCountryQuery(countries, part)) {
      filters.country = splitPathPartString(part);
      continue;
    }

    if (checkYearQuery(years, part)) {
      filters.year = getYearsFromPathPart(part);
      continue;
    }
  }

  return filters;
};

const parseFiltersFromQuery = (query: string): FiltersFromQuery => {
  const filters: FiltersFromQuery = {
    rating: 0,
    votes: 0,
    director: "",
    actor: "",
  };

  const queryParts = query.split("&");

  for (const part of queryParts) {
    const partItems = part.split("=");

    if (partItems.length !== 2) continue;
    if (!Object.keys(filters).includes(partItems[0])) continue;

    filters[partItems[0]] = partItems[1];
    continue;
  }

  return filters;
};

const getSortingValueFromString = (sortingString: string): SortingNames => {
  const SortingValues = Object.values(SortingNames);

  const indexOfValue = SortingValues.findIndex(
    (value) => String(value) === sortingString
  );
  return indexOfValue === -1 ? SORTING_DEFAULT : SortingValues[indexOfValue];
};

const parseSortingFromQuery = (query: string): SortingNames => {
  const sortingString = query.split("sort=")[1];

  return getSortingValueFromString(sortingString);
};

export const parseFiltersFromURL = (
  path: string,
  query: string,
  { genres, countries }: { genres: FilterGenre[]; countries: FilterCountry[] }
): FiltersApi => {
  const filtersFromPath = parseFiltersFromPath(path, genres, countries);
  const filtersFromQuery = parseFiltersFromQuery(query);
  const sortingFromQuery = parseSortingFromQuery(query);

  return {
    filters: { ...filtersFromPath, ...filtersFromQuery },
    sorting: sortingFromQuery,
  };
};

export const getPathnameFromFilters = (
  filtersFromPath: FiltersFromPath
): string => {
  const pathnameItems: string[] = [];

  for (const filterValue of Object.values(filtersFromPath)) {
    if (!(typeof filterValue === "object") || !Array.isArray(filterValue))
      continue;

    if (!filterValue.length || (filterValue.length === 1 && !filterValue[0]))
      continue;

    if (typeof filterValue[0] === "number") {
      pathnameItems.push(`${filterValue.join("-")}`);
      continue;
    }

    pathnameItems.push(filterValue.join("+"));
  }

  return pathnameItems.join("/");
};

export const getQueryFromFilters = (
  filtersFromQuery: FiltersFromQuery,
  sorting: SortingNames
): string => {
  const queryItems: string[] = [];

  for (const [filterName, filterValue] of Object.entries(filtersFromQuery)) {
    filterValue && queryItems.push(`${filterName}=${filterValue}`);
  }

  sorting !== SORTING_DEFAULT && queryItems.push(`sort=${String(sorting)}`);

  return queryItems.join("&");
};

export const getUrlFromFilters = ({
  filters,
  sorting,
}: {
  filters: Filters;
  sorting: SortingNames;
}): string => {
  const { genre, country, year, rating, votes, director, actor } = filters;

  const pathString = getPathnameFromFilters({ genre, country, year });
  const queryString = getQueryFromFilters(
    { rating, votes, director, actor },
    sorting
  );

  if (!pathString && !queryString) return "";

  return [pathString, queryString].join("?");
};

export const getDescriptionByFilters = (
  filtersState: {
    selectedGenre: string[];
    selectedCountry: string[];
    selectedYear: number[];
  },
  descriptionDefaultByFilters: PageDescription
): string => {
  const DESCRIPTION_ITEMS_DELIMITER = ", ";
  const YEARS_DELIMITER = "-";

  const { selectedGenre, selectedCountry, selectedYear } = filtersState;

  const descriptionGenre = selectedGenre.length
    ? selectedGenre
        .map((genre) => capitalizeFirstLetter(genre))
        .join(DESCRIPTION_ITEMS_DELIMITER)
    : descriptionDefaultByFilters.selectedGenre;

  const descriptionCountry = selectedCountry.length
    ? selectedCountry.join(DESCRIPTION_ITEMS_DELIMITER)
    : descriptionDefaultByFilters.selectedCountry;

  const descriptionYear = selectedYear.length
    ? selectedYear.join(YEARS_DELIMITER)
    : descriptionDefaultByFilters.selectedYear;

  return [descriptionGenre, descriptionCountry, descriptionYear].join(
    DESCRIPTION_ITEMS_DELIMITER
  );
};

export const getServerQueryStringFromFilters = (
  fullFilters: FiltersApi
): string => {
  const { filters, sorting } = fullFilters;
  const queryItems: string[] = [];

  for (const [filterName, filterValue] of Object.entries(filters)) {
    if (Array.isArray(filterValue) && !filterValue.length) continue;

    if (Array.isArray(filterValue)) {
      const valueString =
        typeof filterValue[0] === "number"
          ? filterValue.join("-")
          : filterValue.join("%20");
      queryItems.push(`${filterName}=${valueString}`);
      continue;
    }

    if (!!String(filterValue)) {
      queryItems.push(`${filterName}=${filterValue}`);
    }
  }

  queryItems.push(`sort=${sorting}`);

  return queryItems.join("&");
};
