import { Link } from "react-router-dom";

interface MenuItemProps {
  key: string;
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

interface MenuItemMineBottomProps {
  key: string;
  label: string;
  imgSrc: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const MenuItemMine = ({
  label,
  href = "#",
  className = "",
  key = "",
  onClick,
}: MenuItemProps) => {
  return (
    <li onClick={onClick}>
      <Link
        key={key}
        to={href}
        className={`mx-2 text-white font-medium px-8 py-2 rounded-lg hover:bg-violet-800 hover:text-white duration-300 transition ${className}`}
      >
        {label}
      </Link>
    </li>
  );
};

export const MenuItemMineBottom = ({
  label,
  href = "#",
  imgSrc,
  className = "",
  key = "",
  onClick,
}: MenuItemMineBottomProps) => {
  return (
    <div onClick={onClick}>
      <Link
        key={key}
        to={href}
        className={`flex flex-col items-center rounded-xl p-2 transition duration-200 ${className}`}
      >
        <img src={imgSrc} alt="home" className="w-8 h-8 mb-1" />
        <span className="text-sm font-medium">{label}</span>
      </Link>
    </div>
  );
};

export default MenuItemMine;
