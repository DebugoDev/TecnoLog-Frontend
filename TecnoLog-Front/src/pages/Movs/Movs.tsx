import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar";
import '../../App.css'
import TableMovs from "../../components/TableMovs";
import MovModal from "../../components/MovModal";

const Stock: React.FC = () => {
    return (
        <MainLayout
            title="Entrada e Saída"
        >
            <div className="flex flex-col space-y-0">
                <div className="rounded-2xl shadow-md z-20">
                    <SearchBar title="Movimentação" objects={""} search={""} setSearch={function (value: React.SetStateAction<string>): void {
                        throw new Error("Function not implemented.");
                    }} csvImportService={function (file: File): Promise<any> {
                        throw new Error("Function not implemented.");
                    }} csvExportService={function (): Promise<void> {
                        throw new Error("Function not implemented.");
                    }} ModalComponent={MovModal} />
                </div>
            </div>
            <TableMovs />
        </MainLayout>
    );
};

export default Stock;