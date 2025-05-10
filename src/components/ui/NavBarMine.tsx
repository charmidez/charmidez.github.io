
//import { Link } from "react-router-dom";
import MenuItemMine from "./MenuItemMine";
import SendMailButton from "./SendMailButton";

function NavBarMine() {
  return (
    <>
    <div className="navbar bg-violet-700 flex justify-center items-center mx-auto px-4 lg:px-32 mb-2 fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-violet-200 rounded mr-1">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-md dropdown-content bg-violet-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <MenuItemMine label="Home" className="mx-0.5" href="/"/>
            <MenuItemMine label="About" className="mx-0.5" href="/about"/>
            <MenuItemMine label="ProjectsMine" className="mx-0.5" href="/projectmine"/>
            <MenuItemMine label="Contact" className="mx-0.5" href="/contact"/>
            </ul>
          </div>
          <img src='/assets/logowhite.png' alt="Logo" className="h-8 w-8 object-contain mr-2"/>
          <a className="font-bold lg:text-2xl text-white">CHARMIDEZ</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal rounded-box">
            <MenuItemMine label="Acceuil" className="mx-0.5" href="/"/>
            <MenuItemMine label="À Propos" className="mx-0.5" href="/about"/>
            <MenuItemMine label="Projects" className="mx-0.5" href="/projectmine"/>
            <MenuItemMine label="Contact" className="mx-0.5" href="/contact"/>
          </ul>
        </div>
        <div className="navbar-end">
            <SendMailButton
              to="charmidez.assiobo@gmail.com"
              subject="Contact via Portfolio"
              body="Bonjour Charmidez, je vous contacte depuis votre portfolio."
            >
              e-Mail me
            </SendMailButton>
        </div>
    </div>
    </>
  );
}

export default NavBarMine;
