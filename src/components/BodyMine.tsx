import ContainerMine from "./ContainerMine";
import HomePage from "./HomePage";

function BodyMine() {
    return(
        <>
        <div>
            <HomePage/>
        <ContainerMine direction="row" className="gap-4">
        <div className="bg-violet-200 p-4">Element 1</div>
        <div className="bg-violet-300 p-4">Element 2</div>
        <div className="bg-violet-400 p-4">Element 3</div>
      </ContainerMine>

      {/* Conteneur vertical */}
      <ContainerMine direction="column" className="gap-4 mt-8">
        <div className="bg-violet-200 p-4">Element 1</div>
        <div className="bg-violet-300 p-4">Element 2</div>
        <div className="bg-violet-400 p-4">Element 3</div>
      </ContainerMine>
        </div>
        </>
    )
    
}

export default BodyMine;