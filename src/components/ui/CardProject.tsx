import React from "react";
import { useState } from "react";
import { ButtonLirePlus } from "./AllComponentsSections";

interface CardProjectProps {
  imageSrc: string;
  title: string;
  link: string;
  logo: string;
}

export const CardProject: React.FC<CardProjectProps> = ({
  imageSrc,
  title,
  link,
  logo,
}) => {
  return (
    <div className="card rounded-3xl shadow-xl bg-white">
      <figure className="p-4 rounded-2xl">
        <img
          src={imageSrc}
          alt={title}
          className="object-contain rounded-2xl border-2 border-violet-100"
        />
      </figure>

      <div className="card-body pt-0 justify-between">
        <div className="flex flex-row items-center">
          <img
            src={logo}
            alt={title}
            className="w-10 h-10 border-0 rounded-xl"
          />
          <h3 className="card-title text-xl font-semibold ml-2">{title}</h3>
        </div>

        <a className="card-actions justify-start">
          <ButtonLirePlus link={link} text="Jeter un coup d'oeil" />
        </a>
      </div>
    </div>
  );
};

export const CardProjectMobile: React.FC<CardProjectProps> = ({
  imageSrc,
  title,
  link,
  logo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCarte = () => setIsOpen(true);
  const closeCarte = () => setIsOpen(false);

  return (
    <section>
      <div className="card lg:card-side rounded-3xl shadow-xl bg-white">
        <figure className="p-4 rounded-2xl">
          <img
            src={imageSrc}
            alt={title}
            className="object-contain rounded-2xl border-2 border-violet-100"
          />
        </figure>

        <div className="card-body lg:pl-0 justify-between">
          <div className="flex flex-row items-center">
            <img
              src={logo}
              alt={title}
              className="w-10 h-10 border-0 rounded-xl"
            />
            <h3 className="card-title lg:text-xl text-sm  font-semibold ml-2">
              {title}
            </h3>
          </div>

          <a className="card-actions justify-start">
            <ButtonLirePlus
              link={link}
              text="Jeter un coup d'oeil"
              onClick={openCarte}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

//export default CardProject;
