import { test, expect } from "@playwright/experimental-ct-react";
import { Cube } from "../cube";
import { cubeFaces } from "./test-helpers";
import { facesNames } from "../helpers";

test.describe("Additional classes", () => {
  test("should have the additional classes", async ({ mount, page }) => {
    await mount(
      getCubeTestSubjectForAdditionalPropsAndClasses({
        containerAdditionalClasses: "container1 container2",
        cubeAdditionalClasses: "cube1 cube2",
        cubeFaceAdditionalClasses: "face1 face2",
      }),
    );
    await expect(page.getByTestId("container")).toHaveClass(
      /container1 container2/,
    );
    await expect(page.getByTestId("cube")).toHaveClass(/cube1 cube2/);
    for (const faceName of facesNames) {
      await expect(page.getByTestId(faceName)).toHaveClass(/face1 face2/);
    }
  });
  test("should have the additional props", async ({ mount, page }) => {
    await mount(
      getCubeTestSubjectForAdditionalPropsAndClasses({
        containerAdditionalProps: { "data-container": "container" },
        cubeAdditionalProps: { "data-cube": "cube" },
        cubeFaceAdditionalProps: { "data-face": "face" },
      }),
    );
    await expect(page.getByTestId("container")).toHaveAttribute(
      "data-container",
      "container",
    );
    await expect(page.getByTestId("cube")).toHaveAttribute("data-cube", "cube");
    for (const faceName of facesNames) {
      await expect(page.getByTestId(faceName)).toHaveAttribute(
        "data-face",
        "face",
      );
    }
  });
});

function getCubeTestSubjectForAdditionalPropsAndClasses({
  containerAdditionalClasses,
  containerAdditionalProps,
  cubeAdditionalClasses,
  cubeAdditionalProps,
  cubeFaceAdditionalClasses,
  cubeFaceAdditionalProps,
}: {
  containerAdditionalClasses?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  containerAdditionalProps?: Record<string, any>;
  cubeAdditionalClasses?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cubeAdditionalProps?: Record<string, any>;
  cubeFaceAdditionalClasses?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cubeFaceAdditionalProps?: Record<string, any>;
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
      cubeFaces={cubeFaces}
      containerAdditionalClasses={containerAdditionalClasses}
      containerAdditionalProps={containerAdditionalProps}
      cubeAdditionalClasses={cubeAdditionalClasses}
      cubeAdditionalProps={cubeAdditionalProps}
      cubeFaceAdditionalClasses={cubeFaceAdditionalClasses}
      cubeFaceAdditionalProps={cubeFaceAdditionalProps}
    />
  );
}
