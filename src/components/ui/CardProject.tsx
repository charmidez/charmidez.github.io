import React, { useState } from "react";
//import { useState } from "react";
import { ButtonLirePlus } from "./AllComponentsSections";
import { Opencarte } from "./OpenCard";

interface CardProjectProps {
  imageSrc: string;
  title: string;
  descText? : string
  link?: string;
  logo: string;
  component?: React.ReactNode;
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
  descText,
  logo,
  component,
}) => {

  const [show, setShow] = useState(false);
  const openCarte = () => setShow(true);

  return (
    <section>
      <div className="card card-side rounded-3xl shadow-xl bg-white flex">
        <figure className="p-4 rounded-2xl lg:flex-1">
          <img
            src={imageSrc}
            alt={title}
            className="h-50 object-cover rounded-2xl border-2 border-violet-100"
          />
        </figure>

        <div className="card-body pl-0 justify-between lg:flex-1">
          <div className="flex flex-col">
            <img
              src={logo}
              alt={title}
              className="w-10 h-10 border-0 rounded-xl"
            />
            <h3 className="card-title lg:text-xl text-sm  font-semibold">
              {title}
            </h3>
            <p>{descText}</p>
          </div>

          <a className="card-actions justify-start">
            <ButtonLirePlus
              text="Voir"
              onClick={openCarte}
            />
          </a>
        </div>
      </div>

      {
        setShow && (<Opencarte titre={title} component={component} isVisible={show} onClick={() => setShow(false)} />)
      }

    </section>
  );
};



//export default CardProject;
