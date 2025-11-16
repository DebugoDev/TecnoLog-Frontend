import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const ButtonFile: React.FC<ButtonProps> = ({ title, ...props }) => {
    return (
        <button
            {...props}
            className="px-5 py-2 bg-[#1f3449] text-white rounded-lg cursor-pointer hover:bg-[#175476] transition-colors duration-200 border-none shadow-lg"
        >
            {title}
        </button>
    );
};

export default ButtonFile;
