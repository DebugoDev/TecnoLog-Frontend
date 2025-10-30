import React, { useState } from "react";
import Pagination from "./Pagination";
import ProductionCard from "./ProductionCard";

interface Production {
    idCustomer: string;
    customer: string;
    materialOne: string;
    materialTwo: string;
    materialThree: string;
    idOrder: string;
    status: string;
}

const ProductionBox: React.FC = () => {
    const productionMock: Production[] = Array.from({ length: 45 }, (_, i) => ({
        idCustomer: `${1000 + i}`,
        customer: `Cliente`,
        materialOne: `${1000 + i} Material 1 ${Math.floor(Math.random() * 200)}un`,
        materialTwo: `${1000 + i} Material 2 ${Math.floor(Math.random() * 200)}un`,
        materialThree: `${1000 + i} Material 3 ${Math.floor(Math.random() * 200)}un`,
        idOrder: `${1000 + i}`,
        status: i % 2 === 0 ? "Separado" : "Não Separado",
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const totalPages = Math.ceil(productionMock.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentUsers = productionMock.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="flex flex-col w-full items-center justify-center h-full">
            <div className="grid grid-cols-4 gap-6 p-6 w-full ">
                {currentUsers.map((product, index) => (
                    <ProductionCard key={index} idCustomer={product.idCustomer} customer={product.customer} materialOne={product.materialOne} materialTwo={product.materialTwo} materialThree={product.materialThree} idOrder={product.idOrder} status={product.status} />
                ))}
            </div>
            {/* <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={(page) => {
                    if (page >= 1 && page <= totalPages) {
                        setCurrentPage(page);
                    }
                }}
            /> */}
        </div>
    );
};

export default ProductionBox;
