import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import UserSearch from "../../components/UserSearch";
import UsersBox from "../../components/UsersBox";

import '../../App.css'

const Users: React.FC = () => {

    const [search, setSearch] = useState("");

    return (
        <MainLayout
            title="Usuários"
            userName="Maria Pimenta"
            userEmail="maria.log@tecnotooling.com"
        >
            <div className="flex flex-col space-y-0">
                <div className="rounded-2xl shadow-md z-20">
                    <UserSearch search={search} setSearch={setSearch} title="Usuário" />
                </div>
                <UsersBox search={search} />
            </div>
        </MainLayout>
    );
};

export default Users;
