import React from "react";
import { render } from "@testing-library/react";
import { AvatarItem } from "./AvatarItem";

test("AvatarItem renders correctly", () => {
  const { container } = render(
    <AvatarItem
      primaryText="Click Me"
      secondaryText="sd"
      image="https://static.tvmaze.com/uploads/images/original_untouched/11/27896.jpg"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
