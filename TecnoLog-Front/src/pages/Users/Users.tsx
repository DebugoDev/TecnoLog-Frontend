import React, { useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import UsersBox from "../../components/UsersBox";
import userService from "../../services/userService";
import SearchBar from "../../components/SearchBar";

import '../../App.css'

const Users: React.FC = () => {

    const [search, setSearch] = useState("");

    return (
        <MainLayout
            title="Usuários"
        >
            <div className="flex flex-col space-y-0">
                <div className="rounded-2xl shadow-md z-20">
                   <SearchBar title="Usuários" objects="usuários" search={search} setSearch={setSearch} csvImportService={userService.importCsv} />
                </div>
                <UsersBox search={search} />
            </div>
        </MainLayout>
    );
};

export default Users;