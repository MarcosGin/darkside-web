import { People } from "@/types";

import { useBookmarkStore } from "@/hooks/useBookmarkStore";
import { PeopleCard } from "@/components/cards/people-card";
import { Pagination, PaginationProps } from "@/components/ui/pagination";

type PeopleListProps = PaginationProps & {
  data?: People[];
};

export const PeopleList: React.FC<PeopleListProps> = ({ data, ...rest }) => {
  const bookmark = useBookmarkStore();

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((item) => (
          <PeopleCard
            {...item}
            key={item.id}
            bookmarked={bookmark.people.has(item.id)}
            onBookmark={(action) =>
              action === "add"
                ? bookmark.add(item.id)
                : bookmark.remove(item.id)
            }
          />
        ))}
      </div>
      <Pagination {...rest} />
    </>
  );
};
