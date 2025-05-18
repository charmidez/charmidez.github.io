import { SectionDivMine, Titresection } from "../../ui/AllComponentsSections";
import CardProject from "../../ui/CardProject";
import { projectsMineWeb } from "./ProjectsPageData";

export function ProjectWeb() {
  return (
    <div>
      <Titresection titre="Quelques projets web" />
      <SectionDivMine className="px-4 lg:px-32">
        <p className="text-lg text-gray-700">
          Voici quelques projets sur lesquels j'ai eu à travailler.
        </p>

        {projectsMineWeb.client && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 ">
            {projectsMineWeb.client.map((client, index) => (
              <CardProject
                key={index}
                logo={client.logoSrc}
                imageSrc={client.imgSrc}
                link={client.lien}
                title={client.societe}
              />
            ))}
          </div>
        )}
      </SectionDivMine>
    </div>
  );
}

/*

    <section
      className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-32 scroll-mt-16"
    >


        {projectsMineWeb.client && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 ">
            {projectsMineWeb.client.map((client, index) => (
              <CardProject 
                key={index}
                logo={client.logoSrc}
                imageSrc={client.imgSrc}
                link={client.lien}
                title={client.societe}
              />
            ))}
          </div>
        ) }
    </section>

*/
