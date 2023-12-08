/**
 * - _base_ size is applied `from 0px to 639px`
 * - _sm_ size is applied `from 640px to 767px`
 * - _md_ size is applied `from 768px to 1023px`
 * - _lg_ size is applied `from 1024px to 1279px`
 * - _xl_ size is applied `from 1280px to 1535px`
 * - _2xl_ size is applied ` from 1536px and beyond`
 */
export const defaultSizes = {
  base: "50vw",
  sm: "40vw",
  md: "35vw",
  lg: "30vw",
  xl: "25vw",
  "2xl": "20vw",
} as const;

/**
 * Readonly array with the names of the faces:
 * 1. `"front"`
 * 1. `"right"`
 * 1. `"back"`
 * 1. `"left"`
 * 1. `"top"`
 * 1. `"bottom"`
 */
export const facesNames = [
  "front",
  "right",
  "back",
  "left",
  "top",
  "bottom",
] as const;

/**
 * Array with the cube size breakpoints for your convenience.
 * 1. `"base"` (this size is applied `from 0px to 639px`)
 * 1. `"sm"` (this size is applied `from 640px to 767px`)
 * 1. `"md"` (this size is applied `from 768px to 1023px`)
 * 1. `"lg"` (this size is applied `from 1024px to 1279px`)
 * 1. `"xl"` (this size is applied `from 1280px to 1535px`)
 * 1. `"2xl"` (this size is applied ` from 1536px and beyond`)
 */
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
  let size = "50vw";
  for (const cubeSizeBreakpoint of cubeSizeBreakpoints) {
    const potentialSizeToAdd = breakpointsToSizes[cubeSizeBreakpoint];
    if (potentialSizeToAdd) {
      size = potentialSizeToAdd;
    }
    sizesCSSVariables[`--cube-parameter-size-${cubeSizeBreakpoint}`] = size;
  }

  return sizesCSSVariables;
}

/** Type exported for your convenience if you need it in your code. 
 * ```tsx
 * type CubeSizeBreakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl" // Clearer version of the type for illustration purposes.
 * ```
 * 
 * 
*/
export type CubeSizeBreakpoint = UnionTypeFromValuesOfArray<
  typeof cubeSizeBreakpoints
>;

/** 
  * Type representing the name of any one face of the cubes.
  * ```tsx
  * type CubeFace = "front" | "right" | "back" | "left" | "top" | "bottom" // Clearer version of the type for illustration purposes.
  * ```
  * 
  * Can be used to type your code in TypeScript. For example with useState() from React:
  *
  * ```tsx
  * const [currentFace, setCurrentFace] = useState<CubeFace>('front'); // This state will only accept any of the correct face names for this parameter.
  * ```
  */
export type CubeFace = UnionTypeFromValuesOfArray<typeof facesNames>;

type UnionTypeFromValuesOfArray<T extends readonly unknown[] | unknown[]> =
  T[number];

type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
    [P in keyof U]?: never;
  };

export type Either<T, U> = Only<T, U> | Only<U, T>;