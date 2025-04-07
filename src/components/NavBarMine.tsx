import ButtonMine from "./ButtonMine";
import ContainerMine from "./ContainerMine";
import MenuItemMine from "./MenuItemMine";

function NavBarMine() {
  return (
    <>
    <ContainerMine>
    <div className="navbar bg-violet-50 fixed top-0 z-50 w-full max-w-[1140px] flex justify-center items-center mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
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
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-violet-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <MenuItemMine label="Home" className="mx-0.5" href="#"/>
            <MenuItemMine label="About" className="mx-0.5" href="#"/>
            <MenuItemMine label="ProjectsMine" className="mx-0.5" href="#"/>
            <MenuItemMine label="Contact" className="mx-0.5" href="#"/>
            </ul>
          </div>
          <img src='/src/assets/logo.png' alt="Logo" className="h-8 w-8 object-contain mr-2"/>
          <a className="font-bold text-2xl text-violet-800">Charmidez</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal bg-violet-100 rounded-box">
            <MenuItemMine label="Home" className="mx-0.5" href="#"/>
            <MenuItemMine label="About" className="mx-0.5" href="#"/>
            <MenuItemMine label="ProjectsMine" className="mx-0.5" href="#"/>
            <MenuItemMine label="Contact" className="mx-0.5" href="#"/>
          </ul>
        </div>
        <div className="navbar-end">
            <ButtonMine text="e-Mail me" className="rounded-box px-8 py-3" />
        </div>
    </div>
    </ContainerMine>

    </>
  );
}

export default NavBarMine;
