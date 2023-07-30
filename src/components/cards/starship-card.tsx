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

import { Starship } from "@/types";

type StarshipCardProps = Starship;

export const StarshipCard: React.FC<StarshipCardProps> = ({
  id,
  name,
  model,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h-12">{name}</CardTitle>
        <CardDescription className="h-12 pt-4">{model}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/starships/${id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
