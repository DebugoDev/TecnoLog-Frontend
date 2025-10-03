import { Search } from "lucide-react";
import React from "react";


interface InputProps {
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
    return (
        <div className="flex justify-center items-center">
            <label className="relative w-lg">
                <input 
                    type="text" 
                    className="peer h-12 w-lg px-5 text-lg border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none
                               focus:border-[#175476] transition-all duration-200"
                />
                <span 
                    className="absolute left-5 top-2 text-lg font-medium bg-[#f8f9fa] text-[#1f3449] transition-all duration-200
                    peer-focus:-translate-y-6 peer-focus:-translate-x-0.5 peer-focus:text-[#175476]
                    pointer-events-none"
                >
                    { placeholder }
                </span>
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-[#1f3449] peer-focus:text-[#175476]" size={24} />
            </label>
        </div>
    );
};

export default Input;
