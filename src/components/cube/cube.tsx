import classes from "./cube.module.css";
import {
  facesNames,
  getSizesCSSVariables,
  type CubeFace,
  type CubeSizeBreakpoint,
} from "./helpers";

export function Cube({
  transitionDuration = "1s",
  transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)",
  breakpointsToSizes = {
    base: "50vw",
    sm: "40vw",
    md: "35vw",
    lg: "30vw",
    xl: "25vw",
    "2xl": "20vw",
  },
  currentFace,
  cubeFaces,
  perspective = "none",
  containerAdditionalClasses,
  sceneAdditionalClasses,
  cubeAdditionalClasses,
  cubeFaceAdditionalClasses,
  containerAdditionalProps,
  sceneAdditionalProps,
  cubeAdditionalProps,
  cubeFaceAdditionalProps,
}: CubeProps) {
  const componentCSSVariables: { [index: string]: string | undefined } = {
    ...getSizesCSSVariables(breakpointsToSizes),
    "--cube-transition-duration": transitionDuration || undefined,
    "--cube-transition-timing-function": transitionTimingFunction || undefined,
    "--cube-perspective": perspective || undefined,
  };

  return (
    /* container */
    <div
      aria-live="polite"
      {...containerAdditionalProps}
      className={`${classes.container} ${containerAdditionalClasses ?? ""}`}
      style={componentCSSVariables as React.CSSProperties}
    >
      {/* scene */}
      <div
        {...sceneAdditionalProps}
        className={`${classes.scene} ${sceneAdditionalClasses ?? ""}`}
      >
        {/* cube */}
        <div
          {...cubeAdditionalProps}
          className={`${classes.cube} ${classes[`show-${currentFace}`]} ${
            cubeAdditionalClasses ?? ""
          }`}
        >
          {/* faces */}
          {facesNames.map((faceName, index) => {
            return (
              <div
                {...cubeFaceAdditionalProps}
                aria-hidden={faceName !== currentFace}
                key={index}
                className={`${classes.face} ${classes[`face-${faceName}`]} ${
                  cubeFaceAdditionalClasses ?? ""
                }`}
              >
                {cubeFaces[faceName]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export interface CubeProps {
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
   * Optional breakpoint-to-size object that is used to set the size of the cube directly in the parameters of the component.
   *
   * There are 2 ways to set the size of the cube: (The default behavior if any of the two ways isn't used is explained at the end in point `3.`).
   *
   *  1. Sizing with the `breakpointsToSizes` object
   *
   *  2. Sizing with custom breakpoints and a CSS variable
   *
   *  3. (Default behavior)
   *
   *  ### 1\. Sizing with the `breakpointsToSizes` object and default Tailwind breakpoints (using this parameter)
   *
   * The breakpoints used are the default ones from Tailwind + there is a `base` breakpoint to target everything below the `sm` breakpoint.
   * The default value for the base breakpoint is `65vw` and will be used for the default of the ones higher until you provide your own one.
   * At that point it's your own that will be used as the default for the higher breakpoints if you don't provide them.
   *
   * Using this parameter (`breakpointsToSizes`) to set the size of the cube is a quick & easy solution if you use the default Tailwind breakpoints in your project.
   *
   * **Examples**:
   *
   * 1. Example with complete `breakpointsToSizes` object
   * ```tsx
   * {
   *  'base':'75vw', // the cube will have a width of 75vw when screen width from 0px to 639px
   *  'sm':'65vw', // the cube will have a width of 65vw when screen width from 640px to 767px
   *  'md':'35vw', // the cube will have a width of 35vw when screen width from 768px to 1023px
   *  'lg':'30vw', // the cube will have a width of 30vw when screen width from 1024px to 1279px
   *  'xl':'25vw', // the cube will have a width of 25vw when screen width from 1280px to 1535px
   *  '2xl':'20vw' // the cube will have a width of 20vw when screen width from 1536px  to no upper limit
   * }
   * ```
   *
   * 2. Example with `breakpointsToSizes` object missing values
   *
   * ```tsx
   * {
   *  // 'base' breakpoint not provided, will take the default value of 65vw from 0px to 639px, equivalent of 'base':'65vw';
   *  // 'sm' breakpoint not provided, will take the value from the nearest lower breakpoint, here '65vw'
   *  'md':'35vw', // 'md' is provided, the cube will have a width of 35vw when screen width from 768px to 1023px
   *  // 'lg' breakpoint not provided, will take the value from the nearest lower breakpoint, here '35vw' from 1024px to 1279px
   *  'xl':'25vw', // 'xl' is provided, the cube will have a width of 25vw when screen width from 1280px to 1535px
   *  '2xl':'20vw' // '2xl' is provided, the cube will have a width of 20vw when screen width from 1536px  to no upper limit
   * }
   * ```
   *
   *  ### 2. Sizing with custom breakpoints and a CSS variable
   *
   * If you want custom breakpoints, you should set the `--cube-css-size` CSS variable on the cube or any wrapping component above with your own breakpoints.
   *
   * Look at this {@link https://documentation.com#css-custom | documentation section } to read more about how to use your own breakpoints and provide the size with a CSS variable.
   *
   * ### 3. Behavior when `breakpoint-to-size` object not provided and no custom breakpoints & CSS variable
   *
   * if `breakpointsToSizes` is not provided (or has the value `undefined`) and the self-controlled cube size CSS variable is not set, the cube will use its own set of default values.
   *
   *  @defaultValue Default values:
   * ```tsx
   * {
   *   base: "50vw",
   *   sm: "40vw",
   *   md: "35vw",
   *   lg: "30vw",
   *   xl: "25vw",
   *   "2xl": "20vw",
   * }
   * ```
   *
   *  It is not recommended to rely on this behavior. It's mostly here to be able to see the cube for discovery purposes without having to provide sizes immediately.
   *
   */
  breakpointsToSizes?: Partial<Record<CubeSizeBreakpoint, string> | undefined>;
  /**
   * Face you want the cube to show. Change this parameter to make the cube move and make it show the face selected (the move is animated of course).
   *
   * Must be one of :
   * ```tsx
   * front` | `right` | `back` | `left` | `top` | `bottom
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
   * import { CubeFace } from 'cube-react-component'; // type CubeFace = "front" | "right" | "back" | "left" | "top" | "bottom"`
   * ```
   * Can be used to type your code with it in TypeScript. For example with useState() from React:
   *
   * ```tsx
   * const [currentFace, setCurrentFace] = useState<CubeFace>('front'); // This state will only accept any of the correct faces for this parameter, perfect!
   * ```
   */
  currentFace: CubeFace;
  /**
   * The 6 faces you want the cube to have. Provide an object with the following form:
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
   * Refer to the demo example in the {@link https://github.com/Jirei/cube-react-component | github repository  } if necessary.
   *
   */
  cubeFaces: { [Face in CubeFace]: React.ReactNode };
  /**
   * Perspective if you want to add one.
   * @defaultValue Default to `none`.
   *
   * **Example Values**: `none` `800px` `23rem` `5.5cm`
   *
   * Refer to the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/perspective | MDN page } and this {@link https://3dtransforms.desandro.com/perspective | explanation } for more details.
   *
   */
  perspective?: string;
  /**
   * String of CSS classes you can have added to the container classes. Refer to the {@link https://github.com/Jirei/cube-react-component | github repository } to learn what is the container.
   * ```tsx
   * <div // div of the container
   *   className={'container-internal-class-1 container-internal-class-2' + ' ' containerAdditionalClasses}
   * >child components...</div>
   * ``` */
  containerAdditionalClasses?: string;
  /**
   * String of CSS classes you can have added to the scene classes. Refer to the {@link https://github.com/Jirei/cube-react-component | github repository} to learn what is the scene.
   * ```tsx
   * <div // div of the scene
   *   className={'scene-internal-class-1 scene-internal-class-2' + ' ' sceneAdditionalClasses}
   * >child components...</div>
   * ``` */
  sceneAdditionalClasses?: string;
  /**
   * String of CSS classes you can have added to the cube classes.
   * ```tsx
   * <div // div of the cube
   *   className={'cube-internal-class-1 cube-internal-class-2' + ' ' cubeAdditionalClasses}
   * >child components...</div>
   * ``` */
  cubeAdditionalClasses?: string;
  /**
   * String of CSS classes you can have added to the faces classes.
   * ```tsx
   * <div // div of the face
   *   className={'face-internal-class-1 face-internal-class-2' + ' ' faceAdditionalClasses}
   * >child components...</div>
   * ``` */
  cubeFaceAdditionalClasses?: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * Object with props to add to the container. Refer to the {@link https://github.com/Jirei/cube-react-component | github repository} to learn what is the container.
   * ```tsx
   * <div // div of container
   *   {...containerAdditionalProps} {...otherProps}
   * >child components...</div>
   * ``` */
  containerAdditionalProps?: Record<string, any>;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * Object with props to add to the scene. Refer to the {@link https://github.com/Jirei/cube-react-component | github repository} to learn what is the scene.
   * ```tsx
   * <div // div of scene
   *   {...sceneAdditionalProps} {...otherProps}
   * >child components...</div>
   * ``` */
  sceneAdditionalProps?: Record<string, any>;
  /**
   * Object with props to add to the cube.
   * ```tsx
   * <div // div of cube
   *   {...cubeAdditionalProps} {...otherProps}
   * >child components...</div>
   * ``` */
  cubeAdditionalProps?: Record<string, any>;
  /**
   * Object with props to add to the face.
   * ```tsx
   * <div // div of face
   *   {...faceAdditionalProps} {...otherProps}
   * >child components...</div>
   * ``` */
  cubeFaceAdditionalProps?: Record<string, any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
