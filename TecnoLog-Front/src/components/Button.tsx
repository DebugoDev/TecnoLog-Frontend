import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    onClick?: () => void;
}

const ButtonFile: React.FC<ButtonProps> = ({ title, disabled, ...props }) => {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`
                px-5 py-2 rounded-lg border-none shadow-lg transition-colors duration-200
                ${disabled
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-[#1f3449] text-white cursor-pointer hover:bg-[#175476]"
                }
            `}
        >
            {title}
        </button>
    );
};

export default ButtonFile;
