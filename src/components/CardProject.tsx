import React from 'react';
import { useState } from 'react';


interface CardProjectProps {
    imageSrc: string;
    title: string;
    description: string;
    link : string;
    logo : string;
}

const CardProject: React.FC<CardProjectProps> = ({ imageSrc, title, description, link, logo }) => {
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
                <div className='flex items-center mb-2'>
                    <img src={logo} alt={title} className="w-10 h-10 border-0"/>
                    <h3 className="text-xl font-semibold ml-2">{title}</h3>
                </div>
                
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: description }}></p>
                <a href={link} className="mt-4 text-blue-500 hover:underline justify-between mt-auto">
                    <button className='btn bg-violet-500 text-white hover:bg-violet-800 w-full'>have a look at it</button>
                </a>
            </div>
        </div>
    );
};

export default CardProject;