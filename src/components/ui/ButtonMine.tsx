import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ButtonMine: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`rounded text-white font-light py-2 px-4 lg:py-4 lg:px-8 transition duration-300 ease-in-out transform hover:bg-white hover:scale-105 hover:font-bold hover:text-violet-800 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonMine;