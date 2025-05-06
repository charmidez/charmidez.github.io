import ImageMine from "../objects/ImageMine";

import { homePageData } from "../sections/dataContents/HomePageData";

export function SectionPresentationHOME() {
  return (
    <>
      <section className="py-8 px-4 mt-16 md:px-6 lg:px-32 flex flex-col lg:flex-row w-full justify-center bg-[url('/assets/pattern.png')] gap-4 lg:gap-8">
        <div className="flex lg:flex-col flex-row gap-1 lg:gap-2 items-start">
          <a
            href="https://github.com/charmidez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <img src="/assets/github.png" alt="github" className="h-10 w-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/charmidez-k-h-assiobo-95677a1b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <img
              src="/assets/linkedin.png"
              alt="linkedIn"
              className="h-10 w-10"
            />
          </a>
        </div>

        <div className="flex items-center justify-center">
          <ImageMine
            src="/assets/PhotoMoi.png"
            alt="Lights"
            className="rounded-lg w-80 h-80"
          />
        </div>

        <div className="flex flex-col mt-2 md:ml-4 lg:ml-8 gap-2 lg:gap-4 justify-center content-center items-center">
          <div className="text-center lg:text-left flex flex-col gap-2">
            <p>{homePageData.salutation}</p>
            <h1 className="lg:text-6xl text-4xl font-black text-violet-950">
              {homePageData.title}
            </h1>
            <h3 className="lg:text-3xl text-2xl font-bold text-violet-800">
              {homePageData.subtitle}
            </h3>
          </div>
          <div className="flex flex-row lg:flex-row lg:justify-start gap-2 lg:gap-4 justify-center">
            <a
              href=""
              className="bg-white hover:bg-violet-600 hover:text-white text-violet-600  border-2 font-semibold py-2 px-4 rounded hover:rounded hover:border-2 hover:border-violet-600 transition duration-300 ease-in-out"
            >
              Télecharger mon CV
            </a>
            <a
              href=""
              className="bg-violet-600 text-white font-semibold py-2 px-4 rounded"
            >
              A Propos de moi
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
