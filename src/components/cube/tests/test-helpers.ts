import { test as base } from "@playwright/experimental-ct-react";

export type TestOptions = {
  testProductionCube: boolean;
};

export const test = base.extend<TestOptions>({
  testProductionCube: [true, { option: true }],
});


export const faces = {
  // can't use real components with playwright test-ct I think because of the cross-environment things
  front: "front",
  right: "right",
  back: "back",
  left: "left",
  top: "top",
  bottom: "bottom",
} as const;

export const typeSafeObjectFromEntries = <
  const T extends ReadonlyArray<readonly [PropertyKey, unknown]>
>(
  entries: T
): { [K in T[number]as K[0]]: K[1] } => {
  return Object.fromEntries(entries) as { [K in T[number]as K[0]]: K[1] };
};
