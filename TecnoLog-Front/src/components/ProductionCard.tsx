import React from "react";

interface ProductionCardProps {
    idCustomer: string;
    customer: string;
    materialOne: string;
    materialTwo: string;
    materialThree: string;
    idOrder: string,
    status: string,
}

const ProductionCard: React.FC<ProductionCardProps> = ({ idCustomer, customer, materialOne, materialTwo, materialThree, idOrder, status }) => {

        const renderStatus = () => {
        switch (status) {
            case "Não Separado":
                return <p className="text-[#DA201D] font-bold text-2xl">•</p>;
            case "Separado":
                return <p className="text-[#33C014] font-bold text-2xl">•</p>;
        };
    };
    return (
        <div className="bg-[#f8f9fa] flex shadow-lg rounded-3xl p-5 flex-col gap-2">
            <div className="flex justify-between w-full">
                <div className="w-full flex gap-2 items-center">
                    <p className="font-bold text-lg">RP {idOrder}</p>
                    <p className="font-bold text-lg">{renderStatus()}</p>
                </div>
            </div>
            <div className="w-full">
                <p className="font-semibold text-md">Cliente</p>
                <p className="text-sm font-medium">{idCustomer} {customer}</p>
            </div>
            <div>
                <p className="font-semibold text-md">Materiais</p>
                <p className="text-sm font-medium">{materialOne}</p>
                <p className="text-sm font-medium">{materialTwo}</p>
                <p className="text-sm font-medium">{materialThree}</p>
            </div>
        </div>
    );
};

export default ProductionCard;
