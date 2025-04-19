//import ContainerMine from "./ContainerMine";
import AboutPage from "./pages/AboutPage";

import HomePage from "./pages/HomePage";
import ProjectsMine from "./pages/ProjectMine";
import NavBarMine from "./objects/NavBarMine";
import ContactPage from "./pages/ContactPage";

function BodyMine() {
  return (
    <>
      <div className="flex flex-col items-center">
        <NavBarMine />
        <HomePage />
        <AboutPage />
        <ProjectsMine />
        <ContactPage />
      </div>
    </>
  );
}

export default BodyMine;
