import classes from './cube.module.css';

const facesNames = ['front', 'right', 'back', 'left', 'top', 'bottom'] as const;
export type CubeFace = 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom';

export function Cube({
  transitionDuration,
  sizeValue,
  sizeUnit,
  currentFace,
  cubeFaces,
  providedVariablesInCSS = false,
  perspective,
  sceneAdditionalClasses,
  cubeAdditionalClasses,
  cubeFaceAdditionalClasses,
}: {
  transitionDuration: string;
  sizeValue: number;
  sizeUnit: string;
  currentFace: CubeFace;
  cubeFaces: {
    front: React.ReactNode;
    right: React.ReactNode;
    back: React.ReactNode;
    left: React.ReactNode;
    top: React.ReactNode;
    bottom: React.ReactNode;
  };
  providedVariablesInCSS?: boolean;
  perspective?: string;
  sceneAdditionalClasses?: string;
  cubeAdditionalClasses?: string;
  cubeFaceAdditionalClasses?: string;
}) {
  let sizeValueString: string | undefined;
  let size: string | undefined;
  let halfSize: string | undefined;
  let halfSizeNegative: string | undefined;
  let componentStyle: { [index: string]: string } | undefined;
  if (!providedVariablesInCSS) {
    sizeValueString = sizeValue.toString();
    size = sizeValueString + sizeUnit;
    halfSize = String(sizeValue / 2) + sizeUnit;
    halfSizeNegative = String(-sizeValue / 2) + sizeUnit;
    componentStyle = {
      '--cube-size': size,
      '--cube-half-size': halfSize,
      '--cube-half-size-negative': halfSizeNegative,
      '--cube-transition-duration': transitionDuration,
      '--cube-perspective': perspective ? perspective : 'none',
    };
  }

  return (
    <>
      {/* scene */}
      <div
        className={classes.scene + ' ' + sceneAdditionalClasses}
        style={componentStyle as React.CSSProperties}
      >
        {/* cube */}
        <div
          className={`${classes.cube} ${
            classes[`show-${currentFace}`]
          } ${cubeAdditionalClasses}`}
        >
          {/* faces */}
          {facesNames.map((faceName, index) => {
            return (
              <div
                key={index}
                className={`${classes.face} ${
                  classes[`face-${faceName}`]
                } ${cubeFaceAdditionalClasses}`}
              >
                {cubeFaces[faceName]}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
