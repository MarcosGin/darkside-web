import { match } from "ts-pattern";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

import { usePlanet } from "@/hooks/usePlanet";
import { Button } from "@/components/ui/button";
import { List } from "@/components/ui/list";
import { Loader } from "@/components/ui/loader";

export default function Planet() {
  const { query } = useRouter();
  const planet = usePlanet(query.id as string);

  return (
    <section className="mt-10">
      <Button asChild>
        <Link href="/planets">
          <ChevronLeft className="h-4 w-4" /> Back
        </Link>
      </Button>

      {match(planet)
        .with({ status: "loading" }, () => <Loader />)
        .with({ status: "success" }, ({ data }) => (
          <div className="mt-4 flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {data?.name}
            </h2>
            <div className="flex w-full max-w-[800px] flex-col space-y-8">
              <List
                items={[
                  { label: "Rotation Period", value: data?.rotation_period },
                  { label: "Orbital Period", value: data?.orbital_period },
                  { label: "Diameter", value: data?.diameter },
                  { label: "Climate", value: data?.climate },
                  { label: "Gravity", value: data?.gravity },
                  { label: "Terrain", value: data?.terrain },
                  { label: "Surface Wataer", value: data?.surface_water },
                  { label: "Population", value: data?.population },

                  {
                    label: "Residents",
                    links: data?.residents?.map(({ id, name }) => ({
                      label: name,
                      value: `/people/${id}`,
                    })),
                  },
                  {
                    label: "Films",
                    links: data?.films?.map(({ id, title }) => ({
                      label: title,
                      value: `/films/${id}`,
                    })),
                  },
                ]}
              />
            </div>
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
