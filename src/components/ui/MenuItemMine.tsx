
interface MenuItemProps {
  label: string;
  href?: string;
  className?: string;
}

const MenuItemMine = ({ label, href = '#', className = '' } : MenuItemProps) => {
  return (
    <li>
      <a
        href={href}
        className={`text-white font-medium px-4 py-2 rounded transition duration-300 hover:bg-violet-400 hover:text-white active:bg-violet-600 ${className}`}
      >
        {label}
      </a>
    </li>
  );
};

export default MenuItemMine;
