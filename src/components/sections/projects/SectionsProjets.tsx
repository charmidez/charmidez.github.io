import { Titresection } from "../../ui/AllComponentsSections";
import { CardProjectMobile, CardProject } from "../../ui/CardProject";
import { projectsMineWeb, projectsMineMobile } from "./ProjectsPageData";

export function ProjectWeb() {
  return (
    <section>
      <Titresection titre="Quelques projets web" />

      {projectsMineWeb.client && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
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
    </section>
  );
}

export function ProjectMobile() {
  return (
    <section>
      <Titresection titre="Quelques projets Mobile" />

      {projectsMineMobile.client && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4">
          {projectsMineMobile.client.map((client, index) => (
            <CardProjectMobile
              key={index}
              logo={client.logoSrc}
              imageSrc={client.imgSrc}
              title={client.societe}
              descText={client.description}
              component={client.component} />
          ))}
        </div>
      )}
    </section>
  );
}
