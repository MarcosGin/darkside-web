import { match } from "ts-pattern";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useFilm } from "@/hooks/useFilm";
import { Button } from "@/components/ui/button";
import { List } from "@/components/ui/list";
import { Loader } from "@/components/ui/loader";

export default function Film() {
  const { query } = useRouter();
  const film = useFilm(query.id as string);

  return (
    <section className="mt-10">
      <Button asChild>
        <Link href="/films">
          <ChevronLeft className="h-4 w-4" /> Back
        </Link>
      </Button>

      {match(film)
        .with({ status: "loading" }, () => <Loader />)
        .with({ status: "success" }, ({ data }) => (
          <div className="mt-4 flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {data?.title}
            </h2>
            <div className="flex w-full max-w-[800px] flex-col space-y-8">
              <p className="text-center">{data?.opening_crawl}</p>
              <List
                items={[
                  { label: "Director", value: data?.director },
                  { label: "Producer", value: data?.producer },
                  { label: "Release Date", value: data?.release_date },
                  { label: "Episode", value: data?.episode_id },
                  {
                    label: "Characters",
                    links: data?.characters?.map(({ id, name }) => ({
                      label: name,
                      value: `/people/${id}`,
                    })),
                  },
                  {
                    label: "Planets",
                    links: data?.planets?.map(({ id, name }) => ({
                      label: name,
                      value: `/planets/${id}`,
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
