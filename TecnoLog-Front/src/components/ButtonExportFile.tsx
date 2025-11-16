import { type LucideProps } from "lucide-react";
import React from "react";

interface IButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    tooltip?: string;
}

const ButtonIcon: React.FC<IButtonIconProps> = ({ icon: Icon, tooltip, ...props }) => {
    return (
        <div className="relative group flex items-center">
            <button
                {...props}
                className="px-4 py-2 h-full bg-[#1f3449] text-white rounded-lg cursor-pointer hover:bg-[#175476] transition-colors duration-200 border-none shadow-lg"
            >
                <Icon size={18} />
            </button>

            {tooltip && (
                <span className="
                    absolute -top-7 left-1/2 transform -translate-x-1/2
                    px-2 py-1 text-xs text-white bg-black rounded
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200 whitespace-nowrap"
                >
                    {tooltip}
                </span>
            )}
        </div>
    );

};

export default ButtonIcon;
