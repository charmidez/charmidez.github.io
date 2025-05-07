import React from "react";

interface ImageItemMine {
  name: string;
  path: string;
}

type ImageGalleryProps = {
  imagesSrc: ImageItemMine[];
};

const ImageGallerySkills: React.FC<ImageGalleryProps> = ({ imagesSrc }) => {
  const imagesCount = imagesSrc.length;

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-4 lg:gap-8">
      {imagesSrc.slice(0, imagesCount).map((img, index) => (
        <div
          key={index}
          className="w-full bg-white aspect-square overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center p-4"
        >
          <img
            src={img.path}
            alt={`Gallery image ${index + 1}`}
            className="w-15 h-15 lg:w-30 lg:h-30 mb-2"
          />
          <p className="text-center font-light text-sm lg:font-semibold lg:text-lg">{img.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallerySkills;
