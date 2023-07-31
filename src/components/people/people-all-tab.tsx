import { match } from "ts-pattern";
import { useState } from "react";

import { usePeople } from "@/hooks/usePeople";
import { Loader } from "@/components/ui/loader";
import { PeopleList } from "@/components/people/people-list";

export const PeopleAllTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const people = usePeople({ page: currentPage });

  return match(people)
    .with({ status: "loading" }, () => <Loader />)
    .with({ status: "success" }, ({ data, totalPages }) => (
      <PeopleList
        data={data}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    ))
    .with({ status: "error" }, () => (
      <div className="flex items-center justify-center py-10">
        <p>An error has occurred, please try again</p>
      </div>
    ))
    .exhaustive();
};
