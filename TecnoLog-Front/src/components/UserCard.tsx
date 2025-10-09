import React from "react";

interface UserCardProps {
    name: string;
    sector: string;
    completeName: string;
    email: string;
    birthDate: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, sector, completeName, email, birthDate }) => {
    return (
        <div className="bg-[#f8f9fa] flex shadow-lg rounded-3xl p-5 flex-col gap-4">
            <div className="flex justify-between w-full">
                <div className="w-2/3">
                    <p className="font-bold text-lg">{name}</p>
                    <p className="text-md font-semibold">{sector}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#1f3449] flex items-center justify-center text-white font-semibold shadow-lg text-lg">
                    {name
                        .split(" ")
                        .filter((n) => n.length > 0)
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                </div>
            </div>
            <div className="w-full">
                <p className="font-semibold text-md">Nome Completo</p>
                <p className="text-sm font-medium">{completeName}</p>
                <p className="font-semibold text-md">Email</p>
                <p className="text-sm font-medium">{email}</p>
                <p className="font-semibold text-md">Data de Nascimento</p>
                <p className="text-sm font-medium">{birthDate}</p>
            </div>
        </div>
    );
};

export default UserCard;
