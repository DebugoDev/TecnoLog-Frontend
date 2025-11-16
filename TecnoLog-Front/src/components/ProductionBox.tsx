import React, { useState } from "react";
import Pagination from "./Pagination";
import ProductionCard from "./ProductionCard";
import MaterialsModal from "./MaterialsModal";

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
        customer: `Cliente ${i + 1}`,
        materialOne: `Material 1`,
        materialTwo: `Material 2`,
        materialThree: `Material 3`,
        idOrder: `${1000 + i}`,
        status: i % 2 === 0 ? "Separado" : "Não Separado",
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduction, setSelectedProduction] = useState<Production | null>(null);

    const itemsPerPage = 12;
    const totalPages = Math.ceil(productionMock.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentUsers = productionMock.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="flex flex-col w-full items-center justify-center h-full relative">
            <div className="grid grid-cols-4 gap-6 p-6 w-full">
                {currentUsers.map((product, index) => (
                    <ProductionCard
                        key={index}
                        idCustomer={product.idCustomer}
                        customer={product.customer}
                        materialOne={product.materialOne}
                        materialTwo={product.materialTwo}
                        materialThree={product.materialThree}
                        idOrder={product.idOrder}
                        status={product.status}
                        onClick={() => setSelectedProduction(product)}
                    />
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
            {selectedProduction && (
                <MaterialsModal
                    materials={[
                        { nome: selectedProduction.materialOne, quantidade: 120 },
                        { nome: selectedProduction.materialTwo, quantidade: 80 },
                        { nome: selectedProduction.materialThree, quantidade: 200 },
                    ]}
                    customerData={{
                        idCliente: selectedProduction.idCustomer,
                        nomeCliente: selectedProduction.customer,
                        valorTotal: "R$ 2.300,00",
                        endereco: "Rua das Indústrias, 450 - Campinas/SP",
                        cnpj: "12.345.678/0001-90",
                        telefone: "(19) 99999-8888",
                        dataPedido: "10/11/2025",
                        dataEntrega: "15/11/2025",
                    }}
                    onClose={() => setSelectedProduction(null)}
                />
            )}
        </div>
    );
};

export default ProductionBox;
