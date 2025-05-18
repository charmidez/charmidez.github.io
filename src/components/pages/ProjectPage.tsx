//import { projectsMineWeb } from "../sections/projects/ProjectsPageData";
//import CardProject from "../ui/CardProject";

import { ProjectWeb } from "../sections/projects/SectionsProjets";


function ProjectsPage() {
  return (
    <>
    <section className="flex flex-col dark:bg-gray-900 bg-violet-100">
      <div className="pt-20 lg:pt-26">
        <ProjectWeb/>
      </div>

    </section>
    </>
  );
}


export default ProjectsPage;
