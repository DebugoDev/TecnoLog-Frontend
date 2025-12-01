// pages/Production/index.tsx
import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import ProductionValuesBar from "../../components/ProductionValuesBar";
import ProductionBox from "../../components/ProductionBox";
import SearchBar from "../../components/SearchBar";
import UserModal from "../../components/UserModal";

const Production: React.FC = () => {

    const [search, setSearch] = useState("");
    const [overview, setOverview] = useState({
        separated: 10,
        pending: 5,
    });

    return (
        <MainLayout title="Requisições de Produção">
            <div className="flex flex-col space-y-0">
                <div className="rounded-2xl shadow-md z-20">
                    <SearchBar
                        title="Requisição"
                        objects="requisições"
                        search={search}
                        setSearch={setSearch}
                        ModalComponent={UserModal}
                    />
                </div>

                <div className="rounded-2xl shadow-md -mt-4">
                    <ProductionValuesBar overview={overview} />
                </div>
                <ProductionBox search={search} />
            </div>

        </MainLayout>
    );
};

export default Production;
