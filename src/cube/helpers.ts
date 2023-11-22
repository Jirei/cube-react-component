export const facesNames = ['front', 'right', 'back', 'left', 'top', 'bottom'] as const;
export const cubeSizeBreakpoints = ['base', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export function getSizesCSSVariables(breakpointsToSizes: Record<CubeSizeBreakpoint, string> | undefined) {
  if (!breakpointsToSizes) return {};
  const sizesCSSVariables: { [index: string]: string | undefined; } = {};
  if (breakpointsToSizes) {
    let size = '80%';
    for (const cubeSizeBreakpoint of cubeSizeBreakpoints) {
      if (breakpointsToSizes[cubeSizeBreakpoint]) {
        size = breakpointsToSizes[cubeSizeBreakpoint];
      }
      sizesCSSVariables[`--cube-argument-size-${cubeSizeBreakpoint}`] = size;
    }
  }
  return sizesCSSVariables;
}

export type CubeSizeBreakpoint = UnionTypeFromValuesOfArray<typeof cubeSizeBreakpoints>;

export type CubeFace = UnionTypeFromValuesOfArray<typeof facesNames>;


type UnionTypeFromValuesOfArray<T extends readonly unknown[] | unknown[]> =
  T[number];
