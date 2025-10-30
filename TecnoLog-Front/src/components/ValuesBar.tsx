import React from "react";


interface ValuesBarProps {
    stockValue: string,
    lowStock: string,
    zeroStock: string
}

const ValuesBar: React.FC<ValuesBarProps> = ({ stockValue, lowStock, zeroStock }) => {
    return (
        <div className="w-auto bg-[#e0e0e0] h-24 rounded-t-none rounded-2xl flex items-center justify-end top-20 gap-10">
            <div className="mt-3 flex items-center justify-center text-center gap-2">
                <p className="flex items-center justify-center gap-2">
                    <p className="text-[#DA201D] font-bold text-2xl">•</p>
                    {zeroStock}
                </p>
                <p className="text-md">Estoque Zero</p>
            </div>
            <div className="mt-3 flex items-center justify-center text-center gap-2">
                <p className="flex items-center justify-center gap-2">
                    <p className="text-[#E9C71C] font-bold text-2xl">•</p>
                    {lowStock}
                </p>
                <p className="text-md">Estoque Baixo</p>
            </div>
            <div className="mt-3 flex-col items-center justify-center text-center pr-10">
                <p className="font-bold">R$ {stockValue}</p>
                <p className="text-md">Valor em Estoque</p>
            </div>
        </div>
    );
};

export default ValuesBar;
