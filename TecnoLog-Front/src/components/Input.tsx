import { Search } from "lucide-react";
import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
    const [focused, setFocused] = useState(false);
    const hasValue = !!props.value && props.value.toString().length > 0;

    return (
        <div className="flex justify-center items-center w-4/5">
            <label className="relative w-full">
                <input
                    {...props}
                    onFocus={(e) => {
                        setFocused(true);
                        props.onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setFocused(false);
                        props.onBlur?.(e);
                    }}
                    className={`peer h-12 w-full px-5 text-md border-1 bg-[#f8f9fa] rounded-2xl outline-none
                    ${props.disabled ? "brightness-90 cursor-not-allowed" : ""}`}
                />
                <span
                    className={`absolute left-5 transition-all duration-200 bg-[#f8f9fa] px-1
                    ${focused || hasValue ? "-top-3 text-sm text-[#175476]" : "top-2.5 text-md text-[#1f3449]"}`}
                >
                    {label}
                </span>
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-[#1f3449] peer-focus:text-[#175476]" size={24} />
            </label>
        </div>
    );
};

export default Input;
