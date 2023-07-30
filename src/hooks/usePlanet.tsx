import { useQuery } from "@tanstack/react-query";

import { getPlanetById } from "@/lib/services/api";
import { PlanetPopulated } from "@/types";

export function usePlanet(id: string) {
  const { data, status } = useQuery<PlanetPopulated>(
    [`planets/${id}`],
    () => getPlanetById(id),
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
