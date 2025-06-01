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
import { Helmet } from "react-helmet";

function BodyMine() {
  const location = useLocation();
  const path = location.pathname;

  // Fonction pour déterminer le titre basé sur le chemin
  const getTitle = (path: typeof location.pathname) => {
    if (path === "/") return "CHARMIDEZ";
    if (path === "/about") return "CHARMIDEZ - A propos";
    if (path === "/contact") return "CHARMIDEZ - Contact";
    if (path === "/projectmine") return "CHARMIDEZ - Projects";
    if (path.startsWith("/actualite/")) {
      // Optionnel : extraire le slug pour un titre plus spécifique
      const slug = path.split("/actualite/")[1];
      return `CHARMIDEZ - ${slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())}`;
    }
    return "CHARMIDEZ";
  };

  const title = getTitle(path);

  return (
    <div className="flex flex-col justify-center ">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <NavBarMine />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />
          <Route
            path="/actualite/:slug"
            element={
              <PageWrapper>
                <ActualiteSousPage />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutPage />
              </PageWrapper>
            }
          />
          <Route
            path="/projectmine"
            element={
              <PageWrapper>
                <ProjectsMine />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            }
          />
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
    <Helmet>
        
        <title>Charmidez – Portfolio</title>
        <meta name="description" content="Développeur Web & Mobile full-stack à Lomé, Togo." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://charmidez.github.io" />

        {/* Open Graph */}
        <meta property="og:title" content="Charmidez – Portfolio" />
        <meta property="og:description" content="Portfolio de développeur full-stack basé à Lomé" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://charmidez.github.io" />
        <meta property="og:image" content="https://charmidez.github.io/assets/logo/logomine.png" />

        <meta name="google-site-verification" content="7_P-F5X2UqwUJyPXvLcwO2ygsMfslKAjkNRF8-pk0gM" />

        {/* google-site-verification=7_P-F5X2UqwUJyPXvLcwO2ygsMfslKAjkNRF8-pk0gM */}

      </Helmet>
      <div className="lg:text-lg md:text-md text-sm">
        <ScrollToTop />
        <BodyMine />
      </div>
    </BrowserRouter>
  );
}

export default App;
