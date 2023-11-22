import classes from './cube.module.css';
import {
  facesNames,
  getSizesCSSVariables,
  type CubeFace,
  type CubeSizeBreakpoint,
} from './helpers';

export function Cube({
  transitionDuration = '1s',
  transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)',
  breakpointsToSizes,
  currentFace,
  cubeFaces,
  perspective = 'none',
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
    '--cube-transition-duration': transitionDuration,
    '--cube-transition-timing-function': transitionTimingFunction,
    '--cube-perspective': perspective,
  };

  return (
    /* container */
    <div
      {...containerAdditionalProps}
      className={`${classes.container} ${containerAdditionalClasses ?? ''}`}
      style={componentCSSVariables as React.CSSProperties}
    >
      {/* scene */}
      <div
        {...sceneAdditionalProps}
        className={`${classes.scene} ${sceneAdditionalClasses ?? ''}`}
      >
        {/* cube */}
        <div
          {...cubeAdditionalProps}
          className={`${classes.cube} ${classes[`show-${currentFace}`]} ${
            cubeAdditionalClasses ?? ''
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
                  cubeFaceAdditionalClasses ?? ''
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

/**
 *
 * @param transitionDuration -
 * Duration of the transition between the faces. Default to one second. Use s for seconds and ms for milliseconds.
 *
 * **Examples**:
 *
 * *'0s'* *'1.5s'* *'6s'* *'0ms'* *'150.25ms'* *'6000ms'* (one value only)
 *
 * Refer to the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/time | \<time\> MDN page} for more details about the accepted values.
 *
 * @param transitionTimingFunction -
 * CSS Transition timing function used for the transition between the faces. Default to 'cubic-bezier(0.4, 0, 0.2, 1)'.
 *
 * **Examples**:
 *
 * *'linear'* *'ease-in-out'* *'cubic-bezier(0.25, 0.1, 0.25, 1)'* (one value only)
 *
 * Refer to the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function | transition-timing-function MDN page} for more details about the accepted values.
 */
interface CubeProps {
  /**
   * Duration of the transition between the faces. Default to one second. Use the unit `s` for seconds and `ms` for milliseconds.
   *
   * **Examples**:
   *
   *`0s` `1.5s` `6s` `0ms` `150.25ms` `6000ms`
   *
   * Refer to the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/time | \<time\> MDN page} for more details about the accepted values.
   */
  transitionDuration?: string;
  /**
   * CSS Transition timing function used for the transition between the faces. Default to `cubic-bezier(0.4, 0, 0.2, 1)`.
   *
   * **Examples**:
   *
   * `linear` `ease-in-out` `cubic-bezier(0.4, 0, 0.2, 1)`
   *
   * Refer to the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function | transition-timing-function MDN page} for more details about the accepted values.
   */
  transitionTimingFunction?: string;
  /**
   * Optional breakpoint-to-size object if you want to set the sizes directly in the parameters of the component.
   *
   * ### Sizing with the `breakpointsToSizes` object and default Tailwind breakpoints
   *
   * The breakpoints used are the default ones from Tailwind + there is a `base` breakpoint to target everything below the `sm` breakpoint.
   * The default value for the base breakpoint is `65vw` and will be used for the default of the ones higher until you provide your own one. At that point it's your own that will be used as a default for the higher breakpoints if you don't provide them.
   *
   * It can work well if you use Tailwind breakpoints in your project.
   *
   * **Examples**:
   *
   * 1. Example with complete `breakpointsToSizes` object
   * ```
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
   * ```
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
   * ### Sizing with custom breakpoints
   *
   * If you want custom breakpoints, you should set the `--cube-css-size` CSS variable on the cube or above with your own breakpoints.
   * Look at the [documentation section](https://documentation.com#css-custom) on self-controlled cube size CSS variable for more information.
   *
   * ### Behavior when breakpoint-to-size object not provided and no custom breakpoints
   *
   * if `breakpointsToSizes` is not provided (or has the value `undefined`) and the self-controlled cube size CSS variable is not set, the cube will use its own set of default values.
   *
   *  Default values:
   * ```
   * {
   *  'base':'65vw',
   *  'sm':'60vw',
   *  'md':'50vw',
   *  'lg':'40vw',
   *  'xl':'30vw',
   *  '2xl':'25vw'
   * }
   * ```
   *
   *  It is not recommended to rely on this behavior. It's mostly here to be able to see the cube for discovery purposes without providing sizes immediately.
   *
   */
  breakpointsToSizes?: Partial<Record<CubeSizeBreakpoint, string> | undefined>;
  currentFace: CubeFace;
  cubeFaces: { [Face in CubeFace]: React.ReactNode };
  perspective?: string;
  containerAdditionalClasses?: string;
  sceneAdditionalClasses?: string;
  cubeAdditionalClasses?: string;
  cubeFaceAdditionalClasses?: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  containerAdditionalProps?: Record<string, any>;
  sceneAdditionalProps?: Record<string, any>;
  cubeAdditionalProps?: Record<string, any>;
  cubeFaceAdditionalProps?: Record<string, any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
