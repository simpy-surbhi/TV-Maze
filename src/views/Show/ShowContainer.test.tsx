import React from "react";
import { render, screen } from "@testing-library/react";
import { ShowContainer } from "./ShowContainer";
import { MemoryRouter } from "react-router-dom";

test("Should render show container page for show route", () => {
  render(
    <MemoryRouter initialEntries={["/shows/1955"]}>
      <ShowContainer />
    </MemoryRouter>
  );
  expect(screen.getByTestId("show-container")).toBeInTheDocument();
});
