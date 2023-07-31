import { create } from "zustand";
import { persist, StorageValue } from "zustand/middleware";

interface BookmarkState {
  people: Set<number>;
  add: (id: number) => void;
  remove: (id: number) => void;
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set) => ({
      people: new Set(),
      add: (id) =>
        set((prev) => ({
          people: new Set(prev.people).add(id),
        })),
      remove: (id) =>
        set((prev) => {
          const people = new Set(prev.people);
          people.delete(id);
          return {
            people,
          };
        }),
    }),
    {
      name: "people-bookmark",
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str) return null;
          const { state } = JSON.parse(str);
          return {
            state: {
              ...state,
              people: new Set(state.people),
            },
          };
        },
        setItem: (name, newValue: StorageValue<BookmarkState>) => {
          const str = JSON.stringify({
            state: {
              ...newValue.state,
              people: Array.from(newValue.state.people),
            },
          });
          localStorage.setItem(name, str);
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    },
  ),
);
