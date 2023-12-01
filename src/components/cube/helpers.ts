export const defaultSizes = {
  base: "50vw",
  sm: "40vw",
  md: "35vw",
  lg: "30vw",
  xl: "25vw",
  "2xl": "20vw",
} as const;

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
  breakpointsToSizes: Partial<Record<CubeSizeBreakpoint, string>>
) {
  const sizesCSSVariables: { [index: string]: string; } = {};
  let size = "65vw";
  for (const cubeSizeBreakpoint of cubeSizeBreakpoints) {
    const potentialSizeToAdd = breakpointsToSizes[cubeSizeBreakpoint];
    if (potentialSizeToAdd) {
      size = potentialSizeToAdd;
    }
    sizesCSSVariables[`--cube-parameter-size-${cubeSizeBreakpoint}`] = size;
  }

  return sizesCSSVariables;
}

export type CubeSizeBreakpoint = UnionTypeFromValuesOfArray<
  typeof cubeSizeBreakpoints
>;

export type CubeFace = UnionTypeFromValuesOfArray<typeof facesNames>;

type UnionTypeFromValuesOfArray<T extends readonly unknown[] | unknown[]> =
  T[number];

type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
    [P in keyof U]?: never;
  };

export type Either<T, U> = Only<T, U> | Only<U, T>;