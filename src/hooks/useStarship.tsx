import { useQuery } from "@tanstack/react-query";

import { getStarshipById } from "@/lib/services/api";
import { StarshipPopulated } from "@/types";

export function useStarship(id: string) {
  const { data, status } = useQuery<StarshipPopulated>(
    [`planets/${id}`],
    () => getStarshipById(id),
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
