import { test, expect } from "@playwright/experimental-ct-react";
import { Cube, CubeSizes } from "../cube";
import { type Locator } from "playwright/test";
import { cubeSizeBreakpoints, facesNames } from "../helpers";
import { defaultSizes } from "../helpers";

const viewportSizes = {
  base: 500,
  sm: 700,
  md: 800,
  lg: 1100,
  xl: 1300,
  "2xl": 1600,
};

for (const cubeSizeBreakpoint of cubeSizeBreakpoints) {
  test.describe(cubeSizeBreakpoint + " " + "Size", () => {
    const viewportSize = viewportSizes[cubeSizeBreakpoint];
    test.use({ viewport: { width: viewportSize, height: viewportSize } });
    test(`should have default ${cubeSizeBreakpoint} size when no sizes object and no css variable are provided`, async ({
      mount,
      page,
    }) => {
      await mount(
        getCubeTestSubjectForSizing({
          sizes: undefined,
          useCSSVariableForCubeSize: undefined,
        }),
      );
      const ElementsToVerifySize = [
        page.getByTestId("scene"),
        page.getByTestId("scene"),
        page.getByTestId("cube"),
        ...facesNames.map((faceName) => page.getByTestId(faceName)),
      ];
      for (const ElementToVerifySize of ElementsToVerifySize) {
        expect(
          await getNumericalWidthFromLocator(ElementToVerifySize),
        ).toBeCloseTo(
          Number.parseInt(defaultSizes[cubeSizeBreakpoint]) *
            (viewportSize / 100),
        );
        expect(
          await getNumericalHeightFromLocator(ElementToVerifySize),
        ).toBeCloseTo(
          Number.parseInt(defaultSizes[cubeSizeBreakpoint]) *
            (viewportSize / 100),
        );
      }
    });
    test("should have the correct sizes when provided an incomplete sizes object",)
  });
}

function getNumericalWidthFromLocator(locator: Locator) {
  return locator.evaluate((element) =>
    Number.parseInt(window.getComputedStyle(element).getPropertyValue("width")),
  );
}

function getNumericalHeightFromLocator(locator: Locator) {
  return locator.evaluate((element) =>
    Number.parseInt(
      window.getComputedStyle(element).getPropertyValue("height"),
    ),
  );
}

function getCubeTestSubjectForSizing({
  sizes,
  useCSSVariableForCubeSize,
}: {
  sizes: CubeSizes["sizes"] | undefined;
  useCSSVariableForCubeSize: true | undefined;
}) {
  if (useCSSVariableForCubeSize) {
    return (
      <Cube
        perspective="none"
        transitionDuration="1s"
        transitionTimingFunction="linear"
        currentFace="front"
        cubeFaces={cubeFaces}
        useCSSVariableForCubeSize={useCSSVariableForCubeSize}
      />
    );
  } else {
    return (
      <Cube
        sizes={sizes}
        perspective="none"
        transitionDuration="1s"
        transitionTimingFunction="linear"
        currentFace="front"
        cubeFaces={cubeFaces}
      />
    );
  }
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
