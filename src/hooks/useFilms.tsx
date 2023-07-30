import { useQuery } from "@tanstack/react-query";

import { getFilms } from "@/lib/services/api";
import { Film } from "@/types";

export function useFilms() {
  const { data, status } = useQuery<Film[]>(["films", {}], () => getFilms(), {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    data,
    status,
  };
}
