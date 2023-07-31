import * as React from "react";
import Link from "next/link";
import {
  Globe2Icon,
  HomeIcon,
  MenuIcon,
  PersonStandingIcon,
  PlaneIcon,
  PopcornIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import useMenuItems from "@/hooks/useMenuItems";

const ITEMS = [
  {
    title: "Home",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Films",
    url: "/films",
    icon: <PopcornIcon />,
  },
  {
    title: "People",
    url: "/people",
    icon: <PersonStandingIcon />,
  },
  {
    title: "Planets",
    url: "/planets",
    icon: <Globe2Icon />,
  },
  {
    title: "Starships",
    url: "/starships",
    icon: <PlaneIcon />,
  },
];

const Navbar: React.FC = () => {
  const { items, currentItem } = useMenuItems(ITEMS);
  return (
    <div className="my-4 flex h-14 items-center justify-between ">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Darkside
      </h3>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.url}>
              <Link href={item.url} legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  active={currentItem?.url === item.url}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <MenuIcon className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent className="py-14">
          <div className="flex flex-col">
            {items.map((item) => (
              <React.Fragment key={item.url}>
                <Link href={item.url} className="flex space-x-4 py-4">
                  {item.icon} <span>{item.title}</span>
                </Link>
                <Separator />
              </React.Fragment>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
