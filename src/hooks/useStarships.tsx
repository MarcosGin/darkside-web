import { useQuery } from "@tanstack/react-query";

import { getStarships } from "@/lib/services/api";
import { PaginationResponse, Starship } from "@/types";

export function useStarships({ page }: { page: number }) {
  const { data, status } = useQuery<PaginationResponse<Starship>>(
    ["starships", { page }],
    () => getStarships(page),
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
