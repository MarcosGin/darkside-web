import { match } from "ts-pattern";
import { useState } from "react";

import { PlanetCard } from "@/components/cards/planet-card";
import { usePlanets } from "@/hooks/usePlanets";
import { Loader } from "@/components/ui/loader";
import { Pagination } from "@/components/ui/pagination";

export default function Planets() {
  const [currentPage, setCurrentPage] = useState(1);
  const planets = usePlanets({ page: currentPage });

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">Planets</h2>

      {match(planets)
        .with({ status: "loading" }, () => <Loader />)
        .with({ status: "success" }, ({ data, totalPages }) => (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {data?.map((item) => <PlanetCard {...item} key={item.id} />)}
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
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
