//import ContainerMine from "./ContainerMine";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage";

import BottomBar from "./ui/BottomBar";

import HomePage from "./pages/HomePage";
import ProjectsMine from "./pages/ProjectMine";
import ContactPage from "./pages/ContactPage";
import NavBarMine from "./ui/NavBarMine";


function BodyMine() {
  return (
    <>
      <div className="flex flex-col justify-center ">
      <NavBarMine />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projectmine" element={<ProjectsMine />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <BottomBar />
        </BrowserRouter>


      </div>
    </>
  );
}

export default BodyMine;
