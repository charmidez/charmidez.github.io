
import React, { useState } from "react";

interface MineImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  objectFit?: "cover" | "contain";
  rounded?: boolean;
  fallbackSrc?: string;
}

const MineImage: React.FC<MineImageProps> = ({
  src,
  alt,
  width = "100%",
  height = "auto",
  className = "",
  objectFit = "cover",
  rounded = false,
  fallbackSrc = "/assets/logo.png",
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      style={{
        width,
        height,
        objectFit,
      }}
      onError={() => setImgSrc(fallbackSrc)}
      className={`${className} ${rounded ? "rounded-mine-rounded" : ""}`}
    />
  );
};

export default MineImage;
