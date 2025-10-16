import React from "react";


interface InputProps {
    placeholder: string;
}

const InputNormal: React.FC<InputProps> = ({ placeholder }) => {
    return (
        <div className="flex justify-center items-center w-4/5">
            <label className="relative w-full">
                <input 
                    type="text" 
                    className="peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl border-[#1f3449] text-[#1f3449] outline-none
                               focus:border-[#175476] transition-all duration-200"
                />
                <span 
                    className="absolute left-5 top-2.5 text-md font-medium bg-[#f8f9fa] text-[#1f3449] transition-all duration-200
                    peer-focus:-translate-y-5 peer-focus:-translate-x-0 peer-focus:text-[#175476]
                    pointer-events-none"
                >
                    { placeholder }
                </span>
            </label>
        </div>
    );
};

export default InputNormal;
