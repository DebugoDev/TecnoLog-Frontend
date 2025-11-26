import React, { useState } from "react";
import HeaderTable from "./HeaderTable";
import TableLine from "./TableLine";
import Pagination from "./Pagination";

interface Item {
    id: number;
    status: string;
    partNumber: string;
    material: string;
    category: string;
    date: string;
    quantity: number;
}

const Table: React.FC = () => {
    const generateRandomDate = () => {
        const start = new Date(2023, 0, 1).getTime();
        const end = new Date(2025, 11, 31).getTime();
        const randomTime = start + Math.random() * (end - start);
        const randomDate = new Date(randomTime);
        return randomDate.toLocaleDateString("pt-BR");
    };

    const mockData: Item[] = Array.from({ length: 45 }, (_, i) => {
        const statusOptions = ["Inbound", "Outbound"];
        const status = statusOptions[i % 2];

        return {
            id: i + 1,
            status,
            partNumber: `PN-${1000 + i}`,
            material: `Material ${i + 1}`,
            category: i % 3 === 0 ? "MP" : "PA",
            date: generateRandomDate(),
            quantity: Math.floor(Math.random() * 200),
        };
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
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
                columnFive="Data"
                columnSix="Quantidade"
            />

            <div>
                {currentItems.map((item) => (
                    <TableLine
                        key={item.id}
                        columnOne={item.status}
                        columnTwo={item.partNumber}
                        columnThree={item.material}
                        columnFour={item.category}
                        columnFive={item.date}
                        columnSix={item.quantity.toString()}
                    />
                ))}
            </div>

            {/* <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            /> */}
        </div>
    );
};

export default Table;
