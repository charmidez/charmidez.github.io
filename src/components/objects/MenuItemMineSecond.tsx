
interface MenuItemProps {
  label: string;
  href?: string;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const MenuItemMine = ({ label, href = '#', className = '' } : MenuItemProps) => {
  return (
    <li>
      <a
        href={href}
        className={`text-violet-600 font-medium px-4 py-2 rounded transition duration-300 hover:bg-violet-600 hover:text-white active:bg-violet-600 ${className}`}
      >
        {label}
      </a>
    </li>
  );
};

export default MenuItemMine;
