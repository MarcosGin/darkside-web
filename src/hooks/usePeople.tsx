import { useQuery } from "@tanstack/react-query";

import { getPeople } from "@/lib/services/api";
import { PaginationResponse, People } from "@/types";

export function usePeople({ page }: { page: number }) {
  const { data, status } = useQuery<PaginationResponse<People>>(
    ["people", { page }],
    () => getPeople(page),
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
