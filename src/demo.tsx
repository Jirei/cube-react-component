import { Cube, CubeFace } from "./cube";
import { useState } from "react";
import templeWaterImage from "./assets/compressed_cube_images/temple-water.jpg";
import templeImage from "./assets/compressed_cube_images/temple.jpg";
import temple2Image from "./assets/compressed_cube_images/temple-2.jpg";
import elephantsImage from "./assets/compressed_cube_images/elephants.jpg";
import cookingImage from "./assets/compressed_cube_images/cooking.jpg";
import statueImage from "./assets/compressed_cube_images/statue.jpg";

export default function Demo() {
  const [currentFace, setCurrentFace] = useState<CubeFace>("front");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentFace(e.target.value as CubeFace);
  return (
    <div className="flex items-center font-['Roboto'] justify-center mt-10 text-secondary-1-very-dark">
      <div className="flex flex-col items-center gap-y-16 gap-x-32">
        <h1 className="p-1 text-3xl font-bold text-center">
          Cube React Component Demo
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
          currentFace={currentFace}
          cubeFaces={cubeFaces}
        />
        <div className="flex flex-col items-center gap-y-5 text-xl font-bold font-['Roboto']">
          <h2 className="mt-8">
            Current Face:{" "}
            <span className="capitalize text-secondary-2-dark">
              {currentFace}
            </span>
          </h2>

          <form className="">
            <ul className="flex flex-col gap-y-1">
              <li className="flex gap-x-3">
                <label htmlFor="front">Front</label>
                <input
                  onChange={handleRadioChange}
                  id="front"
                  type="radio"
                  name="rotate-cube-side"
                  value="front"
                  checked={currentFace === "front"}
                />
              </li>
              <li className="flex gap-x-3">
                <label htmlFor="right">Right</label>
                <input
                  onChange={handleRadioChange}
                  id="right"
                  type="radio"
                  name="rotate-cube-side"
                  value="right"
                  checked={currentFace === "right"}
                />
              </li>
              <li className="flex gap-x-3">
                <label htmlFor="back">Back</label>
                <input
                  onChange={handleRadioChange}
                  id="back"
                  type="radio"
                  name="rotate-cube-side"
                  value="back"
                  checked={currentFace === "back"}
                />
              </li>
              <li className="flex gap-x-3">
                <label htmlFor="left">Left</label>
                <input
                  onChange={handleRadioChange}
                  id="left"
                  type="radio"
                  name="rotate-cube-side"
                  value="left"
                  checked={currentFace === "left"}
                />
              </li>
              <li className="flex gap-x-3">
                <label htmlFor="top">Top</label>
                <input
                  onChange={handleRadioChange}
                  id="top"
                  type="radio"
                  name="rotate-cube-side"
                  value="top"
                  checked={currentFace === "top"}
                />
              </li>
              <li className="flex gap-x-3">
                <label htmlFor="bottom">Bottom</label>
                <input
                  onChange={handleRadioChange}
                  id="bottom"
                  type="radio"
                  name="rotate-cube-side"
                  value="bottom"
                  checked={currentFace === "bottom"}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

const cubeFaces = {
  front: (
    <div className="w-full h-full">
      <img
        className="absolute object-cover w-full h-full"
        src={templeWaterImage}
        alt="Temple and Water Image"
      />
    </div>
  ),
  right: (
    <div className="w-full h-full">
      <img
        className="absolute object-cover w-full h-full"
        src={templeImage}
        alt="Temple Image 1"
      />
    </div>
  ),
  back: (
    <div className="w-full h-full">
      <img
        className="absolute object-cover w-full h-full"
        src={temple2Image}
        alt="Temple Image 2"
      />
    </div>
  ),
  left: (
    <div className="w-full h-full">
      <img
        className="absolute object-cover w-full h-full"
        src={elephantsImage}
        alt="Elephants Image"
      />
    </div>
  ),
  top: (
    <div className="w-full h-full">
      <img
        className="absolute object-cover w-full h-full"
        src={cookingImage}
        alt="Cooking Image"
      />
    </div>
  ),
  bottom: (
    <div className="w-full h-full">
      <img
        className="absolute object-cover w-full h-full"
        src={statueImage}
        alt="Statue Image"
      />
    </div>
  ),
};
