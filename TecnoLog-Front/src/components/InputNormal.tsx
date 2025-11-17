import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const InputNormal: React.FC<InputProps> = ({ label, ...props }) => {
    const [focused, setFocused] = useState(false);
    const hasValue = !!props.value && props.value.toString().length > 0;

    return (
        <div className="flex justify-center items-center w-full">
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
                    {`${label} ${props.required ? "*" : ""}`}
                </span>
            </label>
        </div>
    );
};

export default InputNormal;
