import React from "react";
import { render } from "@testing-library/react";
import { RatingInformation } from "./RatingInformation";

test("RatingInformation renders correctly", () => {
  const { container } = render(<RatingInformation ratingValue="2.2" />);
  expect(container.firstChild).toMatchSnapshot();
});
