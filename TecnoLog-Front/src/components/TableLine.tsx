import { ChevronDown, ChevronUp, Trash } from "lucide-react";
import React from "react";
import TableCell from "./TableCell";

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
            case "OUTOFSTOCK":
                return <p className="text-[#DA201D] font-bold text-3xl">•</p>;
            case "LOWSTOCK":
                return <p className="text-[#E9C71C] font-bold text-3xl">•</p>;
            case "INSTOCK":
                return <p className="text-[#33C014] font-bold text-3xl">•</p>;
            case "INBOUND":
                return <p className="text-[#33C014] text-3xl"><ChevronUp /></p>;
            case "OUTBOUND":
                return <p className="text-[#DA201D] text-3xl"><ChevronDown /></p>;
            default:
                return <p className="text-gray-500">{columnOne}</p>;
        }
    };

    const renderQuantity = () => {
        switch (columnOne) {
            case "INBOUND":
                return <p className="text-[#33C014]">+{columnSix}</p>;
            case "OUTBOUND":
                return <p className="text-[#DA201D]">-{columnSix}</p>;
            default:
                return <p className="text-[#1f3449]">{columnSix}</p>;
        }
    };

    return (
        <div className="w-full">
            <div
                className="
                    grid
                    grid-cols-[100px_200px_minmax(500px,1fr)_200px_250px_250px_50px]
                    items-center
                    h-12 gap-x-4
                    font-medium
                    border-b
                    border-[#d6d6d6]
                    min-w-[1200px]"
            >
                <div className="flex items-center pl-2">{renderStatus()}</div>
                <TableCell tooltip={columnTwo}>{columnTwo}</TableCell>
                <TableCell tooltip={columnThree}>{columnThree}</TableCell>
                <TableCell tooltip={columnFour}>{columnFour}</TableCell>
                <TableCell tooltip={columnFive}>{columnFive}</TableCell>
                <TableCell>{renderQuantity()}</TableCell>
                <Trash className="cursor-pointer" />
            </div>
        </div>
    );
};

export default TableLine;
