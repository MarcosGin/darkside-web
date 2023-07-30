import { match } from "ts-pattern";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

import { usePerson } from "@/hooks/usePerson";
import { Button } from "@/components/ui/button";
import { List } from "@/components/ui/list";
import { Loader } from "@/components/ui/loader";

export default function Person() {
  const { query } = useRouter();
  const person = usePerson(query.id as string);

  return (
    <section className="mt-10">
      <Button asChild>
        <Link href="/people">
          <ChevronLeft className="h-4 w-4" /> Back
        </Link>
      </Button>

      {match(person)
        .with({ status: "loading" }, () => <Loader />)
        .with({ status: "success" }, ({ data }) => (
          <div className="mt-4 flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {data?.name}
            </h2>
            <div className="flex w-full max-w-[800px] flex-col space-y-8">
              <List
                items={[
                  { label: "Height", value: data?.height },
                  { label: "Mass", value: data?.mass },

                  { label: "Hair Color", value: data?.hair_color },
                  { label: "Eye Color", value: data?.eye_color },
                  { label: "Skin Color", value: data?.skin_color },
                  { label: "Gender", value: data?.gender },
                  { label: "Birth Year", value: data?.birth_year },
                  {
                    label: "Home World",
                    links: data?.homeworld
                      ? [
                          {
                            label: data.homeworld.name,
                            value: `/planets/${data.homeworld.id}`,
                          },
                        ]
                      : undefined,
                  },
                  {
                    label: "Films",
                    links: data?.films?.map(({ id, title }) => ({
                      label: title,
                      value: `/films/${id}`,
                    })),
                  },

                  {
                    label: "Starships",
                    links: data?.starships?.map(({ id, name }) => ({
                      label: name,
                      value: `/starships/${id}`,
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
