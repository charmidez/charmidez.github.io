//import ContainerMine from "./ContainerMine";
import LigneSeparation from "./LigneSeparation";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsMine from "./pages/ProjectMine";
import NavBarMine from "./NavBarMine";


function BodyMine() {
    return(
        <>
        
        <div className="flex flex-col items-center">
            <div className="mx-auto flex flex-col">
                <NavBarMine/>
                <HomePage/>
                {/*<LigneSeparation borderSize="20" color="#5d0ec0"/>*/}
                <AboutPage/>
                {/*<LigneSeparation borderSize="20" color="#5d0ec0"/>*/}
                <ProjectsMine/>
                {/*<LigneSeparation borderSize="20" color="#5d0ec0"/>*/}
                <ContactPage/>
            </div>

        </div>
        </>
    )
    
}

export default BodyMine;