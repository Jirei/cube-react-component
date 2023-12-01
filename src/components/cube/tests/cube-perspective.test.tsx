// @vitest-environment jsdom
import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import { CubeFace, facesNames } from "../helpers";
import { cubeFaces } from "./test-helpers";
import { Cube } from "../cube";

describe("Cube - visibility & accessibility", () => {
  test("should have perspective none when no perspective is provided", () => {
    render(getCubeTestSubjectForPerspective({ perspective: "none" }));
    const scene = screen.getByTestId("scene");
    console.log(getComputedStyle(scene));
    expect(getComputedStyle(scene).perspective).toBe("none");
  });
});

function getCubeTestSubjectForPerspective({
  perspective,
}: {
  perspective: string | undefined;
}) {
  return (
    <Cube
      sizes={{
        base: "50vw",
        sm: "40vw",
        md: "35vw",
        lg: "30vw",
        xl: "25vw",
        "2xl": "20vw",
      }}
      perspective={perspective}
      transitionDuration="1s"
      transitionTimingFunction="linear"
      currentFace="front"
      cubeFaces={cubeFaces}
    />
  );
}
