import React from "react";
import { ButtonLirePlus } from "./AllComponentsSections";

interface CardProjectProps {
  imageSrc: string;
  title: string;
  link: string;
  logo: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  imageSrc,
  title,
  link,
  logo,
}) => {
  return (
    <div className="card rounded-3xl shadow-xl bg-white">

      {/* Left side: Image */}
      <figure className="p-4 rounded-2xl">
        <img
          src={imageSrc}
          alt={title}
          className="object-contain rounded-2xl"
        />
      </figure>

      {/* Right side: Title and Description */}
      <div className="card-body flex-1 p-4 flex flex-col justify-between">
        <div className="flex items-center mb-2">
          <img src={logo} alt={title} className="w-10 h-10 border-0 rounded-xl" />
          <h3 className="card-title text-xl font-semibold ml-2">{title}</h3>
        </div>

        <a
          className="card-actions justify-start"
        >
          <ButtonLirePlus link={link} text="Jeter un coup d'oeil" />
        </a>
      </div>
    </div>
  );
};

export default CardProject;



/*

<>
      <div className="card shadow-sm bg-violet-100 lg:card-side lg:card-md card-sm rounded-3xl">
        <figure>
          <img
            src={imgSrc}
            alt={titreCard}
            className="w-full h-40 lg:w-40 lg:h-full object-cover lg:rounded-none"
          />
        </figure>

        <div className="card-body flex-1 p-4 flex flex-col justify-start">
          <h2 className="card-title">{titreCard}</h2>
          <p className="text-gray-600">{resume}</p>
          <p>{date}</p>
          <a className="card-actions justify-start">
            <ButtonLirePlus link="#" text="Voir plus" />
          </a>
        </div>
      </div>
    </>


*/