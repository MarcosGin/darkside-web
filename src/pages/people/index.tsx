import { People } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PeopleAllTab } from "@/components/people/people-all-tab";
import { PeopleBookmarkTab } from "@/components/people/people-bookmark-tab";

export default function People() {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">People</h2>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="bookmark">Bookmark</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <PeopleAllTab />
        </TabsContent>
        <TabsContent value="bookmark">
          <PeopleBookmarkTab />
        </TabsContent>
      </Tabs>
    </section>
  );
}
