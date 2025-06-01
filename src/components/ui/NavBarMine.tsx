//import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import MenuItemMine from "./MenuItemMine";
import SendMailButton from "./SendMailButton";

import { useState, useEffect } from "react";
type MenuKey = "home" | "about" | "projectmine" | "contact";

const menuItem: { key: MenuKey; label: string; href: string }[] = [
  { key: "home", label: "Acceuil", href: "/" },
  { key: "about", label: "À Propos", href: "/about" },
  { key: "projectmine", label: "Projects", href: "/projectmine" },
  { key: "contact", label: "Contact", href: "/contact" },
];

function NavBarMine() {
  const location = useLocation();

  const getMenuFromPath = (path: string): MenuKey => {
    switch (path) {
      case "/about":
        return "about";
      case "/contact":
        return "contact";
      case "/projectmine":
        return "projectmine";
      default:
        return "home";
    }
  };

  //const [activeMenu, setActiveMenu] = useState<MenuKey>("home");
  const [activeMenu, setActiveMenu] = useState<MenuKey>(() =>
    getMenuFromPath(location.pathname)
  );

  useEffect(() => {
    setActiveMenu(getMenuFromPath(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <div className="navbar bg-violet-700 flex justify-center items-center mx-auto px-4 lg:px-32 mb-2 fixed top-0 z-50">
        <Link to={"/"} className="navbar-start">
          <img
            src="/assets/logo/logowhite.png"
            alt="Logo"
            className="h-8 w-8 object-contain mr-2"
          />
          <a className="font-bold lg:text-3xl text-xl text-white">CHARMIDEZ</a>
        </Link>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal rounded-box">
            {menuItem.map((menu) => (
              <MenuItemMine
                key={menu.key}
                label={menu.label}
                href={menu.href}
                onClick={() => setActiveMenu(menu.key)}
                className={` ${
                  activeMenu === menu.key
                    ? "bg-violet-800 text-white"
                    : "bg-violet-700 text-white"
                } `}
              />
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <SendMailButton
            to="charmidez.assiobo@gmail.com"
            subject="Contact via Portfolio"
            body="Bonjour Charmidez, je vous contacte depuis votre portfolio."
          />
        </div>
      </div>
    </>
  );
}

export default NavBarMine;
