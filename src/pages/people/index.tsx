import { match } from "ts-pattern";
import { usePagination } from "@mantine/hooks";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useState } from "react";

import { People } from "@/types";
import { usePeople } from "@/hooks/usePeople";
import { PeopleCard } from "@/components/cards/people-card";
import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";

const PeopleList: React.FC<{
  data?: People[];
  currentPage: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
}> = ({ data, totalPages = 1, currentPage, onPageChange }) => {
  const pagination = usePagination({
    total: totalPages,
    initialPage: currentPage,
    onChange: onPageChange,
  });
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((item) => <PeopleCard {...item} key={item.id} />)}
      </div>
      <div className="my-8 flex items-center justify-end space-x-6 lg:space-x-4">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {pagination.active} of {totalPages}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => pagination.first()}
            disabled={pagination.active === 1}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => pagination.previous()}
            disabled={pagination.active === 1}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => pagination.next()}
            disabled={pagination.active === totalPages}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => pagination.last()}
            disabled={pagination.active === totalPages}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default function People() {
  const [page, setPage] = useState(1);
  const people = usePeople({ page });

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">People</h2>

      {match(people)
        .with({ status: "loading" }, () => <Loader />)
        .with({ status: "success" }, ({ data, totalPages }) => (
          <PeopleList
            data={data}
            totalPages={totalPages}
            currentPage={page}
            onPageChange={(page) => setPage(page)}
          />
        ))
        .with({ status: "error" }, () => (
          <div className="flex items-center justify-center py-10">
            <p>An error has occurred, please try again</p>
          </div>
        ))
        .exhaustive()}
    </section>
  );
}
