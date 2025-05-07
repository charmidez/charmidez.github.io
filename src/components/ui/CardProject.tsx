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
        <div className="card lg:card-side rounded-lg shadow-sm border-2 border-violet-600">
            {/* Left side: Image */}
            <figure className="flex-1 p-4 lg:pr-0">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-contain transition-transform duration-300 rounded-xs border-2 border-gray-300 hover:scale-105"
                    onClick={handleImageClick}
                    
                />
            </figure>
            {/* Right side: Title and Description */}
            <div className="card-body flex-1 p-4 flex flex-col justify-start">
                <div className='flex items-center mb-2'>
                    <img src={logo} alt={title} className="w-10 h-10 border-0"/>
                    <h3 className="card-title text-xl font-semibold ml-2">{title}</h3>
                </div>
                
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: description }}></p>
                <a href={link} className="card-actions text-blue-500 justify-between mt-auto">
                    <button className='btn bg-violet-500 text-white hover:bg-violet-800 w-full'>have a look at it</button>
                </a>
            </div>
        </div>
    );
};

export default CardProject;