import { useQuery } from "@tanstack/react-query";

import { getFilmById } from "@/lib/services/api";
import { FilmPopulated } from "@/types";

export function useFilm(id: string) {
  const { data, status } = useQuery<FilmPopulated>(
    [`films/${id}`],
    () => getFilmById(id),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  return {
    data,
    status,
  };
}
