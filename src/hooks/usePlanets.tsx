import { useQuery } from "@tanstack/react-query";

import { getPlanets } from "@/lib/services/api";
import { PaginationResponse, Planet } from "@/types";

export function usePlanets({ page }: { page: number }) {
  const { data, status } = useQuery<PaginationResponse<Planet>>(
    ["planets", { page }],
    () => getPlanets(page),
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
