//import ContainerMine from "./ContainerMine";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projectmine" element={<ProjectsMine />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default BodyMine;
