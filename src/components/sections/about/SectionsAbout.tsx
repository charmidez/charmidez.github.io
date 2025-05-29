import { Link } from "react-router-dom";
import ImageGallery from "../../ui/ImageGallerie";
import ImageGallerySkills from "../../ui/ImageGallerieskils";

import SectionParcoursCard from "../../ui/ParcoursCard";

import {
  imagesAPI,
  imagesAutresCompetences,
  imagesSoftSkills,
  imagesUiUX,
  tabs,
  data,
} from "./AboutPageData";

import { Titresection } from "../../ui/AllComponentsSections";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
//import { motion, AnimatePresence } from "framer-motion";

{
  /*A propos de moi*/
}
export function SectionAbout() {
  return (
    <div>
      <Titresection titre="A propos de moi" />
      <section className="w-full flex flex-col lg:flex-row lg:gap-8 gap-4">
        {/* Colonne de gauche */}
        <div className="items-center justify-center flex">
          <img
            src="/assets/images/profil.webp"
            alt="image"
            className="lg:h-full lg:w-md h-80 rounded-3xl"
          />
        </div>

        {/* Colonne droite (plus grande) */}
        <div className="rounded-lg w-full flex flex-col lg:gap-4 gap-2 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex lg:flex-row">
              <ImageGallerySkills imagesSrc={imagesSoftSkills} />
            </div>

            <div className="flex flex-col gap-4 text-sm lg:text-lg text-gray-700 leading-relaxed">
              <p className="">
                <span className="text-violet-700">
                  Développeur Web & Mobile full-stack basé à Lomé, Togo,
                </span>{" "}
                je m’appelle Charmidez K.H. Assiobo. Curieux, créatif et
                passionné par les technologies émergentes, je développe des
                solutions numériques performantes et évolutives, qu’il s’agisse
                de modules légers ou d’applications complexes, en m’appuyant sur
                des langages comme Python, Kotlin ou TypeScript, ainsi que sur
                leurs frameworks, bibliothèques et stacks respectifs.
              </p>
              <p>
                Mon approche rigoureuse du code, mon goût pour l’optimisation et
                l’expérience utilisateur, ainsi que ma capacité à collaborer
                efficacement en équipe me permettent de mener des projets
                ambitieux, y compris des missions confidentielles à haute valeur
                ajoutée.
              </p>
              <p>
                Fort de plus de cinq ans d’expérience, je mets un point
                d’honneur à développer des produits robustes et adaptés aux
                besoins réels, en m’appuyant sur une organisation méthodique,
                une grande capacité d’adaptation et un esprit résolument ouvert.
                Que ce soit pour concevoir des interfaces élégantes, optimiser
                des systèmes backend ou accompagner d'autres développeurs, je
                m’investis pleinement avec dynamisme et humilité.
              </p>
              <p>
                En dehors du développement, je consacre mon temps à la lecture,
                à l'exploration d'idées innovantes et au mentorat, convaincu que
                le partage et l’apprentissage continu sont au cœur du progrès
                technologique.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="btn w-fit p-8 bg-violet-600 text-white lg:text-lg text-sm font-normal rounded-xl shadow-xl"
          >
            Contactez moi
          </Link>
        </div>
      </section>
    </div>
  );
}

{
  /*Mes compétences*/
}
export function SectionCompetences() {
  return (
    <div>
      <Titresection titre="Mes compétences" />
      <section className="flex flex-col lg:flex-row gap-2 lg:gap-8 w-full">
        {/*Front End */}
        <div className="flex-1 flex-col gap-2 lg:gap-4 rounded-3xl p-2 border-2 border-violet-100">
          {/*Technical skill*/}
          <h2 className="p-4  bg-violet-100 text-violet-600 rounded-2xl text-center w-full ">
            Front End - UI/UX
          </h2>
          <ImageGallery imagesSrc={imagesUiUX} />
        </div>

        {/*Back End*/}
        <div className="flex-1 flex-col gap-2 lg:gap-4 rounded-3xl p-2 border-2 border-violet-100">
          {/*Technical skill*/}
          <h2 className="p-4  bg-violet-100 text-violet-600 rounded-2xl text-center w-full ">
            Back End - API - CI/CD
          </h2>
          <ImageGallery imagesSrc={imagesAPI} />
        </div>

        <div className="flex-1 flex-col gap-2 lg:gap-4 rounded-3xl p-2 border-2 border-violet-100">
          {/*Autres compétences*/}
          <h2 className="p-4  bg-violet-100 text-violet-600 rounded-2xl text-center w-full ">
            Autres compétences
          </h2>
          <ImageGallery imagesSrc={imagesAutresCompetences} />
        </div>
      </section>
    </div>
  );
}

{
  /*Mon parcours*/
}
export function SectionParcours() {
  const [activeTab, setActiveTab] = useState<TabKey>("formations");
  type TabKey = "experiences" | "formations" | "parcours";
  //const current = experiences[activeTab];
  return (
    <div className="flex flex-col">
      <Titresection titre="Mon parcours" />
      <section className="flex flex-col gap-2 lg:gap-4 w-full">
        <div className="flex flex-row gap-2 lg:gap-4 justify-center items-center w-full">
          {tabs.map((tab) => (
            <h2
              key={tab.key}
              className={` btn rounded-2xl p-2 lg:p-8 transition ${
                activeTab === tab.key
                  ? "bg-violet-600 text-white"
                  : "bg-violet-200 text-violet-600"
              } `}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </h2>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3 w-full">
          <AnimatePresence mode="wait">
            {data[activeTab]?.map((item, index) => (
              <SectionParcoursCard
                index={index}
                activeTab={activeTab}
                titre={item.title}
                description={item.description}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
