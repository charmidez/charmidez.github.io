import "../css/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BottomBar from "./ui/BottomBar";
import Footer from "./ui/Footer";
import HomePage from "./pages/HomePage";
import ProjectsMine from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import NavBarMine from "./ui/NavBarMine";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./ui/PageWrapper";
import ActualiteSousPage from "./sections/home/ActualiteSousPage";
import { ScrollToTop } from "./ui/ScrollTop";
//import PageWrapper from "./components/PageWrapper";

function BodyMine() {

  const location = useLocation();

  return (
    
      <div className="flex flex-col justify-center ">
        <NavBarMine />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/actualite/:slug" element={<PageWrapper><ActualiteSousPage /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/projectmine" element={<PageWrapper><ProjectsMine /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>

        <BottomBar />
        <Footer />
      </div>
    
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="lg:text-lg md:text-md text-sm">
        <ScrollToTop />
        <BodyMine />
      </div>
    </BrowserRouter>
  );
}

export default App;
