
import { Link } from "react-router-dom";


interface MenuItemProps {
  key : string
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const MenuItemMine = ({ label, href = '#', className = '', key = '', onClick  } : MenuItemProps) => {
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

export default MenuItemMine;
