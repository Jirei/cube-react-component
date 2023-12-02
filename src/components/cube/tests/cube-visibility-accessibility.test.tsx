import { test, expect } from "@playwright/experimental-ct-react";
import { Cube } from "../cube";
import { CubeFace, facesNames } from "../helpers";


test.describe("Cube - visibility & accessibility", () => {
  test("has the container element", async ({ mount, page }) => {
    await mount(
      getCubeTestSubjectForVisibilityAndAccessibility({ currentFace: "front" }),
    );
    const container = page.getByTestId("container");
    await expect(container).toBeAttached();
  });
  test("has the cube (inner cube, not the container) element", async ({ mount, page }) => {
    await mount(
      getCubeTestSubjectForVisibilityAndAccessibility({ currentFace: "front" }),
    );
    const cube = page.getByTestId("cube");
    await expect(cube).toBeAttached();
  });
  test("has the scene element", async ({ mount, page }) => {
    await mount(
      getCubeTestSubjectForVisibilityAndAccessibility({ currentFace: "front" }),
    );
    const scene = page.getByTestId("scene");
    await expect(scene).toBeAttached();
  });
  test("has the 6 face elements", async ({ mount, page }) => {
    await mount(
      getCubeTestSubjectForVisibilityAndAccessibility({ currentFace: "front" }),
    );
    for (const faceName of facesNames) {
      const face = page.getByTestId(faceName);
      await expect(face).toBeAttached();
    }
  });
  test("the current face is visible in aria", async ({ mount, page }) => {
    const currentFaceName = "front";
    await mount(
      getCubeTestSubjectForVisibilityAndAccessibility({
        currentFace: currentFaceName,
      }),
    );
    const currentFaceLocator = page.getByTestId(currentFaceName);
    await expect(currentFaceLocator).toHaveAttribute("aria-hidden", "false");
  });
  test("the non-current faces aren't visible in aria", async ({
    mount,
    page,
  }) => {
    const currentFaceName = "front";
    await mount(
      getCubeTestSubjectForVisibilityAndAccessibility({
        currentFace: currentFaceName,
      }),
    );
    for (const faceName of facesNames.filter(
      (faceName) => faceName !== currentFaceName,
    )) {
      const faceLocator = page.getByTestId(faceName);
      await expect(faceLocator).toHaveAttribute("aria-hidden", "true");
    }
  });
 test("cube container has aria-live set to polite", async ({ mount, page }) => {
   await mount(
     getCubeTestSubjectForVisibilityAndAccessibility({
       currentFace: "front"
     }),
   );
   const containerLocator = page.getByTestId("container");
   await expect(containerLocator).toHaveAttribute("aria-live", "polite");
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

const cubeFaces = {
  // can't use real components here I think because of the cross-environment things
  front: "placeholder",
  right: "placeholder",
  back: "placeholder",
  left: "placeholder",
  top: "placeholder",
  bottom: "placeholder",
};
