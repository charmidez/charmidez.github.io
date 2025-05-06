import React, { useEffect, useState } from "react";

interface ImageMineProps {
  src: string;
  alt?: string;
    className?: string;
}

const ImageMine: React.FC<ImageMineProps> = ({ src, alt, className }) => {
  const [borderRadius, setBorderRadius] = useState({
    topLeft: "5px",
    topRight: "5px",
    bottomLeft: "5px",
    bottomRight: "5px",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomizeRadius = () => (Math.random() > 0.5 ? "200px" : "100px");

      setBorderRadius({
        topLeft: randomizeRadius(),
        topRight: randomizeRadius(),
        bottomLeft: randomizeRadius(),
        bottomRight: randomizeRadius(),
      });
    }, 1000); // Change every 100 milliseconds (1/10th of a second)

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="overflow-hidden"
      style={{
        borderTopLeftRadius: borderRadius.topLeft,
        borderTopRightRadius: borderRadius.topRight,
        borderBottomLeftRadius: borderRadius.bottomLeft,
        borderBottomRightRadius: borderRadius.bottomRight,
        transition: "border-radius 0.9s ease",
      }}
    >
      <img src={src} alt={alt || "Image"} className={`object-cover ${className}`} />
    </div>
  );
};

export default ImageMine;