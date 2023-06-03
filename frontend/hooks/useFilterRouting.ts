import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useTypedSelector } from "./useTypedSelector";
import { getUrlFromFilters } from "utils/filters";

export const useFilterRouting = (page: string, pageId: string): void => {
  const router = useRouter();
  const fullFilters = useTypedSelector(({ filtersApi }) => filtersApi);

  useEffect(() => {
    const url = getUrlFromFilters(fullFilters);
    let baseUrl = !pageId ? page : `${page}/${pageId}`;

    const routingPath = !url ? `/${baseUrl}` : `/${page}/filters/${url}`;

    router.push(routingPath);
  }, [fullFilters]);
};
