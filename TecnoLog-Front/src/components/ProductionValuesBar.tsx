import React from "react";

interface IProductionOverview {
    separated: number;
    pending: number;
}

interface ProductionValuesBarProps {
    overview?: IProductionOverview
}

const ProductionValuesBar: React.FC<ProductionValuesBarProps> = ({ overview }) => {
    return (
        <div className="w-auto bg-[#e0e0e0] h-24 rounded-t-none rounded-2xl flex items-center justify-end top-20 gap-10">
            <div className="mt-3 flex items-center justify-center text-center gap-2">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-[#DA201D] font-bold text-2xl">•</p>
                    {overview?.pending}
                </div>
                <p className="text-md">Pendentes</p>
            </div>
            <div className="mt-3 flex items-center justify-center text-center gap-2 pr-10">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-[#E9C71C] font-bold text-2xl">•</p>
                    {overview?.separated}
                </div>
                <p className="text-md">Separados</p>
            </div>
        </div>
    );
};

export default ProductionValuesBar;
