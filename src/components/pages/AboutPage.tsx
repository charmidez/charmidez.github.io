import { SectionAbout, SectionCompetences } from "../sections/SectionsAbout";

function AboutPage() {
  return (
    <>
      <section className="flex flex-col dark:bg-gray-900">
        <div className="lg:pb-16 pb-8 px-4 lg:px-32 pt-24 bg-violet-100">
          <SectionAbout />
        </div>

        <div className="bg-white lg:py-16 py-8 px-4 lg:px-32">
          <SectionCompetences />
        </div>
      </section>
    </>
  );
}
export default AboutPage;
