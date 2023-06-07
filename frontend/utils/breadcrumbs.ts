import { Breadcrumb } from "@components/Breadcrumbs";

export const getBreadcrumbsFromDescription = (
  descriptionItems: string[],
  descriptionItemsDefault: string[]
): Breadcrumb[] => {
  const breadcrumbs: Breadcrumb[] = [];
  const descriptionTextDelimiter = ", ";

  descriptionItems.forEach((text, index) => {
    if (text !== descriptionItemsDefault[index]) {
      const textItems = text.split(descriptionTextDelimiter);
      const title =
        textItems.length > 3
          ? textItems.slice(0, 3).join(descriptionTextDelimiter) + "..."
          : textItems.join(descriptionTextDelimiter);
      breadcrumbs.push({ title });
    }
  });

  return breadcrumbs;
};
