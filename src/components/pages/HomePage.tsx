import { SectionPresentation , SectionActualite } from "../sections/SectionsHome";

function HomePage() {
  return (
    <div className="mt-16">
      {/* SectionPresentationHOME - photo et présentation */}
      <SectionPresentation />

      {/* SectionActualiteHOME - actualité */}
      <SectionActualite />


    </div>
  );
}

export default HomePage;
