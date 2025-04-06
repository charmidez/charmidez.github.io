import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ButtonMine: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`rounded bg-violet-400 text-white font-light py-2 px-4 transition duration-300 ease-in-out transform hover:bg-violet-600 hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonMine;