import { useQuery } from "@tanstack/react-query";

import { getPeople } from "@/lib/services/api";
import { Film, People } from "@/types";

export function usePeople() {
  const { data, status } = useQuery<People[]>(
    ["people", {}],
    () => getPeople(),
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
