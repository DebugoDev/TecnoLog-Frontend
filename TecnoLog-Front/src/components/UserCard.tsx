import React from "react";
import type { IUser } from "../services/userService";

const UserCard: React.FC<IUser> = (user) => {
    return (
        <div className="bg-[#f8f9fa] flex shadow-lg rounded-3xl p-5 flex-col gap-4">
            <div className="flex justify-between w-full">
                <div className="w-2/3">
                    <p className="font-bold text-lg">{user.name}</p>
                    <p className="text-md font-semibold">{user.userDepartment || "-"}</p>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg text-lg cursor-default`}
                    style={{ backgroundColor: user.profile.color }}>
                    {user.profile.abbreviation}
                </div>
            </div>
            <div className="w-full">
                <div className="flex gap-1.5 items-center">
                    <span className="font-semibold text-md">Código do funcionário:</span>
                    <span className="text-sm font-medium">{user.code}</span>
                </div>
                <div className="flex gap-1.5 items-center">
                    <span className="font-semibold text-md">Acesso:</span>
                    <span className="text-sm font-medium">{user.role == "DATA" ? "-" : user.role}</span>
                </div>
                <p className="font-semibold text-md">Email</p>
                <p className="text-sm font-medium">{user.email || "-"}</p>
            </div>
        </div>
    );
};

export default UserCard;
