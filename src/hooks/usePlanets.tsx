import { useQuery } from "@tanstack/react-query";

import { getPlanets } from "@/lib/services/api";
import { Planet } from "@/types";

export function usePlanets() {
  const { data, status } = useQuery<Planet[]>(
    ["planets", {}],
    () => getPlanets(),
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
