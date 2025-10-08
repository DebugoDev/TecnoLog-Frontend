import { Trash } from "lucide-react";
import React from "react";

interface TableLineProps {
    columnOne: string;
    columnTwo: string;
    columnThree: string;
    columnFour: string;
    columnFive: string;
    columnSix: string;
}

const TableLine: React.FC<TableLineProps> = ({ columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix }) => {

    const renderStatus = () => {
        switch (columnOne) {
            case "Zero":
                return <p className="text-[#DA201D] font-bold text-2xl">•</p>;
            case "Baixo":
                return <p className="text-[#E9C71C] font-bold text-2xl">•</p>;
            case "Ok":
                return <p className="text-[#33C014] font-bold text-2xl">•</p>;
            default:
                return <p className="text-gray-500">{columnOne}</p>;
        }
    };

    return (
        <div className="grid grid-cols-[200px_300px_500px_250px_200px_250px_50px] items-center h-12 font-medium border-b border-[#d6d6d6]">
            <div className="flex items-center pl-2">{renderStatus()}</div>
            <p>{columnTwo}</p>
            <p>{columnThree}</p>
            <p>{columnFour}</p>
            <p>{columnFive}</p>
            <p>{columnSix}</p>
            <Trash className="cursor-pointer"/>
        </div>
    );
};

export default TableLine;