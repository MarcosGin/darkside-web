import { match } from "ts-pattern";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useStarship } from "@/hooks/useStarship";

import { Button } from "@/components/ui/button";
import { List } from "@/components/ui/list";
import { Loader } from "@/components/ui/loader";

export default function Starship() {
  const { query } = useRouter();
  const planet = useStarship(query.id as string);

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
                  { label: "Model", value: data?.model },
                  { label: "Starship Class", value: data?.starship_class },
                  { label: "Manufacturer", value: data?.manufacturer },
                  { label: "Cost in Credits", value: data?.cost_in_credits },
                  { label: "Length", value: data?.length },
                  {
                    label: "Max Atmosphering Speed",
                    value: data?.max_atmosphering_speed,
                  },
                  { label: "Crew", value: data?.crew },
                  { label: "Passengers", value: data?.passengers },
                  { label: "Cargo Capacity", value: data?.cargo_capacity },
                  { label: "Consumables", value: data?.consumables },
                  {
                    label: "Hyperdrive Rating",
                    value: data?.hyperdrive_rating,
                  },
                  { label: "MGLT", value: data?.MGLT },

                  {
                    label: "Pilots",
                    links: data?.pilots?.map(({ id, name }) => ({
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
