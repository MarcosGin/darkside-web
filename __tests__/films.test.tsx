import Films from "@/pages/films";
import { renderWithClient } from "@/utils/test-utils";

describe("Films", () => {
  it("renders a list of films", async () => {
    const result = renderWithClient(<Films />);

    const cards = await result.findByText("A New Hope");

    expect(cards).toBeInTheDocument();
  });
});
