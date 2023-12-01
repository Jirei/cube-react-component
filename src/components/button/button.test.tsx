// @vitest-environment jsdom
import { test, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  test("has the correct text content", () => {
    const { getByText } = render(<Button>Hey</Button>);
    expect(getByText("Hey")).toBeInTheDocument();
  });
});
