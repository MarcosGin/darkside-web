import { Calendar, Heart, HeartHandshake, HeartOff } from "lucide-react";
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

type PeopleCardProps = People & {
  bookmarked: boolean;
  onBookmark: (action: "add" | "remove") => void;
};

export const PeopleCard: React.FC<PeopleCardProps> = ({
  id,
  name,
  birth_year,
  bookmarked,
  onBookmark,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h-12">{name}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex  flex-row justify-between space-y-0 text-sm">
          <div className="flex items-center">
            <Calendar />
            {birth_year}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => onBookmark(bookmarked ? "remove" : "add")}
          >
            {bookmarked ? (
              <HeartOff className="h-4 w-4" />
            ) : (
              <Heart className="h-4 w-4" />
            )}
          </Button>
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
