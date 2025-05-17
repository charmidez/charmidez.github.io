import { SectionPresentation , SectionActualite, SectionCodeVibe } from "../sections/home/SectionsHome";

function HomePage() {
  return (
    <div className="mt-16">
      {/* SectionPresentationHOME - photo et présentation */}
      <SectionPresentation />

      {/* SectionActualiteHOME - actualité */}
      <SectionActualite />

      <SectionCodeVibe />

    </div>
  );
}

export default HomePage;
