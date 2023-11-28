import { Cube, CubeFace, facesNames } from "./components/cube";
import { useState } from "react";
import templeWaterImage from "./assets/compressed_cube_images/temple-water.jpg";
import templeImage from "./assets/compressed_cube_images/temple.jpg";
import temple2Image from "./assets/compressed_cube_images/temple-2.jpg";
import elephantsImage from "./assets/compressed_cube_images/elephants.jpg";
import cookingImage from "./assets/compressed_cube_images/cooking.jpg";
import statueImage from "./assets/compressed_cube_images/statue.jpg";
import CodeBlock from "./components/code-block";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Demo() {
  const [currentFace, setCurrentFace] = useState<CubeFace>("front");
  const [transitionDuration, setTransitionDuration] = useState<string>("1s");
  const [perspective, setPerspective] = useState<string>("none");
  const [transitionTimingFunction, setTransitionTimingFunction] =
    useState<string>("cubic-bezier(0.4, 0, 0.2, 1)");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentFace(e.target.value as CubeFace);

  return (
    <>
      <LinksToDocumentation />
      <div className="flex flex-col items-center  font-['Roboto'] gap-y-16 gap-x-32 mt-10 mb-32 text-secondary-1-very-dark">
        {/* Page Title */}
        <h1 className="p-1 text-3xl font-bold text-center">
          Cube React Component
        </h1>
        <Cube
          breakpointsToSizes={{
            base: "50vw",
            sm: "40vw",
            md: "35vw",
            lg: "30vw",
            xl: "25vw",
            "2xl": "20vw",
          }}
          perspective={perspective}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          currentFace={currentFace}
          cubeFaces={cubeFaces}
        />
        {/* Call to read documentation */}
        {/* <div className="flex flex-col items-center text-base opacity-0 gap-y-1">
          <p className="text-lg font-light">
            Refer to the documentation for more details
          </p>
          <a className="font-bold hover:cursor-pointer hover:underline">
            Documentation
          </a>
        </div> */}
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
            setValue={setTransitionDuration}
          />
          <PlaygroundSimpleInput
            label="Transition Timing Function"
            inputId="transition-timing-function"
            value={transitionTimingFunction}
            setValue={setTransitionTimingFunction}
          />
          <PlaygroundSimpleInput
            label="Perspective"
            inputId="perspective"
            setValue={setPerspective}
            value={perspective}
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
  setValue,
}: {
  label: string;
  inputId: string;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <label className="text-xl hover:cursor-pointer" htmlFor={inputId}>
        {label}:
      </label>
      <input
        className="p-1 text-lg text-center bg-white"
        id={inputId}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

const cubeFaces = {
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
}: {
  perspective: string;
  transitionDuration: string;
  transitionTimingFunction: string;
}) {
  return `
  <Cube
  /* Remove breakpointsToSizes prop if you use 
   the CSS variable method to set the size */
   breakpointsToSizes={{ 
   base: "50vw",
   sm: "40vw",
   md: "35vw",
   lg: "30vw",
   xl: "25vw",
   "2xl": "20vw",
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

const importCubeCode = "import { Cube } from 'cube-react-component';";

function LinksToDocumentation() {
  return (
    <div className="fixed z-10 flex flex-col right-3 bottom-3 gap-y-2">
      <a
        className="flex items-center justify-around p-3 font-bold text-white rounded gap-x-2 bg-secondary-1-dark hover:scale-105 hover:text-white"
        rel="noreferrer"
        target="_blank"
        href="https://www.example.com"
      >
        Link To Github Repository
        <FaExternalLinkAlt />
      </a>
      <a
        className="flex items-center justify-around p-3 font-bold text-white rounded gap-x-2 bg-secondary-2-dark hover:scale-105 hover:text-white"
        rel="noreferrer"
        target="_blank"
        href="https://www.example.com"
      >
        Link To Documentation
        <FaExternalLinkAlt />
      </a>
    </div>
  );
}
