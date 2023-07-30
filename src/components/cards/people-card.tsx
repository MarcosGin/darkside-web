import { Calendar } from "lucide-react";
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

import { People } from "@/types";

type PeopleCardProps = People;

export const PeopleCard: React.FC<PeopleCardProps> = ({
  id,
  name,
  birth_year,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h-12">{name}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2 text-sm md:flex-row md:justify-between md:space-y-0">
          <div className="flex items-center">
            <Calendar />
            {birth_year}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/people/${id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
