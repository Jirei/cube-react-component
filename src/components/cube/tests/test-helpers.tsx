import templeWaterImage from "../../../assets/compressed_cube_images/temple-water.jpg";
import templeImage from "../../../assets/compressed_cube_images/temple.jpg";
import temple2Image from "../../../assets/compressed_cube_images/temple-2.jpg";
import elephantsImage from "../../../assets/compressed_cube_images/elephants.jpg";
import cookingImage from "../../../assets/compressed_cube_images/cooking.jpg";
import statueImage from "../../../assets/compressed_cube_images/statue.jpg";

export const cubeFaces = {
  front: testFaceContentBuilder({
    imgURL: templeWaterImage,
    alt: "Temple and Water Image",
  }),
  right: testFaceContentBuilder({
    imgURL: templeImage,
    alt: "Temple Image 1",
  }),
  back: testFaceContentBuilder({
    imgURL: temple2Image,
    alt: "Temple Image 2",
  }),
  left: testFaceContentBuilder({
    imgURL: elephantsImage,
    alt: "Elephants Image",
  }),
  top: testFaceContentBuilder({
    imgURL: cookingImage,
    alt: "Cooking Image",
  }),
  bottom: testFaceContentBuilder({
    imgURL: statueImage,
    alt: "Statue Image",
  }),
};

function testFaceContentBuilder({
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
