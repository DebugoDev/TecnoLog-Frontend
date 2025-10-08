import React from "react";

interface HeaderTableProps {
    columnOne: string;
    columnTwo: string;
    columnThree: string;
    columnFour: string;
    columnFive: string;
    columnSix: string;
}

const HeaderTable: React.FC<HeaderTableProps> = ({ columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix }) => {
    return (
        <div className="grid grid-cols-[200px_300px_500px_250px_200px_250px_50px] h-12 mt-5 items-center font-medium border-b-2 border-[#d6d6d6]">
            <p className="text-left">{columnOne}</p>
            <p className="text-left">{columnTwo}</p>
            <p className="text-left">{columnThree}</p>
            <p className="text-left">{columnFour}</p>
            <p className="text-left">{columnFive}</p>
            <p className="text-left">{columnSix}</p>
        </div>
    );
}

export default HeaderTable;