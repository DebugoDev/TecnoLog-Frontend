import React from "react";

interface InputProps {
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
    return (
        <div className="h-screen flex justify-center items-center">
            <label className="relative">
                <input 
                    type="text" 
                    placeholder={placeholder}
                    className="peer h-20 w-96 px-6 text-4xl border-2 bg-black rounded-lg border-gray-300 outline-none
                               focus:border-blue-500 focus:text-black transition-all duration-200"
                />
                <span 
                    className="absolute left-6 top-5 text-4xl bg-black text-black transition-all duration-200
                               peer-focus:-translate-y-9 peer-focus:-translate-x-1 peer-focus:text-blue-500
                               pointer-events-none"
                >
                    {placeholder || "Item"}
                </span>
            </label>
        </div>
    );
};

export default Input;
