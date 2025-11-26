// components/ProductionBox.tsx
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import MaterialsModal from "./MaterialsModal";
import ProductionCard from "./ProductionCard";
import type { IPagination } from "../services/api";

interface Production {
    idCustomer: string;
    customer: string;
    status: string;
    materialOne: string;
    materialTwo: string;
    materialThree: string;
}

interface ProductionBoxProps {
    search: string;
}

const ProductionBox: React.FC<ProductionBoxProps> = ({ search }) => {

    const [pagination, setPagination] = useState<IPagination>({
        page: 1,
        pageSize: 12,
        totalPages: 1,
        totalItems: 0,
        hasPreviousPage: false,
        hasNextPage: false
    });

    const [data, setData] = useState<Production[]>([]);
    const [selected, setSelected] = useState<Production | null>(null);

    const mockData: Production[] = Array.from({ length: 80 }, (_, i) => ({
        idCustomer: `${1000 + i}`,
        customer: `Cliente ${i + 1}`,
        materialOne: "Material A",
        materialTwo: "Material B",
        materialThree: "Material C",
        status: i % 2 === 0 ? "Separado" : "Pendente",
    }));

    const handleProduction = async () => {
        const filtered = mockData.filter(item =>
            item.customer.toLowerCase().includes(search.toLowerCase())
        );

        const start = (pagination.page - 1) * pagination.pageSize;
        const end = start + pagination.pageSize;

        setData(filtered.slice(start, end));

        setPagination(prev => ({
            ...prev,
            totalItems: filtered.length,
            totalPages: Math.ceil(filtered.length / prev.pageSize)
        }));
    };

    useEffect(() => {
        setPagination({ ...pagination, page: 1 });
    }, [search]);

    useEffect(() => {
        handleProduction();
    }, [pagination.page, search]);

    return (
        <div className="flex flex-col w-full items-center justify-center h-full">
            <div className="grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-6 p-6 w-full ">
                {data.map((item, index) => (
                    <ProductionCard
                        key={index}
                        {...item}
                        onClick={() => setSelected(item)}
                    />
                ))}
            </div>

            <Pagination
                pagination={pagination}
                onPageChange={(page) => setPagination({ ...pagination, page })}
            />

            {selected && (
                <MaterialsModal
                    materials={[
                        { nome: selected.materialOne, quantidade: 100 },
                        { nome: selected.materialTwo, quantidade: 150 },
                        { nome: selected.materialThree, quantidade: 200 },
                    ]}
                    customerData={{
                        idCliente: selected.idCustomer,
                        nomeCliente: selected.customer,
                        valorTotal: "R$ 1.500,00",
                        endereco: "Rua X, 123",
                        telefone: "(11) 99999-0000",
                    }}
                    onClose={() => setSelected(null)}
                />
            )}
        </div>
    );
};

export default ProductionBox;
