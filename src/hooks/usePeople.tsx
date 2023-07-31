import { useQuery } from "@tanstack/react-query";

import { getPeople, getPeopleBookmark } from "@/lib/services/api";
import { PaginationResponse, People } from "@/types";
import { useBookmarkStore } from "./useBookmarkStore";

export function usePeople({ page }: { page: number }) {
  const { data, status } = useQuery<PaginationResponse<People>>(
    ["people", { page }],
    () => getPeople(page),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  return {
    ...(data ?? {}),
    status,
  };
}

export function usePeopleBookmark({ page }: { page: number }) {
  const bookmark = useBookmarkStore();
  const ids = Array.from(bookmark.people).join(",");

  const { data, status } = useQuery<PaginationResponse<People>>(
    ["people/bookmark", { page, ids }],
    () => getPeopleBookmark({ page, ids }),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  return {
    ...(data ?? {}),
    status,
  };
}
