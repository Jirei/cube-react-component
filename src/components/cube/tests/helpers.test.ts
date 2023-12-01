import { expect, test, describe } from "vitest";
import { defaultSizes, getSizesCSSVariables } from "../helpers";


describe('getSizesCSSVariables', () => {
  test('should return the correct CSS variables when provided the defaultBreakpointsToSizes', () => {
    expect(getSizesCSSVariables(defaultSizes)).toEqual({
      "--cube-parameter-size-base": "50vw",
      "--cube-parameter-size-sm": "40vw",
      "--cube-parameter-size-md": "35vw",
      "--cube-parameter-size-lg": "30vw",
      "--cube-parameter-size-xl": "25vw",
      "--cube-parameter-size-2xl": "20vw",
    });
  });

  test('should return the correct CSS variables when provided a complete breakpoints object', () => {
    expect(getSizesCSSVariables(completeBreakpointsToSizesObject)).toEqual({
      "--cube-parameter-size-base": "80vw",
      "--cube-parameter-size-sm": "60vw",
      "--cube-parameter-size-md": "50vw",
      "--cube-parameter-size-lg": "40vw",
      "--cube-parameter-size-xl": "30vw",
      "--cube-parameter-size-2xl": "15vw",
    });
  });

  test('should return the correct CSS variables when provided an incomplete breakpoints object', () => {
    expect(getSizesCSSVariables(incompleteBreakpointsToSizesObject)).toEqual({
      "--cube-parameter-size-base": "65vw",
      "--cube-parameter-size-sm": "65vw",
      "--cube-parameter-size-md": "35vw",
      "--cube-parameter-size-lg": "35vw",
      "--cube-parameter-size-xl": "25vw",
      "--cube-parameter-size-2xl": "20vw",
    });
  });
});

const incompleteBreakpointsToSizesObject = {
  md: "35vw",
  xl: "25vw",
  '2xl': "20vw"
} as const;


const completeBreakpointsToSizesObject = {
  base: "80vw",
  sm: "60vw",
  md: "50vw",
  lg: "40vw",
  xl: "30vw",
  "2xl": "15vw",
} as const;