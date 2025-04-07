import "../css/App.css";
import NavBarMine from "./NavBarMine";
import BodyMine from "./BodyMine";

function App() {
  return (
    <>
      <header className="bg-violet-50">
        <NavBarMine />
      </header>
      <body>
        <BodyMine />
      </body>
    </>
  );
}

export default App;
