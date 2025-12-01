import React from "react";
import HeaderTable from "./HeaderTable";
import TableLine from "./TableLine";
import Pagination from "./Pagination";
import type { IRegister } from "../services/registerService";
import type { IPagination } from "../services/api";

interface TableMovsProps {
    pagination: IPagination;
    setPagination: (value: IPagination) => void;
    paginatedItems?: IRegister[];
}

const TableMovs: React.FC<TableMovsProps> = ({
    pagination,
    setPagination,
    paginatedItems
}) => {
    return (
        <div className="w-full">
            <div className="overflow-x-auto w-full mx-auto mt-5 rounded-xl overflow-hidden">
                <HeaderTable
                    columnOne="Tipo"
                    columnTwo="Part Number"
                    columnThree="Material"
                    columnFour="Observação"
                    columnFive="Data"
                    columnSix="Quantidade"
                />

                <div>
                    {paginatedItems?.map((item) => (
                        <TableLine
                            key={item.id}
                            columnOne={item.registerType}
                            columnTwo={item.stockItem.code}
                            columnThree={item.stockItem.description}
                            columnFour={item.observation ?? "-"}
                            columnFive={new Date(item.createdAt).toLocaleDateString("pt-BR")}
                            columnSix={`${item.amount} ${item.stockItem.unitOfMeasurement}`}
                        />
                    ))}
                </div>
            </div>

            <Pagination
                pagination={pagination}
                onPageChange={(page) => setPagination({ ...pagination, page })}
            />
        </div>
    );
};

export default TableMovs;
