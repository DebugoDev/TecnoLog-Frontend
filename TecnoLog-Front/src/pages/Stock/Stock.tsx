import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar";
import ValuesBar from "../../components/ValuesBar";
import Table from "../../components/Table";

import '../../App.css'
import type { IStockItem, IStockOverview } from "../../services/stockItemService";
import stockItemService from "../../services/stockItemService";
import type { IPagination } from "../../services/api";

const Stock: React.FC = () => {

    const [search, setSearch] = useState("");

    const [pagination, setPagination] = useState<IPagination>({
        page: 1,
        pageSize: 15,
        totalPages: 1,
        totalItems: 0,
        hasPreviousPage: false,
        hasNextPage: false
    });

    const [data, setData] = useState<IStockItem[]>();
    const [overview, setOverview] = useState<IStockOverview>();

    const handleStock = async () => {
        const response = await stockItemService.getPaginated({
            search, page: pagination.page, size: pagination.pageSize
        });

        setOverview(response.overview);
        setData(response.paginatedItems);
        setPagination(response.pagination);
    }

    useEffect(() => {
        setPagination({ ...pagination, page: 1 })
    }, [search])

    useEffect(() => {
        handleStock();
    }, [pagination.page, search])

    return (
        <MainLayout
            title="Estoque"
        >
            <div className="flex flex-col space-y-0">
                <div className="rounded-2xl shadow-md z-20">
                    <SearchBar title={"Produto"} objects={"produtos"} search={search} setSearch={setSearch} csvImportService={stockItemService.importCsv} csvExportService={stockItemService.exportCsv} />
                </div>
                <div className="rounded-2xl shadow-md -mt-4">
                    <ValuesBar overview={overview} />
                </div>
            </div>
            <Table pagination={pagination} setPagination={setPagination} paginatedItems={data} />
        </MainLayout>
    );
};

export default Stock;
