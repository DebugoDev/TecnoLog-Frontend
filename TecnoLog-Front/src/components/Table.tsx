import React, { useState } from "react";
import HeaderTable from "./HeaderTable";
import TableLine from "./TableLine";
import Pagination from "./Pagination";

interface Item {
    id: number;
    status: string;
    partNumber: string;
    material: string;
    categoria: string;
    estoque: number;
    valorEstoque: string;
}

const Table: React.FC = () => {
    const mockData: Item[] = Array.from({ length: 45 }, (_, i) => {
        const statusOptions = ["Zero", "Baixo", "Ok"];
        const status = statusOptions[i % 3];

        return {
            id: i + 1,
            status,
            partNumber: `PN-${1000 + i}`,
            material: `Material ${i + 1}`,
            categoria: i % 3 === 0 ? "Ferramenta" : "Acessório",
            estoque: Math.floor(Math.random() * 200),
            valorEstoque: `R$ ${(Math.random() * 1000).toFixed(2)}`,
        };
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(mockData.length / itemsPerPage);

    const currentItems = mockData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="w-full mx-auto mt-5 rounded-xl overflow-hidden ">
            <HeaderTable
                columnOne="Status"
                columnTwo="Part Number"
                columnThree="Material"
                columnFour="Categoria"
                columnFive="Estoque"
                columnSix="Valor no Estoque"
            />

            <div>
                {currentItems.map((item) => (
                    <TableLine
                        key={item.id}
                        columnOne={item.status}
                        columnTwo={item.partNumber}
                        columnThree={item.material}
                        columnFour={item.categoria}
                        columnFive={item.estoque.toString()}
                        columnSix={item.valorEstoque}
                    />
                ))}
            </div>

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default Table;
