//import ContainerMine from "./ContainerMine";
import LigneSeparation from "./LigneSeparation";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsMine from "./pages/ProjectMine";


function BodyMine() {
    return(
        <>
        <div className="flex flex-col items-center bg-violet-50 ">
            <div className="max-w-7xl mx-auto p-2 flex flex-col">
                <HomePage/>
                <LigneSeparation borderSize="20" color="#5d0ec0"/>
                <AboutPage/>
                <LigneSeparation borderSize="20" color="#5d0ec0"/>
                <ProjectsMine/>
                <LigneSeparation borderSize="20" color="#5d0ec0"/>
                <ContactPage/>
            </div>

        </div>
        </>
    )
    
}

export default BodyMine;