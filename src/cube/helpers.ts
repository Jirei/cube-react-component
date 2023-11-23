export const facesNames = [
  "front",
  "right",
  "back",
  "left",
  "top",
  "bottom",
] as const;
export const cubeSizeBreakpoints = [
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
] as const;

export function getSizesCSSVariables(
  breakpointsToSizes: Partial<Record<CubeSizeBreakpoint, string>> | undefined,
) {
  if (!breakpointsToSizes) return {};
  const sizesCSSVariables: { [index: string]: string | undefined } = {};
  if (breakpointsToSizes) {
    let size = "65vw";
    for (const cubeSizeBreakpoint of cubeSizeBreakpoints) {
      const potentialSizeToAdd = breakpointsToSizes[cubeSizeBreakpoint];
      if (potentialSizeToAdd) {
        size = potentialSizeToAdd;
      }
      sizesCSSVariables[`--cube-parameter-size-${cubeSizeBreakpoint}`] = size;
    }
  }
  return sizesCSSVariables;
}

export type CubeSizeBreakpoint = UnionTypeFromValuesOfArray<
  typeof cubeSizeBreakpoints
>;

export type CubeFace = UnionTypeFromValuesOfArray<typeof facesNames>;

type UnionTypeFromValuesOfArray<T extends readonly unknown[] | unknown[]> =
  T[number];
