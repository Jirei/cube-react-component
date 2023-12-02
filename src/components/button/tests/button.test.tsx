import { test, expect } from "@playwright/experimental-ct-react";
import { Button } from "../../button/button";

test.use({ viewport: { width: 500, height: 500 } });

test.describe("Cube - visibility & accessibility", () => {
  test("should have perspective none when no perspective is provided", async ({
    mount,
    page,
  }) => {
    const component = await mount(
      <Button>
        Good luck
        <div><Button>Good Bye</Button></div>
      </Button>,
    );
    await expect(component.getByTestId("button")).toHaveCount(1);
  });
});
