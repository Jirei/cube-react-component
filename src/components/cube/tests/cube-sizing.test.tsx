import { test, expect } from "@playwright/experimental-ct-react";
import { Cube, CubeSizes } from "../cube";
import { type Page, type Locator } from "playwright/test";
import { Either, cubeSizeBreakpoints, facesNames } from "../helpers";
import { defaultSizes } from "../helpers";
import { faces } from "./test-helpers";

const breakpointToTestInfo = getBreakpointToTestInfo();

for (const cubeSizeBreakpoint of cubeSizeBreakpoints) {
  test.describe(cubeSizeBreakpoint + " " + "Size", () => {
    const viewportSize =
      breakpointToTestInfo[cubeSizeBreakpoint]["viewportSize"];
    test.use({ viewport: { width: viewportSize, height: viewportSize } });
    test(`should have default ${cubeSizeBreakpoint} size when sizes is set to "default"`, async ({
      mount,
      page,
    }) => {
      await mount(
        getCubeTestSubjectForSizing({
          sizes: "default",
        }),
      );

      for (const ElementToVerifySize of getElementsToVerifySize(page)) {
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
    test(`should have correct ${cubeSizeBreakpoint} size when sizes is an incomplete sizes object`, async ({
      mount,
      page,
    }) => {
      await mount(
        getCubeTestSubjectForSizing({
          sizes: incompleteSizesObject,
        }),
      );

      for (const ElementToVerifySize of getElementsToVerifySize(page)) {
        expect(
          await getNumericalWidthFromLocator(ElementToVerifySize),
        ).toBeCloseTo(
          Number.parseInt(filledIncompleteSizesObject[cubeSizeBreakpoint]) *
            (viewportSize / 100),
        );
        expect(
          await getNumericalHeightFromLocator(ElementToVerifySize),
        ).toBeCloseTo(
          Number.parseInt(filledIncompleteSizesObject[cubeSizeBreakpoint]) *
            (viewportSize / 100),
        );
      }
    });
    test(`should have correct ${cubeSizeBreakpoint} size when sizes is a complete sizes object`, async ({
      mount,
      page,
    }) => {
      await mount(
        getCubeTestSubjectForSizing({
          sizes: completeSizesObject,
        }),
      );

      for (const ElementToVerifySize of getElementsToVerifySize(page)) {
        expect(
          await getNumericalWidthFromLocator(ElementToVerifySize),
        ).toBeCloseTo(
          Number.parseInt(completeSizesObject[cubeSizeBreakpoint]) *
            (viewportSize / 100),
        );
        expect(
          await getNumericalHeightFromLocator(ElementToVerifySize),
        ).toBeCloseTo(
          Number.parseInt(completeSizesObject[cubeSizeBreakpoint]) *
            (viewportSize / 100),
        );
      }
    });
  });
}

test.describe("Custom CSS breakpoints", () => {
  const customCSSBreakpointsTestsInfo = {
    base: {
      viewportSize: 700,
      numericalPercentageviewSize: 100,
    },
    medium: {
      viewportSize: 1200,
      numericalPercentageviewSize: 50,
    },
    high: {
      viewportSize: 2200,
      numericalPercentageviewSize: 20,
    },
  } as const;

  const customCSSBreakpoints = ["base", "medium", "high"] as const;

  customCSSBreakpoints.map((customSize) => {
    test.describe(`Custom ${customSize} size breakpoint`, () => {
      const { viewportSize } = customCSSBreakpointsTestsInfo[customSize];
      test.use({ viewport: { width: viewportSize, height: viewportSize } });
      test("should use the CSS variable size when provided", async ({
        mount,
        page,
      }) => {
        await mount(
          getCubeTestSubjectForSizing({
            useCSSVariableForCubeSize: true,
          }),
        );

        for (const ElementToVerifySize of getElementsToVerifySize(page)) {
          expect(
            await getNumericalWidthFromLocator(ElementToVerifySize),
          ).toBeCloseTo(
            customCSSBreakpointsTestsInfo[customSize][
              "numericalPercentageviewSize"
            ] *
              (viewportSize / 100),
          );
          expect(
            await getNumericalHeightFromLocator(ElementToVerifySize),
          ).toBeCloseTo(
            customCSSBreakpointsTestsInfo[customSize][
              "numericalPercentageviewSize"
            ] *
              (viewportSize / 100),
          );
        }
      });
    });
  });
});

function getBreakpointToTestInfo() {
  return {
    base: {
      viewportSize: 500,
    },
    sm: {
      viewportSize: 700,
    },
    md: {
      viewportSize: 800,
    },
    lg: {
      viewportSize: 1100,
    },
    xl: {
      viewportSize: 1300,
    },
    "2xl": {
      viewportSize: 1600,
    },
  };
}
const incompleteSizesObject = {
  md: "35vw",
  xl: "25vw",
  "2xl": "20vw",
} as const;

const filledIncompleteSizesObject = {
  base: "50vw",
  sm: "50vw",
  md: "35vw",
  lg: "35vw",
  xl: "25vw",
  "2xl": "20vw",
} as const;

const completeSizesObject = {
  base: "75vw",
  sm: "65vw",
  md: "35vw",
  lg: "30vw",
  xl: "25vw",
  "2xl": "20vw",
};

function getElementsToVerifySize(page: Page) {
  return [
    page.getByTestId("container"),
    page.getByTestId("scene"),
    page.getByTestId("cube"),
    ...facesNames.map((faceName) => page.getByTestId(faceName)),
  ];
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
}: Either<
  { sizes: CubeSizes["sizes"] | "default" },
  { useCSSVariableForCubeSize: true }
>) {
  if (useCSSVariableForCubeSize) {
    return (
      <Cube
        perspective="none"
        transitionDuration="1s"
        transitionTimingFunction="linear"
        currentFace="front"
        faces={faces}
        useCSSVariableForCubeSize={useCSSVariableForCubeSize}
        containerAdditionalClasses="css-cube-sizing"
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
        faces={faces}
      />
    );
  }
}
