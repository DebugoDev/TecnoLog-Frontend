import React from "react";
import type { IStockOverview } from "../services/stockItemService";


interface ValuesBarProps {
    overview?: IStockOverview
}

const StockValuesBar: React.FC<ValuesBarProps> = ({ overview }) => {
    return (
        <div className="w-auto bg-[#e0e0e0] h-24 rounded-t-none rounded-2xl flex items-center justify-end top-20 gap-10">
            <div className="mt-3 flex items-center justify-center text-center gap-2">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-[#DA201D] font-bold text-2xl">•</p>
                    {overview?.outOfStock}
                </div>
                <p className="text-md">Estoque Zero</p>
            </div>
            <div className="mt-3 flex items-center justify-center text-center gap-2">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-[#E9C71C] font-bold text-2xl">•</p>
                    {overview?.lowStock}
                </div>
                <p className="text-md">Estoque Baixo</p>
            </div>
            <div className="mt-3 flex-col items-center justify-center text-center pr-10">
                <p className="font-bold">
                    {
                        overview?.stockValue.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })
                    }
                </p>
                <p className="text-md">Valor em Estoque</p>
            </div>
        </div>
    );
};

export default StockValuesBar;
