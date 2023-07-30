import { match } from "ts-pattern";

import { usePeople } from "@/hooks/usePeople";
import { PeopleCard } from "@/components/cards/people-card";
import { Loader } from "@/components/ui/loader";

export default function People() {
  const people = usePeople();

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">People</h2>

      {match(people)
        .with({ status: "loading" }, () => <Loader />)
        .with({ status: "success" }, ({ data }) => (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {data?.map((item) => <PeopleCard {...item} key={item.id} />)}
          </div>
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
