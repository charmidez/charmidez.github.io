//import { MouseEventHandler, useEffect } from "react";

import { useParams, useNavigate, Link } from "react-router-dom";

import { homePageDataActualite } from "./HomePageData";
import { useEffect } from "react";

export default function ActualiteSousPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = homePageDataActualite.articles.find((a) => a.slug === slug);
  useEffect(() => {
    if (!article) {
      navigate("/404");
    }
  }, [article, navigate]);

  if (!article) return null;

  return (
    <section className="flex flex-col gap-4 items-start justify-center lg:pb-16 pb-8 px-4 lg:px-32 pt-20 lg:pt-26 bg-white">
      <div className="flex flex-row justify-start items-center lg:gap-4">
        <Link to="/">
          <img
            src="/assets/icon/left-circle.svg"
            alt="close"
            className="h-10 w-10"
          />
        </Link>

        <p className="text-violet-600 font-semibold lg:text-lg text-sm">
          {article.date}
        </p>
      </div>
      <h2 className="text-xl font-bold mb-2 lg:p-8 p-4 bg-violet-100 rounded-3xl">
        {article.titre}
      </h2>
      <div className="flex lg:flex-row md:flex-row flex-col gap-4 lg:gap-8">
        <div className="basis-[20%] border-2 border-violet-100 rounded-4xl p-4 flex flex-col gap-4 lg:gap-8">
          <img
            src={article.image}
            alt={article.titre}
            className="rounded-3xl lg:w-full w-40 self-center" 
          />
          <p className="text-violet-400 text-sm lg:text-lg font-light">
            {article.resume}
          </p>
          <p className="text-white font-semibold p-4 bg-violet-600 rounded-2xl">
            {article.auteur}
          </p>
        </div>
        <div className="mb-4 text-gray-700 basis-[80%]">
          {article.component}
        </div>
      </div>
    </section>
  );
}
