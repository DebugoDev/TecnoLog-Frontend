import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar";
import "../../App.css";

import registerService from "../../services/registerService";
import type { IRegister } from "../../services/registerService";
import type { IPagination } from "../../services/api";

import MovModal from "../../components/MovModal";
import TableMovs from "../../components/TableMovs";

const Movs: React.FC = () => {
    const [search, setSearch] = useState("");

    const [pagination, setPagination] = useState<IPagination>({
        page: 1,
        pageSize: 12,
        totalPages: 1,
        totalItems: 0,
        hasPreviousPage: false,
        hasNextPage: false
    });

    const [data, setData] = useState<IRegister[]>();

    const handleRegisters = async () => {
        try {
            const response = await registerService.getPaginated({
                search,
                page: pagination.page,
                size: pagination.pageSize
            });

            setData(response.paginatedItems);
            setPagination(response.pagination);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setPagination({ ...pagination, page: 1 });
    }, [search]);

    useEffect(() => {
        handleRegisters();
    }, [pagination.page, search]);

    return (
        <MainLayout title="Entrada e Saída">
            <div className="flex flex-col space-y-0">
                <div className="rounded-2xl shadow-md z-20">
                    <SearchBar
                        title="Movimentação"
                        objects="movimentações"
                        search={search}
                        setSearch={setSearch}
                        ModalComponent={MovModal}
                    />
                </div>
            </div>

            <TableMovs
                pagination={pagination}
                setPagination={setPagination}
                paginatedItems={data}
            />
        </MainLayout>
    );
};

export default Movs;
