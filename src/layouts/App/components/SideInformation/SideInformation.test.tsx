import React from "react";
import { render } from "@testing-library/react";
import { SideInformation } from "./SideInformation";

test("SideInformation renders correctly", () => {
  const data = {
    rate: 1,
  };
  const { container } = render(
    <SideInformation title="test" data={data} ratingValue="2.2" />
  );
  expect(container.firstChild).toMatchSnapshot();
});
