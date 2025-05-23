//import { projectsMineWeb } from "../sections/projects/ProjectsPageData";
//import CardProject from "../ui/CardProject";

import { ProjectMobile, ProjectWeb } from "../sections/projects/SectionsProjets";


function ProjectsPage() {
  return (
    <>
    <section className="flex flex-col dark:bg-gray-900">
      <div className="pt-20 lg:pt-26 lg:pb-16 pb-8 px-4 lg:px-32 bg-violet-100">
        <ProjectWeb/>
      </div>

      <div className="bg-white lg:py-16 py-8 px-4 lg:px-32">
        <ProjectMobile />
      </div>

    </section>
    </>
  );
}


export default ProjectsPage;
