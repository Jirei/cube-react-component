import { test, expect } from "@playwright/experimental-ct-react";
import { Cube } from "../cube";
import { type Locator } from "playwright/test";
import { faces } from "./test-helpers";

test.describe("Transition Timing Function", () => {
  test("should have transition timing function of 'cubic-bezier(0.4, 0, 0.2, 1)' when no transition timing function is provided", async ({
    mount,
    page,
  }) => {
    await mount(
      getCubeTestSubjectForTransitionTimingFunction({
        transitionTimingFunction: undefined,
      }),
    );
    const cube = page.getByTestId("cube");
    const transitionDuration =
      await getTransitionTimingFunctionFromLocator(cube);
    expect(transitionDuration).toBe("cubic-bezier(0.4, 0, 0.2, 1)");
  });
  test("should have the given transition duration when a transition duration is provided", async ({
    mount,
    page,
  }) => {
    const providedTransitionTimingFunction = "linear";
    await mount(
      getCubeTestSubjectForTransitionTimingFunction({
        transitionTimingFunction: providedTransitionTimingFunction,
      }),
    );
    const cube = page.getByTestId("cube");
    const transitionDuration =
      await getTransitionTimingFunctionFromLocator(cube);
    expect(transitionDuration).toBe(providedTransitionTimingFunction);
  });
});

function getTransitionTimingFunctionFromLocator(locator: Locator) {
  return locator.evaluate((element) =>
    window
      .getComputedStyle(element)
      .getPropertyValue("transition-timing-function"),
  );
}

function getCubeTestSubjectForTransitionTimingFunction({
  transitionTimingFunction,
}: {
  transitionTimingFunction: string | undefined;
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
      transitionTimingFunction={transitionTimingFunction}
      currentFace="front"
      faces={faces}
    />
  );
}
