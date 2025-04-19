import { useState } from 'react';
import MenuItemMine from './MenuItemMineSecond';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <ul className="flex space-x-2 fixed top-0 z-0">
      {menuItems.map((item) => (
        <MenuItemMine
          key={item.label}
          label={item.label}
          href={item.href}
          isActive={activeItem === item.label.toLowerCase()}
          onClick={() => setActiveItem(item.label.toLowerCase())}
        />
      ))}
    </ul>
  );
};

export default Navbar;