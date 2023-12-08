import { test, expect } from "@playwright/experimental-ct-react";
import { Cube } from "../cube";
import { type Locator } from "playwright/test";
import { faces } from "./test-helpers";

test.describe("Transition Duration", () => {
  test("should have transition duration of 1 second when no transition duration is provided", async ({
    mount,
    page,
  }) => {
    await mount(
      getCubeTestSubjectForTransitionDuration({
        transitionDuration: undefined,
      }),
    );
    const cube = page.getByTestId("cube");
    const transitionDuration = await getTransitionDurationFromLocator(cube);
    expect(transitionDuration).toBe("1s");
  });
  test("should have the given transition duration when a transition duration is provided", async ({
    mount,
    page,
  }) => {
    const providedTransitionDuration = "5s";
    await mount(
      getCubeTestSubjectForTransitionDuration({
        transitionDuration: providedTransitionDuration,
      }),
    );
    const cube = page.getByTestId("cube");
    const transitionDuration = await getTransitionDurationFromLocator(cube);
    expect(transitionDuration).toBe(providedTransitionDuration);
  });
});

function getTransitionDurationFromLocator(locator: Locator) {
  return locator.evaluate((element) =>
    window.getComputedStyle(element).getPropertyValue("transition-duration"),
  );
}

function getCubeTestSubjectForTransitionDuration({
  transitionDuration,
}: {
  transitionDuration: string | undefined;
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
      transitionDuration={transitionDuration}
      transitionTimingFunction="linear"
      currentFace="front"
      faces={faces}
    />
  );
}
