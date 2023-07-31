import { Calendar, User2 } from "lucide-react";
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
import { Planet } from "@/types";

type PlanetCardProps = Planet;

export const PlanetCard: React.FC<PlanetCardProps> = ({
  id,
  name,
  population,
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
            <User2 />
            {population}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/planets/${id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
