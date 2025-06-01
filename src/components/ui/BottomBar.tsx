import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MenuItemMineBottom } from "./MenuItemMine";


type MenuKey = "home" | "about" | "projectmine" | "contact";

const menuItemBottom: {
  key: MenuKey;
  label: string;
  href: string;
  imgSrc: string;
}[] = [
  { key: "home", label: "Acceuil", href: "/", imgSrc: "/assets/icon/home.svg" },
  {
    key: "about",
    label: "À Propos",
    href: "/about",
    imgSrc: "/assets/icon/about.svg",
  },
  {
    key: "projectmine",
    label: "Projects",
    href: "/projectmine",
    imgSrc: "/assets/icon/work.svg",
  },
  {
    key: "contact",
    label: "Contact",
    href: "/contact",
    imgSrc: "/assets/icon/contact.svg",
  },
];

export default function BottomBar() {
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

  const [activeMenu, setActiveMenu] = useState<MenuKey>(() =>
    getMenuFromPath(location.pathname)
  );

  useEffect(() => {
    setActiveMenu(getMenuFromPath(location.pathname));
  }, [location.pathname]);

  return (
    <div className="flex flex-row justify-center items-center lg:hidden">
      <div className="fixed bottom-0 w-full md:w-fit flex justify-center z-50 lg:hidden">
        <div className="bg-transparent-bottom backdrop-blur-sm shadow-lg px-2 py-2 m-4 w-full rounded-2xl">
          <div className="flex justify-between items-center gap-2 text-white">
            {menuItemBottom.map((menu) => (
              <MenuItemMineBottom
                key={menu.key}
                label={menu.label}
                imgSrc={menu.imgSrc}
                href={menu.href}
                onClick={() => setActiveMenu(menu.key)}
                className={` ${
                  activeMenu === menu.key
                    ? "bg-violet-500 text-white"
                    : " text-white"
                } `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*
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
  
  
  */
}

{
  /*

        <div className="flex justify-between items-center gap-2 text-white">
          <a href="/" className="flex flex-col items-center hover:bg-violet-400 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/home.svg" alt="home" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">Acceuil</span>
          </a>

          <a href="/about" className="flex flex-col items-center hover:bg-violet-400 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/about.svg" alt="about" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">À propos</span>
          </a>

          <a href="/projectmine" className="flex flex-col items-center hover:bg-violet-400 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/work.svg" alt="projects" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">Projects</span>
          </a>

          <a href="/contact" className="flex flex-col items-center hover:bg-violet-400 hover:text-violet-700 rounded-xl p-2 transition duration-200">
            <img src="/assets/icon/contact.svg" alt="contact" className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">Contact</span>
          </a>
        </div>

  */
}
