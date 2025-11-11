import React from "react";

interface ButtonProps {
    title: string;
    onClick?: () => void;
}

const ButtonFile: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="px-2 py-2 bg-[#1f3449] text-white rounded-lg hover:bg-[#175476] transition-colors duration-200 border-none shadow-lg" onClick={onClick}
    >
      { title }
    </button>
  );
};

export default ButtonFile;
