import { Link } from "react-router-dom";
import ImageGallery from "../ui/ImageGallerie";
import ImageGallerySkills from "../ui/ImageGallerieskils";

import {
  imagesSoftSkills,
  imagesTechnicalSkills,
} from "../sections/dataContents/AboutPageData";

{
  /*A propos de moi*/
}
export function SectionAbout() {
  return (
    <div className="">
      <h2 className="text-4xl font-extrabold text-violet-800 dark:text-white text-center mb-4">
        A propos de moi
      </h2>
      <section className="w-full flex flex-col lg:flex-row lg:gap-8 gap-4">
        {/* Colonne de gauche */}
        <div className="items-center justify-center flex">
          <img
            src="/assets/profil.webp"
            alt="image"
            className="lg:h-full lg:w-md h-80 rounded-2xl"
          />
        </div>

        {/* Colonne droite (plus grande) */}
        <div className="rounded-lg w-full flex flex-col lg:gap-4 gap-2 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex lg:flex-row">
              <ImageGallerySkills imagesSrc={imagesSoftSkills} />
            </div>

            <div className="flex flex-col gap-4 text-sm lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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
            className="btn w-fit p-8 bg-violet-600 text-white lg:text-lg text-sm font-light rounded-xl shadow-xl"
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
      <h2 className="text-4xl font-extrabold text-violet-800 dark:text-white text-center mb-4">
        Mes compétences
      </h2>

      <section className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full">
        <div>
          {/*Technical skill*/}
          <h2 className="p-4  bg-violet-100 text-violet-600 rounded-2xl my-4 text-center w-full ">
            Développement Web et Mobile
          </h2>
          <ImageGallery imagesSrc={imagesTechnicalSkills} />
        </div>

        <div>
          {/*Technical skill*/}
          <h2 className="p-4  bg-violet-100 text-violet-600 rounded-2xl my-4 text-center w-full ">
            Autres compétences complémentaires
          </h2>
          <ImageGallery imagesSrc={imagesTechnicalSkills} />
        </div>

        <div>
          {/*Technical skill*/}
          <h2 className="p-4  bg-violet-100 text-violet-600 rounded-2xl my-4 text-center w-full ">
            Autres compétences complémentaires
          </h2>
          <ImageGallery imagesSrc={imagesTechnicalSkills} />
        </div>
      </section>
    </div>
  );
}
