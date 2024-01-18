import React from "react";
import { render, screen } from "@testing-library/react";
import { EpisodeContainer } from "./EpisodeContainer";
import { MemoryRouter } from "react-router-dom";

test("Should render page episode container for episode route", () => {
  render(
    <MemoryRouter initialEntries={["/episodes/192"]}>
      <EpisodeContainer />
    </MemoryRouter>
  );
  expect(screen.getByTestId("episode-container")).toBeInTheDocument();
});
