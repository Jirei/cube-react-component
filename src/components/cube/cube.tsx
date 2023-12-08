import classes from "./cube.module.css";
import {
  facesNames,
  getSizesCSSVariables,
  defaultSizes,
  type Either,
  type CubeFace,
  type CubeSizeBreakpoint,
} from "./helpers";

/**
 *
 * Cube Component to make a nice 3D gallery. Refer to the {@link https://github.com/Jirei/cube-react-component/docs/index.html | documentation main page  } and also to the {@link http://example.com | CubeProps section} for more details about the arguments you need to provide.
 * You should start getting helpful tooltip hints when you start to write the arguments of this component.
 * @example Instantiating the Cube:
 * ```tsx
 * <Cube
 *    sizes={{
 *    base: "50vw",
 *    sm: "40vw",
 *    md: "35vw",
 *    lg: "30vw",
 *    xl: "25vw",
 *   "2xl": "20vw",
 *    }}
 *    perspective="none"
 *    transitionDuration="1s"
 *    transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
 *    currentFace={currentFace}
 *    faces={faces}
 *    />
 * ```
 */
export function Cube({
  transitionDuration = "1s",
  transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)",
  sizes = defaultSizes,
  currentFace,
  faces,
  perspective = "none",
  containerAdditionalClasses,
  sceneAdditionalClasses,
  cubeAdditionalClasses,
  facesAdditionalClasses,
  individualFacesAdditionalClasses,
  containerAdditionalProps,
  sceneAdditionalProps,
  cubeAdditionalProps,
  facesAdditionalProps,
  individualFacesAdditionalProps,
}: CubeProps) {
  const componentCSSVariables: {
    [index: string]: string | undefined;
  } = {
    ...getSizesCSSVariables(sizes === "default" ? defaultSizes : sizes),
    "--cube-transition-duration": transitionDuration || undefined,
    "--cube-transition-timing-function": transitionTimingFunction || undefined,
    "--cube-perspective": perspective || undefined,
  };

  const containerClassName = `${classes.container} ${
    containerAdditionalClasses ?? ""
  }`;

  const sceneClassName = `${classes.scene} ${sceneAdditionalClasses ?? ""}`;

  const cubeClassName = `${classes.cube} ${classes[`show-${currentFace}`]} ${
    cubeAdditionalClasses ?? ""
  }`;

  const getFaceClassName = (faceName: CubeFace) => {
    return `${classes.face} ${classes[`face-${faceName}`]} ${
      facesAdditionalClasses ?? ""
    } ${individualFacesAdditionalClasses?.[faceName] ?? ""}`;
  };

  return (
    /* container */
    <div
      data-testid="container"
      aria-live="polite"
      {...containerAdditionalProps}
      className={containerClassName}
      style={componentCSSVariables as React.CSSProperties}
    >
      {/* scene */}
      <div
        data-testid="scene"
        {...sceneAdditionalProps}
        className={sceneClassName}
      >
        {/* cube */}
        <div
          data-testid="cube"
          {...cubeAdditionalProps}
          className={cubeClassName}
        >
          {/* faces */}
          {facesNames.map((faceName) => {
            return (
              <div
                {...facesAdditionalProps}
                {...individualFacesAdditionalProps?.[faceName]}
                aria-hidden={faceName !== currentFace}
                key={faceName}
                data-testid={faceName}
                className={getFaceClassName(faceName)}
              >
                {faces[faceName]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export type CubeProps = {
  /**
   * The 6 faces (or less if you don't want to use them all) you want the cube to have. Provide an object with the following form:
   * ```tsx
   *  const cubeFaces = {
   * front: <p>Anything React Can Render</p>,
   * right: <p>Anything React Can Render</p>,
   * back: <p>Anything React Can Render</p>,
   * left: <p>Anything React Can Render</p>,
   * top: <p>Anything React Can Render</p>,
   * bottom: <p>Anything React Can Render</p>;
   * }
   * ```
   * Obviously if you provide that kind of faces, it will not look great. Try to have faces that take the full width and height to have a nice cube in the end. The main use case in mind was a cube carousel for showing images.
   * You don't have to use the 6 faces, you can (if you want) only use 4 faces and not use the top and bottom, use even less than 4 faces and not offer the full range of motion, etc. You decide.
   * Refer to the {@link https://github.com/Jirei/cube-react-component/blob/main/src/demo.tsx | demo code  } in the GitHub repository for an example of a six-faced cube.
   *
   */
  faces: { [Face in CubeFace]?: React.ReactNode };
  /**
   * Face you want the cube to show. Change this parameter to make the cube move and make it show the new face selected (the cube will move with an animation when changing face).
   *
   * Must be one of:
   * ```tsx
   * "front" | "right" | "back" | "left" | "top" | "bottom"
   * ```
   *
   * An array with these values is exported from this module for your convenience, can be imported this way:
   *
   * ```tsx
   * import { facesNames } from 'cube-react-component'; // facesNames is ['front', 'right', 'back', 'left', 'top', 'bottom'] (readonly)
   * ```
   * You can also import the `CubeFace` type:
   *
   * ```tsx
   * import { type CubeFace } from 'cube-react-component'; // type CubeFace = "front" | "right" | "back" | "left" | "top" | "bottom"`
   * ```
   * Can be used to type your code in TypeScript. For example with useState() from React:
   *
   * ```tsx
   * const [currentFace, setCurrentFace] = useState<CubeFace>('front'); // This state will only accept any of the correct face names for this parameter.
   * ```
   */
  currentFace: CubeFace;
  /**
   * Duration of the transition between the faces.
   * @defaultValue Default to one second.
   *
   *(Use the unit `s` for seconds and `ms` for milliseconds.)
   *
   * **Examples**:
   *
   *`0s` `1.5s` `6s` `0ms` `150.25ms` `6000ms`
   *
   * Refer to the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/time | \<time\> MDN page} for more details about the accepted values.
   */
  transitionDuration?: string;
  /**
   * CSS Transition timing function used for the transition between the faces.
   *
   * @defaultValue Default to `cubic-bezier(0.4, 0, 0.2, 1)`.
   *
   * **Examples**:
   *
   * `linear` `ease-in-out` `cubic-bezier(0.4, 0, 0.2, 1)`
   *
   * Refer to the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function | transition-timing-function MDN page} for more details about the accepted values.
   */
  transitionTimingFunction?: string;
  /**
   * Perspective if you want to add one.
   * @defaultValue Default to `none`.
   *
   * **Example Values**: `none` `800px` `23rem` `5.5cm`
   *
   * Refer to the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/perspective | MDN page } and this {@link https://3dtransforms.desandro.com/perspective | explanation } for more details about the notion of perspective.
   *
   */
  perspective?: string;
  /**
   * String of CSS classes you can have added to the container classes. The container is the outermost wrapping element of the cube component.
   * ```tsx
   * const containerAdditionalClasses = "additional1 additional2";
   * <div // div of the container
   *   className={'container-internal-class-1 container-internal-class-2' + ' ' containerAdditionalClasses}
   * >child components...</div>
   * ``` */
  containerAdditionalClasses?: string;
  /**
   * String of CSS classes you can have added to the scene classes. The scene is used as the base for the cube animations, it is wrapping the (inner not the whole component) cube.
   * ```tsx
   * const sceneAdditionalClasses = "additional1 additional2";
   * <div // div of the scene
   *   className={'scene-internal-class-1 scene-internal-class-2' + ' ' sceneAdditionalClasses}
   * >child components...</div>
   * ``` */
  sceneAdditionalClasses?: string;
  /**
   * String of CSS classes you can have added to the cube classes. The cube here is the inner "real" cube, not the whole cube-react-component.
   * ```tsx
   * const cubeAdditionalClasses = "additional1 additional2";
   * <div // div of the cube
   *   className={'cube-internal-class-1 cube-internal-class-2' + ' ' cubeAdditionalClasses}
   * >child components...</div>
   * ``` */
  cubeAdditionalClasses?: string;
  /**
   * String of CSS classes you can use to add classes to all the faces of the cube. If you want to add the classes to only a few (or to a single one) face(s), use `individualFacesAdditionalClasses`.
   * ```tsx
   * const facesAdditionalClasses = "additional1 additional2";
   * <div // div of the face
   *   className={'face-internal-class-1 face-internal-class-2' + ' ' faceAdditionalClasses}
   * >child components...</div>
   * ``` */
  facesAdditionalClasses?: string;
  /**
   * Object of CubeFace to CSS classes you can use to add classes to specific faces.
   * (if you want to add the classes to all faces, use `facesAdditionalClasses` for convenience)
   * ```tsx
   * const individualFacesAdditionalClasses = {"left":"additional1 additional2"};
   * <div // div of the left face
   *   className={'face-internal-class-1 face-internal-class-2' + ' ' individualFacesAdditionalClasses}
   * >child components...</div>
   * ``` */
  individualFacesAdditionalClasses?: Partial<Record<CubeFace, string>>;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * Object with props to add to the container. The container is the outermost wrapping element of this component.
   * ```tsx
   * const containerAdditionalProps = {"data-additional":true}
   * <div // div of container
   *   {...containerAdditionalProps} {...otherProps}
   * >child components...</div>
   * ``` */
  containerAdditionalProps?: Record<string, any>;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * Object with props to add to the scene. The scene is used as the base for the cube animations, it is wrapping the (inner not the whole component) cube.
   * ```tsx
   * const sceneAdditionalProps = {"data-additional":true}
   * <div // div of scene
   *   {...sceneAdditionalProps} {...otherProps}
   * >child components...</div>
   * ``` */
  sceneAdditionalProps?: Record<string, any>;
  /**
   * Object with props to add to the cube. The cube here is the inner "real" cube, not the whole cube-react-component.
   * ```tsx
   * const cubeAdditionalProps = {"data-additional":true}
   * <div // div of cube
   *   {...cubeAdditionalProps} {...otherProps}
   * >child components...</div>
   * ``` */
  cubeAdditionalProps?: Record<string, any>;
  /**
   * Object with props to add to the face. (if you want to add props to specific faces, use `individualFacesAdditionalProps`)
   * ```tsx
   * const faceAdditionalProps = {"data-additional":true}
   * <div // div of face
   *   {...faceAdditionalProps} {...otherProps}
   * >child components...</div>
   * ``` */
  facesAdditionalProps?: Record<string, any>;
  /**
   * Object with mapping CubeFace to props. (if you want to add props to all faces, use `facesAdditionalProps` for convenience)
   * ```tsx
   * const individualFacesAdditionalProps = {left:{"data-additional":true}}
   * <div // div of left face
   *   {...faceAdditionalProps} {...otherProps}
   * >child components...</div>
   * ``` */
  individualFacesAdditionalProps?: Partial<
    Record<CubeFace, Record<string, any>>
  >;
  /* eslint-enable @typescript-eslint/no-explicit-any */
} & Either<CubeSizes, CSSVariableForCubeSize>;

export type CubeSizes = {
  /**
   * breakpoint-to-size object that is used to set the size of the cube directly in the parameters of the component.
   *
   * Or give the string `"default"` to use the default sizes object:
   * ```
   * const defaultSizes = {
   *   base: "50vw";
   *   sm: "40vw";
   *   md: "35vw";
   *   lg: "30vw";
   *   xl: "25vw";
   *   "2xl": "20vw";
   *   }
   * ```
   *
   * There are 3 ways to set the size of the cube:
   *
   *  1. Sizing with the `sizes` object
   *
   *  2. Sizing with `sizes` set to `"default"`
   *
   *  3. Sizing with custom breakpoints and a CSS variable
   *
   * ## 1. Sizing with the `sizes` object and default Tailwind breakpoints (using this parameter)
   *
   * The breakpoints used are the default ones from Tailwind + there is a `base` breakpoint to target everything below the `sm` breakpoint.
   * The default value for the base breakpoint is `50vw` and will be used for the default of the ones higher until you provide your own one.
   * At that point it's your own that will be used as the default for the higher breakpoints if you don't provide them.
   *
   * Using this parameter (`sizes`) to set the size of the cube is a quick & easy solution if you use the default Tailwind breakpoints in your project.
   *
   * **breakpoints**:
   * - _base_: `from 0px to 639px`
   * - _sm_: `from 640px to 767px`
   * - _md_: `from 768px to 1023px`
   * - _lg_: `from 1024px to 1279px`
   * - _xl_: `1280px to 1535px`
   * - _2xl_: `1536px and beyond`
   *
   * **Examples**:
   *
   * 1. Example with complete `sizes` object
   * ```tsx
   * const sizes = {
   *  'base':'75vw', // the cube will have a width of 75vw when screen width from 0px to 639px
   *  'sm':'65vw', // the cube will have a width of 65vw when screen width from 640px to 767px
   *  'md':'35vw', // the cube will have a width of 35vw when screen width from 768px to 1023px
   *  'lg':'30vw', // the cube will have a width of 30vw when screen width from 1024px to 1279px
   *  'xl':'25vw', // the cube will have a width of 25vw when screen width from 1280px to 1535px
   *  '2xl':'20vw' // the cube will have a width of 20vw when screen width from 1536px  and beyond
   * }
   * ```
   *
   * 2. Example with `sizes` object missing values
   *
   * ```tsx
   * const sizes = {
   *  // 'base' breakpoint not provided, will take the default value of 50vw from 0px to 639px, equivalent of 'base':'50vw';
   *  // 'sm' breakpoint not provided, will take the value from the nearest lower breakpoint, here '50vw'
   *  'md':'35vw', // 'md' is provided, the cube will have a width of 35vw when screen width from 768px to 1023px
   *  // 'lg' breakpoint not provided, will take the value from the nearest lower breakpoint, here '35vw' from 1024px to 1279px
   *  'xl':'25vw', // 'xl' is provided, the cube will have a width of 25vw when screen width from 1280px to 1535px
   *  '2xl':'20vw' // '2xl' is provided, the cube will have a width of 20vw when screen width from 1536px  to no upper limit
   * }
   * ```
   * ## 2. Sizing when `sizes` is set to `"default"`
   *
   * if `sizes` is not provided (and the string `"default"` is given instead) and the self-controlled cube size CSS variable is not set, the cube will use its own set of default values.
   *
   *  @defaultValue Default values:
   * ```tsx
   * const defaultSizes = {
   *   base: "50vw", // the cube will have a width of 50vw when screen width from 0px to 639px
   *   sm: "40vw",  // the cube will have a width of 40vw when screen width from 640px to 767px
   *   md: "35vw", // the cube will have a width of 35vw when screen width from 768px to 1023px
   *   lg: "30vw", // the cube will have a width of 30vw when screen width from 1024px to 1279px
   *   xl: "25vw", // the cube will have a width of 25vw when screen width from 1280px to 1535px
   *   "2xl": "20vw", // the cube will have a width of 20vw when screen width from 1536px and beyond
   * }
   * ```
   *
   *
   *
   * ## 3. Sizing with custom breakpoints and a CSS variable
   *
   * If you want custom breakpoints, you should set the `--cube-css-size` CSS variable on the cube or any wrapping component above with your own breakpoints.
   *
   * You should set `useCSSVariableForCubeSize` to true so that the cube doesn't show errors because you didn't provide a sizes object or the string `"default"` to the parameter `sizes`.
   *
   * The CSS sizing has priority even if the variable `useCSSVariableForCubeSize` is not set. So if you want to use the sizes object, make sure to not provide the CSS variable.
   *
   * ```css
   * .css-cube-sizing {
   * --cube-css-size: 100vw;
   * }
   *
   * @media (min-width: 1000px) {
   *   .css-cube-sizing {
   *     --cube-css-size: 50vw;
   *   }
   * }
   *
   * @media (min-width: 2000px) {
   *    .css-cube-sizing {
   *      --cube-css-size: 20vw;
   *    }
   *  }
   * ```
   * ```tsx
   *  <Cube
   *    perspective="none"
   *    transitionDuration="1s"
   *    transitionTimingFunction="linear"
   *    currentFace="front"
   *    faces={faces}
   *    useCSSVariableForCubeSize={true}
   *    // or just useCSSVariableForCubeSize since the prop value will default to true
   *  />
   *
   * ```
   *
   *
   */
  sizes: Partial<Record<CubeSizeBreakpoint, string>> | "default";
};
/**
 *  If you want custom breakpoints, you should set the `--cube-css-size` CSS variable on the cube or any wrapping component above with your own breakpoints.
 *
 * You should set `useCSSVariableForCubeSize` to true so that the cube doesn't show errors because you didn't provide a sizes object or the string `"default"` for the `sizes` prop.
 *
 * The CSS sizing has priority even if the variable `useCSSVariableForCubeSize` is not set. So if you want to use the sizes object, make sure to not provide the CSS variable.
 *
 * ```css
 * .css-cube-sizing {
 * --cube-css-size: 100vw;
 * }
 *
 * @media (min-width: 1000px) {
 *   .css-cube-sizing {
 *     --cube-css-size: 50vw;
 *   }
 * }
 *
 * @media (min-width: 2000px) {
 *    .css-cube-sizing {
 *      --cube-css-size: 20vw;
 *    }
 *  }
 * ```
 * ```tsx
 *  <Cube
 *    perspective="none"
 *    transitionDuration="1s"
 *    transitionTimingFunction="linear"
 *    currentFace="front"
 *    faces={faces}
 *    useCSSVariableForCubeSize={true}
 *    // or just useCSSVariableForCubeSize since the prop value will default to true
 *  />
 *
 * ```
 *
 *
 *
 */
export type CSSVariableForCubeSize = { useCSSVariableForCubeSize: true };
