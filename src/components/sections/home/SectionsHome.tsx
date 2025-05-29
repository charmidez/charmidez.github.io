import ImageMine from "../../ui/ImageMine";
import {
  Cardsimple,
  SectionDivMine,
  Titresection,
} from "../../ui/AllComponentsSections";

import {
  homePageDataActualite,
  homePageDataCodeVibe,
  homePageDataPresentation,
} from "./HomePageData";
import { Link } from "react-router-dom";

export function SectionPresentation() {
  return (
    <>
      <section className="py-8 px-4 md:px-6 lg:px-32 lg:py-16 flex flex-col lg:flex-row w-full justify-center gap-4 lg:gap-8 bg-[url('/assets/pattern/pattern.png')]">
        <div className="flex lg:flex-col flex-row gap-1 lg:gap-2 items-start">
          <a
            href="https://github.com/charmidez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <img
              src="/assets/icon/github.png"
              alt="github"
              className="h-10 w-10"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/charmidez-k-h-assiobo-95677a1b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <img
              src="/assets/icon/linkedin.png"
              alt="linkedIn"
              className="h-10 w-10"
            />
          </a>
        </div>

        <div className="flex items-center justify-center flex-1">
          <ImageMine
            src="/assets/images/PhotoMoi.webp"
            alt="Lights"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col mt-2 md:ml-4 lg:ml-8 gap-2 lg:gap-4 justify-center content-center items-center lg:items-start flex-1">
          <div className="text-center lg:text-left flex flex-col gap-2">
            <p className="font-semibold lg:text-2xl text-violet-500">{homePageDataPresentation.salutation}</p>
            <h1 className="lg:text-6xl text-4xl font-black text-violet-950">
              {homePageDataPresentation.title}
            </h1>
            <h3 className="lg:text-3xl text-2xl font-bold text-violet-800">
              {homePageDataPresentation.subtitle}
            </h3>
          </div>
          <div className="flex flex-row lg:flex-row lg:justify-start gap-2 lg:gap-4 justify-center items-center w-full">
            <a
              href="/assets/documents/cv_charmidez.pdf"
              download="cv_charmidez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" w-fit bg-white hover:bg-violet-600 hover:text-white text-violet-600 text-sm lg:text-lg border-2 font-semibold py-2 px-4 rounded-2xl hover:rounded-2xl hover:border-2 hover:border-violet-600 transition duration-300 ease-in-out"
            >
              Télecharger mon CV
            </a>
            <Link
              to="/about"
              className=" w-fit   bg-violet-600 text-white font-semibold py-2 text-sm lg:text-lg px-4 rounded-2xl border-2 border-violet-600"
            >
              A Propos de moi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function SectionActualite() {

  return (
    <SectionDivMine className="px-4 lg:px-32">
      <Titresection
        titre={homePageDataActualite.title}
        className="justify-center"
      />
      <div className="">
        {homePageDataActualite.articles && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4">
            {homePageDataActualite.articles.map((article, index) => (
              
              <Cardsimple
                key={index}
                titreCard={article.titre}
                resume={article.resume}
                imgSrc={article.image}
                date={article.date}
                component={article.component}
                button="Lire plus"
                link={`/actualite/${article.slug}`}
              />
            ))}
          </div>
        )}
      </div>

    </SectionDivMine>
  );
}

export function SectionCodeVibe() {
  return (
    <SectionDivMine className="bg-violet-50 px-4 lg:px-32">
      <Titresection
        titre={homePageDataCodeVibe.title}
        className="justify-center"
      />
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-4">
        <img
          src="/assets/images/vibecoding.webp"
          className="rounded-3xl w-40 h-fit lg:w-80 lg:h-fit"
        />
        <div className="flex flex-col gap-2 lg:gap-4">
          <p className="text-xl rounded-3xl lg:p-8 p-4 shadow-xl bg-white">
            <span className="font-bold">Vibe codeur </span>c’est pas une méthode
            de travail. C’est un état d’esprit, une esthétique, un moment où le
            code devient une danse entre logique et émotion <span className="text-violet-600 font-bold">- Je ne suis pas un vibe codeur pourtant !</span>
          </p>
          <p>
            Le vibecoding, c’est plus qu’une session de code. C’est un état
            d’alignement parfait entre le cerveau, les doigts et l’âme du dev.
            Tu n’écris pas du code, tu ressens ton code. Tu ne règles pas des
            bugs, tu explores un univers logique comme un architecte spatial.
            C’est le moment où le temps s'efface, où chaque git commit est une
            victoire silencieuse, où le terminal devient ton compagnon, la
            musique ta muse, et le clavier ton instrument.
          </p>
          <p>
            Imagine une pièce tamisée. Un écran ultra-wide baigne la pièce d’une
            lumière douce en mode dark theme. Le casque est sur les oreilles —
            playlist chill synth, lo-fi ou ambient techno. Il ou elle est en
            hoodie, posture concentrée, parfois penché en avant, yeux plissés.
            Sur l’écran, un split : d’un côté le code, de l’autre un navigateur
            avec la doc ou une prévisualisation en live. Chaque Ctrl + S est une
            pulsation. Chaque fonction est pensée comme une strophe de poésie.
            Le monde extérieur n’existe plus. Le vibecodeur est dans sa bulle,
            dans son flow. Il ne parle pas. Il clique peu. Il glisse. Il code.
          </p>
        </div>
      </div>
    </SectionDivMine>
  );
}
