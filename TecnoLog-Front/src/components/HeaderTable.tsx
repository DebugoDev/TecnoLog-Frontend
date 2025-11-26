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
        <div className="
                    grid
                    grid-cols-[100px_200px_minmax(500px,1fr)_200px_250px_250px_50px]
                    items-center
                    h-12
                    font-medium
                    border-b
                    border-[#d6d6d6]
                    min-w-[1200px]
                ">
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