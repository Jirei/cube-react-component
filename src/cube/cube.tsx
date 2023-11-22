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
 * Duration of the transition between the faces. Default to one second. Use s for seconds and ms for milliseconds.
 *
 * **Examples**:
 *
 **'0s'*

 **'1.5s'*

 **'6s'*

 **'0ms'*

 **'150.25ms'*

 **'6000ms'*

 *
 * Refer to the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/time | \<time\> MDN page} for more details about the accepted values.
 */
  transitionDuration?: string;
  /**
   * CSS Transition timing function used for the transition between the faces. Default to 'cubic-bezier(0.4, 0, 0.2, 1)'.
   *
   * **Examples**:
   *
   * *'linear'*
   *
   * *'ease-in-out'*
   *
   * *'cubic-bezier(0.4, 0, 0.2, 1)'*
   *
   * Refer to the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function | transition-timing-function MDN page} for more details about the accepted values.
   */
  transitionTimingFunction?: string;
  breakpointsToSizes?: Record<CubeSizeBreakpoint, string>;
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
