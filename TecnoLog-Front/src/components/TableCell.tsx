import React from "react";

interface ITableCellProps {
    children: React.ReactNode;
    className?: string;
    tooltip?: string;
}

const TableCell: React.FC<ITableCellProps> = ({ children, className = "", tooltip }) => {
    return (
        <div className={`relative group flex items-center ${className}`}>
            <p className="truncate overflow-hidden whitespace-nowrap cursor-default">{children}</p>
            {tooltip && (
                <span className="
                    absolute -top-6 left-0 transform cursor-default
                    px-2 py-1 text-xs text-white bg-black rounded
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200 whitespace-nowrap
                ">
                    {tooltip}
                </span>
            )}
        </div>
    );
};

export default TableCell;
