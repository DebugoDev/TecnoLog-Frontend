import React from "react";
import MainLayout from "../../layouts/MainLayout";
import UserSearch from "../../components/UserSearch";
import '../../App.css'
import ProductionBox from "../../components/ProductionBox";
import ProductionBar from "../../components/ProductionBar";
import SearchBar from "../../components/SearchBar";
import ProductionSearch from "../../components/ProductionSearch";

const Production: React.FC = () => {
    return (
        <MainLayout
            title="Requisições de Produção"
            userName="Maria Pimenta"
            userEmail="maria.log@tecnotooling.com"
        >
            <div className="flex flex-col space-y-0">
                <div className="rounded-2xl shadow-md z-20">
                    <ProductionSearch />
                </div>
                <div className="rounded-2xl shadow-md -mt-4">
                    <ProductionBar separated={"7"} noSeparated={"6"} />
                </div>
            </div>
            <ProductionBox />
        </MainLayout>
    );
};

export default Production;
