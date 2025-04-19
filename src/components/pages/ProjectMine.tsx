import CardProject from "../objects/CardProject";
import SectionMine from "../objects/SectionMine";

const esagdescription =
  "<ul><li><strong>Website creation</strong></li><li><strong>Implementation of registration forms</strong></li><li><strong>Staff training for site management</strong></li></ul><p><em>WordPress – ReactJS – BootstrapCSS</em></p>";

const recdescrion = "<ul><li><strong>Website creation</strong></li><li><strong>Development of a parcel tracking system</strong></li></ul><p><em>Ktor – WordPress – Jetpack Compose – Firebase</em></p>"


function ProjectsMine() {
  return (
    <SectionMine idSectionMine="projects" className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-violet-800 mb-4">My Projects</h1>
        <p className="text-lg text-gray-700 mb-8">
          Here are some of the projects I have worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardProject
          imageSrc="/src/assets/esag.png"
          title="ESAG NDE"
          description={esagdescription}
          link="esagnde.org"
          logo="/src/assets/logoesag.png"
        />
        <CardProject
          imageSrc="/src/assets/rec.png"
          title="REC LOGISTICS"
          description={recdescrion}
          link=""
          logo="/src/assets/logorec.png"
        />
      </div>
    </SectionMine>
  );
}

export default ProjectsMine;
