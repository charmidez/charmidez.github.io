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
    <div className="flex flex-row gap-2">
      {/* grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-4 lg:gap-8 */}
      {imagesSrc.slice(0, imagesCount).map((img, index) => (
        <div
          key={index}
          className="w-full bg-white aspect-square rounded-3xl overflow-hidden shadow-xs flex flex-col items-center justify-center p-4"
        >
          <img
            src={img.path}
            alt={`Gallery image ${index + 1}`}
            className="w-10 h-10 lg:w-12 lg:h-12"
          />
          <p className="text-center lg:text-lg text-sm">{img.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallerySkills;
