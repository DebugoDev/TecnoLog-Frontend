import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar";
import '../../App.css'
import TableMovs from "../../components/TableMovs";

const Stock: React.FC = () => {
    return (
        <MainLayout
            title="Entrada e Saída"
            userName="Maria Pimenta"
            userEmail="maria.log@tecnotooling.com"
        >
            <div className="flex flex-col space-y-0">
                <div className="rounded-2xl shadow-md z-20">
                    <SearchBar title="Movimentação" />
                </div>
            </div>
            <TableMovs />
        </MainLayout>
    );
};

export default Stock;
