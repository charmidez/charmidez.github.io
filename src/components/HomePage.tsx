import ContainerMine from "./ContainerMine";

function HomePage() {
    return(
        <>
        <ContainerMine className="bg-violet-100 p-4 rounded-lg" direction="row">
        <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Lights" style={{width: "100%"}} className="rounded-lg "/>
        <div className="flex flex-col ml-4">
            <h1 className="text-6xl font-black">Charmidez ASSIOBO</h1>
            <h3 className="text-3xl font-bold">Web Developer</h3>
            <p className="text-xl mt-2">I am a passionate web developer with experience in creating dynamic and responsive websites.</p>
        </div>
        </ContainerMine>
        </>
    )
    
}

export default HomePage;