import { useMemo } from "react";
import { useRouter } from "next/router";
import uniq from "lodash.uniq";

type MenuItem = {
  url: string;
  title: string;
  icon: JSX.Element;
};

const useMenuItems = (items: MenuItem[]) => {
  const router = useRouter();
  //Get unique paths from route: [''] (home) | ['people'] (news) etc.
  const paths = useMemo(() => uniq(router.asPath.split("/")), [router.asPath]);
  const itemsMapped = useMemo(
    () =>
      items.map((item) => {
        //Get unique paths from item route: [''] (home) | ['people'] (news) etc.
        const pathsUniq = uniq(item.url.split("/"));

        //In the case that it is '/', we leave the empty strings in the array, otherwise, we remove them.
        const itemPaths =
          router.asPath === item.url
            ? pathsUniq
            : pathsUniq.filter((item) => item);
        //We get an array with the matches
        const matches = itemPaths
          .map((obj) => paths.indexOf(obj))
          .filter((item) => item >= 0);
        return {
          url: item.url,
          title: item.title,
          icon: item.icon,
          firstIndexMatch: matches[0],
          matchesCount: matches.length,
        };
      }),
    [items, paths, router.asPath],
  );

  const currentItem = useMemo(() => {
    //We filter the items with 0 matches
    const items = itemsMapped.filter((item) => item.matchesCount);

    //If there are no items to compare we return undefined
    if (items && items.length === 0) return;

    //We get the item with the most matches
    const { matchesCount } = items.reduce(function (prev, current) {
      return prev.matchesCount > current.matchesCount ? prev : current;
    });

    //We look for the first match with the maximum value sorted by first index match
    const firstMatch = items
      .filter((item) => item.matchesCount === matchesCount)
      .sort((a, b) => a.firstIndexMatch - b.firstIndexMatch)[0];

    return firstMatch;
  }, [itemsMapped]);

  return { items: itemsMapped, currentItem };
};

export default useMenuItems;
