import React, { useState } from "react";
import UserCard from "./UserCard";
import Pagination from "./Pagination";

interface User {
    name: string;
    sector: string;
    completeName: string;
    email: string;
    birthDate: string;
}

const UsersBox: React.FC = () => {
    const usersMock: User[] = Array.from({ length: 45 }, (_, i) => ({
        name: `Usuário ${i + 1}`,
        sector: ["Logística", "Produção", "Compras", "Qualidade", "Engenharia"][
            i % 5
        ],
        completeName: `Nome Completo do Usuário ${i + 1}`,
        email: `usuario${i + 1}@tecnotooling.com`,
        birthDate: `${String((i % 28) + 1).padStart(2, "0")}/${String(
            (i % 12) + 1
        ).padStart(2, "0")}/200${i % 10}`,
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const totalPages = Math.ceil(usersMock.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentUsers = usersMock.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="flex flex-col w-full items-center justify-center h-full">
            <div className="grid grid-cols-4 gap-6 p-6 w-full ">
                {currentUsers.map((user, index) => (
                    <UserCard
                        key={index}
                        name={user.name}
                        sector={user.sector}
                        completeName={user.completeName}
                        email={user.email}
                        birthDate={user.birthDate}
                    />
                ))}
            </div>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={(page) => {
                    if (page >= 1 && page <= totalPages) {
                        setCurrentPage(page);
                    }
                }}
            />
        </div>
    );
};

export default UsersBox;
