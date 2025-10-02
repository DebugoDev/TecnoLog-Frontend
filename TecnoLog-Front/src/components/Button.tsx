import React from "react";

interface ButtonProps {
    title: string;
}

const ButtonFile: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button
      className="px-2 py-2 bg-[#1f3449] text-white rounded-lg hover:bg-[#175476] transition-colors duration-200 border-none shadow-lg"
    >
      { title }
    </button>
  );
};

export default ButtonFile;
