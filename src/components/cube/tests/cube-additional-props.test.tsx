import { test, expect } from "@playwright/experimental-ct-react";
import { Cube } from "../cube";
import { faces, typeSafeObjectFromEntries } from "./test-helpers";
import { CubeFace, facesNames } from "../helpers";

test.describe("Additional classes", () => {
  test("should have the additional classes", async ({ mount, page }) => {
    await mount(
      getCubeTestSubjectForAdditionalPropsAndClasses({
        containerAdditionalClasses: "container1 container2",
        sceneAdditionalClasses: "scene1 scene2",
        cubeAdditionalClasses: "cube1 cube2",
        facesAdditionalClasses: "face1 face2",
        individualFacesAdditionalClasses: typeSafeObjectFromEntries(
          facesNames.map((faceName) => {
            return [faceName, `${faceName}1 ${faceName}2`];
          }),
        ),
      }),
    );
    await expect(page.getByTestId("container")).toHaveClass(
      /container1 container2/,
    );
    await expect(page.getByTestId("cube")).toHaveClass(/cube1 cube2/);
    await expect(page.getByTestId("scene")).toHaveClass(/scene1 scene2/);
    for (const faceName of facesNames) {
      await expect(page.getByTestId(faceName)).toHaveClass(/face1 face2/);
      await expect(page.getByTestId(faceName)).toHaveClass(
        new RegExp(`${faceName}1 ${faceName}2`),
      );
    }
  });
});
test.describe("Additional props", () => {
  test("should have the additional props", async ({ mount, page }) => {
    await mount(
      getCubeTestSubjectForAdditionalPropsAndClasses({
        containerAdditionalProps: { "data-container": "container" },
        cubeAdditionalProps: { "data-cube": "cube" },
        sceneAdditionalProps: { "data-scene": "scene" },
        facesAdditionalProps: { "data-face": "face" },
        individualFacesAdditionalProps: typeSafeObjectFromEntries(
          facesNames.map((faceName) => {
            return [faceName, { [`data-${faceName}`]: faceName }];
          }),
        ),
      }),
    );
    await expect(page.getByTestId("container")).toHaveAttribute(
      "data-container",
      "container",
    );
    await expect(page.getByTestId("cube")).toHaveAttribute("data-cube", "cube");
    await expect(page.getByTestId("scene")).toHaveAttribute(
      "data-scene",
      "scene",
    );
    for (const faceName of facesNames) {
      await expect(page.getByTestId(faceName)).toHaveAttribute(
        "data-face",
        "face",
      );
      await expect(page.getByTestId(faceName)).toHaveAttribute(
        `data-${faceName}`,
        faceName,
      );
    }
  });
});

function getCubeTestSubjectForAdditionalPropsAndClasses({
  containerAdditionalClasses,
  containerAdditionalProps,
  cubeAdditionalClasses,
  cubeAdditionalProps,
  sceneAdditionalClasses,
  sceneAdditionalProps,
  facesAdditionalClasses,
  facesAdditionalProps,
  individualFacesAdditionalClasses,
  individualFacesAdditionalProps,
}: {
  containerAdditionalClasses?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  containerAdditionalProps?: Record<string, any>;
  cubeAdditionalClasses?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cubeAdditionalProps?: Record<string, any>;
  sceneAdditionalClasses?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sceneAdditionalProps?: Record<string, any>;
  facesAdditionalClasses?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  facesAdditionalProps?: Record<string, any>;
  individualFacesAdditionalClasses?: Record<CubeFace, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  individualFacesAdditionalProps?: Record<CubeFace, Record<string, any>>;
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
      currentFace="front"
      faces={faces}
      containerAdditionalClasses={containerAdditionalClasses}
      containerAdditionalProps={containerAdditionalProps}
      cubeAdditionalClasses={cubeAdditionalClasses}
      cubeAdditionalProps={cubeAdditionalProps}
      sceneAdditionalClasses={sceneAdditionalClasses}
      sceneAdditionalProps={sceneAdditionalProps}
      facesAdditionalClasses={facesAdditionalClasses}
      facesAdditionalProps={facesAdditionalProps}
      individualFacesAdditionalClasses={individualFacesAdditionalClasses}
      individualFacesAdditionalProps={individualFacesAdditionalProps}
    />
  );
}
