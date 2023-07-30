import Link from "next/link";
import { Fragment } from "react";
import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  items: ListItem[];
};
type ListItem = {
  label: string;
  value?: React.ReactNode;
  links?: { label: string; value: string }[];
};

export const List: React.FC<ListProps> = ({ items, className, ...props }) => {
  return (
    <ul className={cn("list-none", className)} {...props}>
      {items?.map(({ label, value, links }) => (
        <li className="flex space-x-4 border-b py-3 first:border-t" key={label}>
          <span className="font-bold">{label}</span>
          {links ? (
            <span className="flex flex-wrap ">
              {links.map((link, i, row) => (
                <Fragment key={link.value}>
                  <Link
                    href={link.value}
                    className=" flex underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                  {i + 1 !== row.length && <Dot className="mx-4" />}
                </Fragment>
              ))}
            </span>
          ) : (
            <span>{value}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
