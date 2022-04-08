import React from "react";
import { render } from "@testing-library/react";

import { MaterialButton } from "./MaterialButton";

describe("MaterialButton", () => {
  test("renders the MaterialButton component", () => {
    render(<MaterialButton>Hello world!</MaterialButton>);
  });
});