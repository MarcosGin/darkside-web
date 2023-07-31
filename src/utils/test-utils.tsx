import { render } from "@testing-library/react";
import { rest } from "msw";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const handlers = [
  rest.get("*/api/films", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 9,
            name: "Biggs Darklighter",
            height: "183",
            mass: "84",
            hair_color: "black",
            skin_color: "light",
            eye_color: "brown",
            birth_year: "24BBY",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            films: ["https://swapi.dev/api/films/1/"],
            species: [],
            vehicles: [],
            starships: ["https://swapi.dev/api/starships/12/"],
            created: "2014-12-10T15:59:50.509000Z",
            edited: "2014-12-20T21:17:50.323000Z",
            url: "https://swapi.dev/api/people/9/",
          },
        ],
        totalPages: 1,
        limit: 12,
        total: 1,
      }),
    );
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  };
}
