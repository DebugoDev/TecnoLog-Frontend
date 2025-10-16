import React from "react";


interface ValuesBarProps {
    separated: string,
    noSeparated: string
}

const ValuesBar: React.FC<ValuesBarProps> = ({ separated, noSeparated }) => {
    return (
        <div className="w-auto bg-[#e0e0e0] h-24 rounded-t-none rounded-2xl flex items-center justify-end top-20 gap-10 p-10">
            <div className="mt-3 flex items-center justify-center text-center gap-2">
                <p className="flex items-center justify-center gap-2">
                    <p className="text-[#DA201D] font-bold text-2xl">•</p>
                    { noSeparated }
                </p>
                <p className="text-md">Pendente</p>
            </div>
            <div className="mt-3 flex items-center justify-center text-center gap-2">
                <p className="flex items-center justify-center gap-2">
                    <p className="text-[#33C014] font-bold text-2xl">•</p>
                    { separated }
                </p>
                <p className="text-md">Separado</p>
            </div>
        </div>
    );
};

export default ValuesBar;
