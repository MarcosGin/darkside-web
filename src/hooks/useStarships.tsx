import { useQuery } from "@tanstack/react-query";

import { getStarships } from "@/lib/services/api";
import { Starship } from "@/types";

export function useStarships() {
  const { data, status } = useQuery<Starship[]>(
    ["starships", {}],
    () => getStarships(),
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
