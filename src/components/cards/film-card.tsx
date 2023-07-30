import { Calendar, User } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film } from "@/types";

type FilmCardProps = Film;

export const FilmCard: React.FC<FilmCardProps> = ({
  id,
  title,
  director,
  release_date,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h-12">{title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2 text-sm md:flex-row md:justify-between md:space-y-0">
          <div className="flex items-center">
            <User />
            {director}
          </div>
          <div className="flex items-center">
            <Calendar />
            {release_date}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/films/${id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
