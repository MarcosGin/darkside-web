import { useQuery } from "@tanstack/react-query";

import { getFilms } from "@/lib/services/api";
import { Film, PaginationResponse } from "@/types";

export function useFilms({ page }: { page: number }) {
  const { data, status } = useQuery<PaginationResponse<Film>>(
    ["films", { page }],
    () => getFilms(page),
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
