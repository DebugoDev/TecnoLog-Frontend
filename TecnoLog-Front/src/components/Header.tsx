import React, { useState, useContext } from "react";
import type { IUser } from "../services/userService";
import { UserContext } from "../contexts/UserContext"; // Importar o contexto

import { LogOut } from 'lucide-react';
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    title: string;
    user?: IUser
}

const Header: React.FC<HeaderProps> = ({ title, user }) => {

    const [modal, setModal] = useState(false);

    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = (e: React.MouseEvent) => {
        e.stopPropagation();

        logout();
        navigate("/login");
    }

    return (
        <header className="flex items-center justify-between px-12 py-6 bg-[#ededed]">
            <h1 className="text-2xl font-bold text-[#1f3449]">{title}</h1>

            <div className="flex items-center space-x-4">
                <div className="relative">
                    <div className="w-10 h-10 select-none rounded-full flex items-center justify-center text-white font-semibold shadow-lg cursor-pointer hover:brightness-75 transition duration-200"
                        style={{ backgroundColor: user?.profile.color }} onClick={() => setModal(true)}>
                        {user?.profile.abbreviation}
                    </div>

                    {modal && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setModal(false)} />

                            <div className="absolute flex items-center gap-3 py-3 px-5 top-full left-0 mt-3 bg-white rounded-lg z-50 shadow-lg cursor-pointer hover:bg-gray-50 transition duration-200"
                                onClick={handleLogout}>
                                <span className="font-semibold text-gray-700 select-none">Logout</span>
                                <LogOut size={18} />
                            </div>
                        </>
                    )}
                </div>

                <div className="flex flex-col text-left">
                    <span className="text-gray-900 font-semibold">{user?.name}</span>
                    <span className="text-gray-500 text-sm">{user?.email}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;