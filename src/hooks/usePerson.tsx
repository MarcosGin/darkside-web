import { useQuery } from "@tanstack/react-query";

import { getPeopleById } from "@/lib/services/api";
import { PeoplePopulated } from "@/types";

export function usePerson(id: string) {
  const { data, status } = useQuery<PeoplePopulated>(
    [`people/${id}`],
    () => getPeopleById(id),
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
