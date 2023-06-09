import { Breadcrumb } from "@components/Breadcrumbs";
import { capitalizeFirstLetter } from "utils";

const getBreadcrumbTitleFromTextItems = (
  items: string[],
  delimiter: string
): string => items.length > 3
  ? items.slice(0, 3).join(delimiter) + "..."
  : items.join(delimiter);

export const getBreadcrumbsFromFilters = (
  { selectedGenre, selectedCountry, selectedYear }: {
    selectedGenre: string[];
    selectedCountry: string[];
    selectedYear: number[];
  }
): Breadcrumb[] => {
  const TEXT_DELIMITER = ", ";
  const YEARS_DELIMITER = "-";

  const breadcrumbs: Breadcrumb[] = [];

  if (selectedGenre.length) {
    breadcrumbs.push({
      title: getBreadcrumbTitleFromTextItems(
        selectedGenre.map((genre) => capitalizeFirstLetter(genre)),
        TEXT_DELIMITER
      )
    });
  } else if (selectedCountry.length) {
    breadcrumbs.push({
      title: getBreadcrumbTitleFromTextItems(selectedCountry, TEXT_DELIMITER)
    });
  }

  if (selectedYear.length) {
    breadcrumbs.push({ title: selectedYear.join(YEARS_DELIMITER)});
  }

  return breadcrumbs;
};
