import { usePagination } from "@mantine/hooks";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export type PaginationProps = {
  currentPage: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages = 1,
  onPageChange,
}) => {
  const pagination = usePagination({
    total: totalPages,
    initialPage: currentPage,
    onChange: onPageChange,
  });

  return (
    <div className="my-8 flex items-center justify-center space-x-6 lg:justify-end lg:space-x-4">
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
  );
};
