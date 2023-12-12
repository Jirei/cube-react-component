import { Cube, CubeFace, facesNames } from "cube-react-component";
import "cube-react-component/style.css";
import { useState } from "react";
import templeWaterImage from "./assets/compressed_cube_images/temple-water.jpg";
import templeImage from "./assets/compressed_cube_images/temple.jpg";
import temple2Image from "./assets/compressed_cube_images/temple-2.jpg";
import elephantsImage from "./assets/compressed_cube_images/elephants.jpg";
import cookingImage from "./assets/compressed_cube_images/cooking.jpg";
import statueImage from "./assets/compressed_cube_images/statue.jpg";
import CodeBlock from "./components/code-block";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default function Demo() {
  const transitionDurationDefaultValue = "1s";
  const transitionTimingFunctionDefaultValue = "cubic-bezier(0.4, 0, 0.2, 1)";
  const perspectiveDefaultValue = "none";
  const baseSizeDefaultValue = "50vw";
  const smSizeDefaultValue = "40vw";
  const mdSizeDefaultValue = "35vw";
  const lgSizeDefaultValue = "30vw";
  const xlSizeDefaultValue = "25vw";
  const twoXlSizeDefaultValue = "20vw";
  const [currentFace, setCurrentFace] = useState<CubeFace>("front");
  const [transitionDuration, setTransitionDuration] = useState<string>(
    transitionDurationDefaultValue,
  );
  const [transitionTimingFunction, setTransitionTimingFunction] =
    useState<string>(transitionTimingFunctionDefaultValue);

  const [perspective, setPerspective] = useState<string>(
    perspectiveDefaultValue,
  );
  const [baseSize, setBaseSize] = useState<string>(baseSizeDefaultValue);
  const [smSize, setSmSize] = useState<string>(smSizeDefaultValue);
  const [mdSize, setMdSize] = useState<string>(mdSizeDefaultValue);
  const [lgSize, setLgSize] = useState<string>(lgSizeDefaultValue);
  const [xlSize, setXlSize] = useState<string>(xlSizeDefaultValue);
  const [twoXlSize, setTwoXlSize] = useState<string>(twoXlSizeDefaultValue);
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentFace(e.target.value as CubeFace);

  return (
    <>
      <LinksToDocumentation />
      <div className="flex flex-col items-center  font-['Roboto'] gap-y-16 gap-x-32 mt-10 mb-32 text-secondary-1-very-dark">
        {/* Page Title */}
        <h1 className="p-1 text-3xl font-bold text-center">
          Cube React Component Demo + Live builder
        </h1>
        <Cube
          sizes={{
            base: baseSize,
            sm: smSize,
            md: mdSize,
            lg: lgSize,
            xl: xlSize,
            "2xl": twoXlSize,
          }}
          perspective={perspective}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          currentFace={currentFace}
          faces={faces}
        />
        {/* Call to read documentation */}
        <div className="flex flex-col items-center text-base gap-y-1 ">
          <p className="text-lg font-light">
            Refer to the documentation for more details
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://Jirei.github.io/cube-react-component"
            className="font-bold hover:cursor-pointer hover:underline"
          >
            Documentation
          </a>
        </div>
        {/* Face Selection radio selection */}
        <div className="flex flex-col items-center text-xl gap-y-5">
          <h2 className="mt-8 font-bold">
            Current Face:{" "}
            <span className="capitalize text-secondary-2-dark">
              {currentFace}
            </span>
          </h2>

          <ul className="flex flex-col gap-y-1">
            {facesNames.map((faceName) => (
              <li key={faceName} className="flex gap-x-3">
                <label
                  className="capitalize hover:cursor-pointer"
                  htmlFor={faceName}
                >
                  {faceName}
                </label>
                <input
                  className="hover:cursor-pointer"
                  onChange={handleRadioChange}
                  id={faceName}
                  type="radio"
                  name="rotate-cube-side"
                  value={faceName}
                  checked={currentFace === faceName}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* Customizable cube inputs */}
        <div className="flex flex-col gap-y-5">
          <PlaygroundSimpleInput
            label="Transition Duration"
            inputId="transition-duration"
            value={transitionDuration}
            defaultValue={transitionDurationDefaultValue}
            setValue={setTransitionDuration}
          />
          <PlaygroundSimpleInput
            label="Transition Timing Function"
            inputId="transition-timing-function"
            value={transitionTimingFunction}
            defaultValue={transitionTimingFunctionDefaultValue}
            setValue={setTransitionTimingFunction}
          />
          <PlaygroundSimpleInput
            label="Perspective"
            inputId="perspective"
            value={perspective}
            defaultValue={perspectiveDefaultValue}
            setValue={setPerspective}
          />
          <PlaygroundSimpleInput
            label="Base Size"
            inputId="base-size"
            value={baseSize}
            defaultValue={baseSizeDefaultValue}
            setValue={setBaseSize}
          />
          <PlaygroundSimpleInput
            label="Sm Size"
            inputId="sm-size"
            value={smSize}
            defaultValue={smSizeDefaultValue}
            setValue={setSmSize}
          />
          <PlaygroundSimpleInput
            label="Md Size"
            inputId="md-size"
            value={mdSize}
            defaultValue={mdSizeDefaultValue}
            setValue={setMdSize}
          />
          <PlaygroundSimpleInput
            label="Lg Size"
            inputId="lg-size"
            value={lgSize}
            defaultValue={lgSizeDefaultValue}
            setValue={setLgSize}
          />
          <PlaygroundSimpleInput
            label="Xl Size"
            inputId="xl-size"
            value={xlSize}
            defaultValue={xlSizeDefaultValue}
            setValue={setXlSize}
          />
          <PlaygroundSimpleInput
            label="2xl Size"
            inputId="2xl-size"
            value={twoXlSize}
            defaultValue={twoXlSizeDefaultValue}
            setValue={setTwoXlSize}
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-secondary-1-dark">
          The code below is updated live with your values!
        </h2>
        <CodeBlock
          language="tsx"
          code={importCubeCode}
          tailwindPadding="p-8 pt-14"
        />
        <CodeBlock
          language="tsx"
          code={getCubeOutputCode({
            perspective,
            transitionDuration,
            transitionTimingFunction,
            baseSize,
            smSize,
            mdSize,
            lgSize,
            xlSize,
            twoXlSize,
          })}
        />
      </div>
    </>
  );
}

function PlaygroundSimpleInput({
  label,
  inputId,
  value,
  defaultValue,
  setValue,
}: {
  label: string;
  inputId: string;
  value: string;
  defaultValue: string;
  setValue: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <label className="text-xl hover:cursor-pointer" htmlFor={inputId}>
        {label}:
      </label>
      <div className="flex items-center gap-x-3">
        <input
          className="p-1 text-lg text-center bg-white"
          id={inputId}
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          title="reset"
          className="p-0 bg-transparent w-fit h-fit hover:scale-110"
          onClick={() => setValue(defaultValue)}
        >
          <FaArrowRotateLeft />
        </button>
      </div>
    </div>
  );
}

const faces = {
  front: demoFaceContentBuilder({
    imgURL: templeWaterImage,
    alt: "Temple and Water Image",
  }),
  right: demoFaceContentBuilder({
    imgURL: templeImage,
    alt: "Temple Image 1",
  }),
  back: demoFaceContentBuilder({
    imgURL: temple2Image,
    alt: "Temple Image 2",
  }),
  left: demoFaceContentBuilder({
    imgURL: elephantsImage,
    alt: "Elephants Image",
  }),
  top: demoFaceContentBuilder({
    imgURL: cookingImage,
    alt: "Cooking Image",
  }),
  bottom: demoFaceContentBuilder({
    imgURL: statueImage,
    alt: "Statue Image",
  }),
};

function demoFaceContentBuilder({
  imgURL,
  alt,
}: {
  imgURL: string;
  alt: string;
}) {
  return (
    <div className="w-full h-full">
      <img
        className="absolute object-cover w-full h-full"
        src={imgURL}
        alt={alt}
      />
    </div>
  );
}

function getCubeOutputCode({
  perspective,
  transitionDuration,
  transitionTimingFunction,
  baseSize,
  smSize,
  mdSize,
  lgSize,
  xlSize,
  twoXlSize,
}: {
  perspective: string;
  transitionDuration: string;
  transitionTimingFunction: string;
  baseSize: string;
  smSize: string;
  mdSize: string;
  lgSize: string;
  xlSize: string;
  twoXlSize: string;
}) {
  return `
  <Cube
  /* Remove 'sizes' prop and add prop 'useCSSVariableForCubeSize' if you use 
   the CSS variable method to set the size */
   sizes={{ 
   base: "${baseSize}",
   sm: "${smSize}",
   md: "${mdSize}",
   lg: "${lgSize}",
   xl: "${xlSize}",
   "2xl": "${twoXlSize}",
   }}
   perspective="${perspective}"
   transitionDuration="${transitionDuration}"
   transitionTimingFunction="${transitionTimingFunction}"
   // Adapt this prop to your code
   currentFace={currentFace}
   // this one too
   cubeFaces={cubeFaces}
   />`;
}

const importCubeCode = `import { Cube } from "cube-react-component";
// Or import the CSS in your CSS file if your bundler doesn't support importing CSS in the code file 
// (with a 'dist' additional path segment: "cube-react-component/dist/style.css" because the CSS import doesn't have mapping).
import "cube-react-component/style.css";`;

function LinksToDocumentation() {
  return (
    <div className="fixed z-10 flex flex-col right-3 bottom-3 gap-y-2">
      <a
        className="flex items-center justify-around p-3 font-bold text-white rounded gap-x-2 bg-secondary-1-dark hover:scale-105 hover:text-white"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/Jirei/cube-react-component"
      >
        Go To Github Repository
        <FaExternalLinkAlt />
      </a>
      <a
        className="flex items-center justify-around p-3 font-bold text-white rounded gap-x-2 bg-secondary-2-dark hover:scale-105 hover:text-white"
        rel="noreferrer"
        target="_blank"
        href="https://Jirei.github.io/cube-react-component"
      >
        Go To API Documentation
        <FaExternalLinkAlt />
      </a>
    </div>
  );
}
