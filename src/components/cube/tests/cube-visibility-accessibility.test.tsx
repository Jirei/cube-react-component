// @vitest-environment jsdom
import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CubeFace, facesNames } from "../helpers";
import { cubeFaces } from "./test-helpers";
import { Cube } from "../cube";

describe("Cube - visibility & accessibility", () => {
  test("has the container element", () => {
    render(
      getCubeTestSubjectForVisibilityAndAccessibility({
        currentFace: "front",
      }),
    );
    const container = screen.queryByTestId("container");
    expect(container).toBeInTheDocument();
  });

  test("has the scene element", () => {
    render(
      getCubeTestSubjectForVisibilityAndAccessibility({
        currentFace: "front",
      }),
    );
    const scene = screen.queryByTestId("scene");
    expect(scene).toBeInTheDocument();
  });

  test("has the cube element", () => {
    render(
      getCubeTestSubjectForVisibilityAndAccessibility({
        currentFace: "front",
      }),
    );
    const cube = screen.queryByTestId("cube");
    expect(cube).toBeInTheDocument();
  });

  test("has the 6 face elements", () => {
    render(
      getCubeTestSubjectForVisibilityAndAccessibility({
        currentFace: "front",
      }),
    );
    for (const faceName of facesNames) {
      const face = screen.queryByTestId(faceName);
      expect(face).toBeInTheDocument();
    }
  });

  test("the current face is visible in aria", () => {
    render(
      getCubeTestSubjectForVisibilityAndAccessibility({ currentFace: "front" }),
    );
    const front = screen.queryByTestId("front");
    expect(front).toHaveAttribute("aria-hidden", "false");
  });

  test("the non-current faces aren't visible in aria", () => {
    render(
      getCubeTestSubjectForVisibilityAndAccessibility({ currentFace: "front" }),
    );
    for (const faceName of facesNames.filter(
      (faceName) => faceName !== "front",
    )) {
      const face = screen.queryByTestId(faceName);
      expect(face).toHaveAttribute("aria-hidden", "true");
    }
  });

  test("cube container has aria-live set to polite", () => {
    render(
      getCubeTestSubjectForVisibilityAndAccessibility({ currentFace: "front" }),
    );
    const container = screen.queryByTestId("container");
    expect(container).toHaveAttribute("aria-live", "polite");
  });
});

function getCubeTestSubjectForVisibilityAndAccessibility({
  currentFace,
}: {
  currentFace: CubeFace;
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
      perspective="none"
      transitionDuration="1s"
      transitionTimingFunction="linear"
      currentFace={currentFace}
      cubeFaces={cubeFaces}
    />
  );
}
