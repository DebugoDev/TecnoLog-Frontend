import React, { type Dispatch, type SetStateAction } from "react";
import HeaderTable from "./HeaderTable";
import TableLine from "./TableLine";
import Pagination from "./Pagination";
import type { IPagination } from "../services/api";
import type { IStockItem } from "../services/stockItemService";


interface TableProps {
    pagination: IPagination
    setPagination: Dispatch<SetStateAction<IPagination>>
    paginatedItems?: IStockItem[]
}

const Table: React.FC<TableProps> = ({ pagination, setPagination, paginatedItems }) => {

    return (
        <div className="w-full">
            <div className="overflow-x-auto w-full mx-auto mt-5 rounded-xl overflow-hidden ">
                <HeaderTable
                    columnOne="Status"
                    columnTwo="Part Number"
                    columnThree="Material"
                    columnFour="Grupo"
                    columnFive="Estoque"
                    columnSix="Valor no Estoque"
                />

                <div>
                    {paginatedItems?.map((item) => (
                        <TableLine
                            key={item.id}
                            columnOne={item.status}
                            columnTwo={item.code}
                            columnThree={item.description}
                            columnFour={(() => {
                                switch (item.stockGroup) {
                                    case "CONSUMPTION":
                                        return "Consumo";
                                    case "DIRECT":
                                        return "Diretos";
                                    case "INDIRECT":
                                        return "Indiretos";
                                    default:
                                        return "-";
                                }
                            })()}
                            columnFive={!item.currentStock ? "-" : `${item.currentStock} ${item.unitOfMeasurement}`}
                            columnSix={
                                item.stockValue.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })
                            }
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

export default Table;
