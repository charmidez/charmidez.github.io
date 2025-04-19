//import ContainerMine from "./ContainerMine";
import AboutPage from "./pages/AboutPage";

import HomePage from "./pages/HomePage";
import ProjectsMine from "./pages/ProjectMine";
import ContactPage from "./pages/ContactPage";
import NavBarMine from "./objects/NavBarMine";

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
