import React from 'react';
import { useState } from 'react';


interface CardProjectProps {
    imageSrc: string;
    title: string;
    description: string;
}

const CardProject: React.FC<CardProjectProps> = ({ imageSrc, title, description }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = () => {
        setIsZoomed(!isZoomed); 
    };

    return (
        <div className="flex border border-gray-300 rounded-lg overflow-hidden max-w-3xl">
            {/* Left side: Image */}
            <div className="flex-1">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                    onClick={handleImageClick}
                    style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }} // Added inline styles for transition
                />
            </div>
            {/* Right side: Title and Description */}
            <div className="flex-1 p-4 flex flex-col justify-start">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default CardProject;