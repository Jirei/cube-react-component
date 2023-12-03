import { test, expect } from "@playwright/experimental-ct-react";
import { Cube } from "../cube";
import { type Locator } from "playwright/test";

test.describe("Perspective", () => {
  test("should have perspective none when no perspective is provided", async ({
    mount,
    page,
  }) => {
    await mount(getCubeTestSubjectForPerspective({ perspective: undefined }));
    const scene = page.getByTestId("scene");
    const perspective = await getPerspectiveFromLocator(scene);
    expect(perspective).toBe("none");
  });
  test("should have the given perspective when a perspective is provided", async ({
    mount,
    page,
  }) => {
    const providedPerspective = "200px";
    await mount(
      getCubeTestSubjectForPerspective({ perspective: providedPerspective }),
    );
    const scene = page.getByTestId("scene");
    const perspective = await getPerspectiveFromLocator(scene);
    expect(perspective).toBe(providedPerspective);
  });
});

function getPerspectiveFromLocator(locator: Locator) {
  return locator.evaluate((element) =>
    window.getComputedStyle(element).getPropertyValue("perspective"),
  );
}

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

const cubeFaces = {
  // can't use real components here I think because of the cross-environment things
  front: "placeholder",
  right: "placeholder",
  back: "placeholder",
  left: "placeholder",
  top: "placeholder",
  bottom: "placeholder",
};
